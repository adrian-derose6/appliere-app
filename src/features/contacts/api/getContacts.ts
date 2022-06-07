import { authFetch } from '@/lib/axios';
import { QueryConfig, ExtractFnReturnType } from '@/lib/react-query';
import { useQuery } from 'react-query';

export const getContacts = async ({
	boardId,
}: {
	boardId: string;
}): Promise<any> => {
	const res = await authFetch.get('/contacts', { params: { boardId } });
	return res.data;
};

type QueryFnType = typeof getContacts;

type UseGetContactsOptions = {
	config?: QueryConfig<QueryFnType>;
	boardId: string;
};

export const useGetContacts = ({ boardId, config }: UseGetContactsOptions) => {
	const queryKey = boardId ? ['contacts', boardId] : ['contacts'];
	return useQuery<ExtractFnReturnType<QueryFnType>>({
		...config,
		queryKey,
		queryFn: () => getContacts({ boardId }),
	});
};
