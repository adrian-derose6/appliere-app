import { useMutation } from 'react-query';

import { authFetch } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

interface DeleteContactDTO {
	contactId: string;
	boardId: string;
}

export const deleteContact = ({ contactId }: DeleteContactDTO) => {
	return authFetch.delete(`/contacts/${contactId}`);
};

type UseDeleteContactOptions = {
	config?: MutationConfig<typeof deleteContact>;
};

export const useDeleteContact = ({ config }: UseDeleteContactOptions = {}) => {
	return useMutation({
		onError: (_, __, context: any) => {},
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries(['contacts', variables.boardId]);
		},
		...config,
		mutationFn: deleteContact,
	});
};
