import { useMutation } from 'react-query';

import { authFetch } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { ContactMethod, Contact } from '@/features/contacts/types';

export type CreateContactDTO = {
	data: {
		firstName: string;
		lastName: string;
		jobTitle: string;
		companies: string[];
		location: string;
		emails: ContactMethod[];
		phones: ContactMethod[];
		jobs: string[];
		boardId: string;
	};
};

export const createContact = async ({
	data,
}: CreateContactDTO): Promise<Contact> => {
	const res = await authFetch.post(`/contacts`, data);
	console.log(res.data.contact);
	return res.data.contact;
};

type UseCreateContactOptions = {
	config?: MutationConfig<typeof createContact>;
};

export const useCreateContact = ({ config }: UseCreateContactOptions = {}) => {
	return useMutation({
		onSuccess: async (data, variables) => {
			const { boardId, jobs } = variables.data;
			if (boardId) {
				queryClient.invalidateQueries(['contacts', boardId]);
			}
			queryClient.invalidateQueries(['contacts']);
		},
		...config,
		mutationFn: createContact,
	});
};
