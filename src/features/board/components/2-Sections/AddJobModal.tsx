import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Modal } from '@mantine/core';

type Props = {};
export const AddJobModal = (props: Props) => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<Modal
			size='sm'
			centered
			opened={true}
			onClose={() => navigate(-1)}
		></Modal>
	);
};
