import { BsPlusLg } from 'react-icons/bs';
import { IconContext } from 'react-icons';

type Props = {
	color?: string;
	size?: string;
};
export const PlusIcon = ({ color, size }: Props) => {
	return (
		<IconContext.Provider value={{ color, size }}>
			<BsPlusLg />
		</IconContext.Provider>
	);
};
