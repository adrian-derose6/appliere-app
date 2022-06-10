import { useMutation } from 'react-query';

import { authFetch } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { Contact, ContactMethod } from '@/features/contacts/types';

export type UpdateContactDTO = {
	data: {
		firstName?: string;
		lastName?: string;
		jobTitle?: string;
		companies?: string[];
		location?: string;
		emails?: ContactMethod[];
		phones?: ContactMethod[];
		jobs?: string[];
		boardId?: string;
	};
	contactId: string;
};

export const updateContact = async ({
	data,
	contactId,
}: UpdateContactDTO): Promise<Contact> => {
	const res = await authFetch.patch(`/contacts/${contactId}`, data);
	return res.data.updatedJob;
};

type UseUpdateContactOptions = {
	config?: MutationConfig<typeof updateContact>;
};

export const useUpdateContact = ({ config }: UseUpdateContactOptions = {}) => {
	return useMutation({
		onSettled: (data, err, variables) => {
			queryClient.invalidateQueries(['contacts', variables.contactId]);
		},
		...config,
		mutationFn: updateContact,
	});
};
