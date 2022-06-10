import { useQuery } from 'react-query';

import { authFetch } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { Contact } from '../types';

export const getContact = async ({
	contactId,
}: {
	contactId: string;
}): Promise<Contact> => {
	const res = await authFetch.get(`/contacts/${contactId}`);
	return res.data.contact;
};

type QueryFnType = typeof getContact;

type UseGetContactOptions = {
	contactId: string;
	config?: QueryConfig<QueryFnType>;
};

export const useGetContact = ({ contactId, config }: UseGetContactOptions) => {
	return useQuery<ExtractFnReturnType<QueryFnType>>({
		...config,
		queryKey: ['contacts', contactId],
		queryFn: () => getContact({ contactId }),
	});
};
