import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Tabs,
	Header,
	Group,
	Container,
	Button,
	UnstyledButton,
} from '@mantine/core';

import { useStyles } from './BoardNavigation.styles';

const boardLinks = [
	{
		label: 'Board',
		path: 'board',
	},
	{
		label: 'Activities',
		path: 'activities',
	},
	{
		label: 'Contacts',
		path: 'contacts',
	},
	{
		label: 'Map',
		path: 'map',
	},
	{
		label: 'Metrics',
		path: 'metrics',
	},
];

export const BoardNavigation = () => {
	const [activeTab, setActiveTab] = useState(0);
	const navigate = useNavigate();
	const { classes } = useStyles();

	const onChange = (active: number, tabKey: string) => {
		setActiveTab(active);
		navigate(tabKey);
	};

	return (
		<Header
			height={50}
			fixed
			position={{ top: 0 }}
			zIndex={100}
			classNames={{ root: classes.headerRoot }}
		>
			<Group
				direction='row'
				align='center'
				position='apart'
				spacing='xs'
				className={classes.headerLayout}
			>
				<Group>
					<Button variant='subtle'>Board Name</Button>
					<Tabs
						variant='pills'
						tabPadding={0}
						active={activeTab}
						onTabChange={onChange}
						style={{ zIndex: 100 }}
						classNames={{ root: classes.tabsRoot }}
					>
						{boardLinks.map((link, index) => (
							<Tabs.Tab
								key={index}
								label={link.label}
								tabKey={link.path}
							></Tabs.Tab>
						))}
					</Tabs>
				</Group>
				<Group spacing={10} className={classes.buttonsWrapper}>
					<Button>Share</Button>
					<Button>+Create</Button>
				</Group>
			</Group>
		</Header>
	);
};
