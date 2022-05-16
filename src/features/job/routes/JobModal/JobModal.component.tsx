import { useEffect, useState } from 'react';
import { useNavigate, useMatch, useParams, Outlet } from 'react-router-dom';
import { Modal, LoadingOverlay, Tabs } from '@mantine/core';
import { ImInfo } from 'react-icons/im';
import { FaListUl } from 'react-icons/fa';
import { VscNotebook } from 'react-icons/vsc';
import { IoPeopleOutline } from 'react-icons/io5';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

import { useStyles } from './JobModal.styles';
import { JobInfo } from '../../components/JobInfo/JobInfo.component';

const OPEN_TIMEOUT = 50;
const CLOSE_TIMEOUT = 200;

const tabsList = [
	{
		label: 'Job Info',
		tabKey: 'job-info',
		icon: <ImInfo />,
		component: <JobInfo />,
	},
	{
		label: 'Activities',
		tabKey: 'job-activities',
		icon: <FaListUl />,
	},
	{
		label: 'Contacts',
		tabKey: 'job-contacts',
		icon: <IoPeopleOutline />,
	},
	{
		label: 'Notes',
		tabKey: 'job-notes',
		icon: <VscNotebook />,
	},
	{
		label: 'Company',
		tabKey: 'job-company',
		icon: <HiOutlineOfficeBuilding />,
	},
];

type Props = {};

export const JobModal = (props: Props) => {
	const [opened, setOpened] = useState(false);
	const [activeTab, setActiveTab] = useState(0);
	const params = useParams();
	const navigate = useNavigate();
	const match = useMatch('/job/*');
	const { classes } = useStyles();

	useEffect(() => {
		if (match?.pathname) {
			setTimeout(() => setOpened(true), OPEN_TIMEOUT);
		}
	}, [match]);

	const handleModalClose = () => {
		setOpened(false);
		setTimeout(() => navigate(-1), CLOSE_TIMEOUT);
	};

	const handleTabChange = (active: number, tabKey: string) => {
		setActiveTab(active);
	};

	return (
		<Modal
			size='xl'
			padding={0}
			centered
			closeOnClickOutside
			opened={opened}
			onClose={handleModalClose}
			withCloseButton={false}
			classNames={{
				modal: classes.modal,
				header: classes.modalHeader,
				title: classes.modalTitle,
				close: classes.modalClose,
				overlay: classes.modalOverlay,
			}}
		>
			<LoadingOverlay
				visible={false}
				overlayOpacity={0.3}
				overlayColor='#c5c5c5'
			/>
			<Tabs grow position='center' onTabChange={handleTabChange}>
				{tabsList.map((tab, index) => {
					return (
						<Tabs.Tab
							key={index}
							label={tab.label}
							icon={tab.icon}
							tabKey={tab.tabKey}
						>
							{tab.component}
						</Tabs.Tab>
					);
				})}
			</Tabs>
		</Modal>
	);
};
