import { Menu, Tooltip } from '@mantine/core';

const styles = {
	root: {
		'&:hover': {
			color: 'black',
		},
	},
};
type Props = {};
export const ColumnMenu = (props: Props) => {
	return (
		<Tooltip
			label='More actions'
			withArrow
			arrowSize={5}
			position='bottom'
			gutter={0}
			styles={{ body: { fontSize: '12px' } }}
		>
			<Menu>
				<Menu.Item>Rename List</Menu.Item>
				<Menu.Item>Delete List</Menu.Item>
			</Menu>
		</Tooltip>
	);
};
