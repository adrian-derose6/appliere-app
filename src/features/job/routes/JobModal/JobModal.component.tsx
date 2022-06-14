import { useEffect, useState } from 'react';
import { useNavigate, useMatch, useParams } from 'react-router-dom';
import {
	Modal,
	LoadingOverlay,
	Tabs,
	Avatar,
	Title,
	Text,
	Group,
	Button,
} from '@mantine/core';
import { ImInfo } from 'react-icons/im';
import { FaListUl } from 'react-icons/fa';
import { VscNotebook } from 'react-icons/vsc';
import { IoPeopleOutline } from 'react-icons/io5';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

import { useStyles } from './JobModal.styles';
import { JobInfo, JobContacts } from '@/features/job/components';
import { BrandButton } from '@/components/Buttons';
import { useGetJob } from '@/features/job';
import { formatJobType } from '@/features/job/utils/job-types';
import { JobType } from '../../types';

const OPEN_TIMEOUT = 50;
const CLOSE_TIMEOUT = 200;

const tabsList = [
	{
		label: 'Job Info',
		tabKey: 'job-info',
		icon: <ImInfo />,
		Component: JobInfo,
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
		Component: JobContacts,
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

export const JobModal = () => {
	const [opened, setOpened] = useState<boolean>(false);
	const [activeTab, setActiveTab] = useState<number>(0);
	const [jobType, setJobType] = useState<string>('');
	const params = useParams();
	const { data, isLoading, isSuccess, isError } = useGetJob({
		jobId: params.jobId as string,
	});
	const navigate = useNavigate();
	const match = useMatch('/job/*');
	const { classes } = useStyles();

	useEffect(() => {
		if (match?.pathname) {
			setTimeout(() => setOpened(true), OPEN_TIMEOUT);
		}
		if (data?.job?.jobType) {
			const formattedJobType = formatJobType(data.job.jobType);
			setJobType(formattedJobType);
		}
	}, [match, data?.job?.jobType]);

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
				title: classes.modalTitle,
				close: classes.modalClose,
				overlay: classes.modalOverlay,
			}}
		>
			<LoadingOverlay
				visible={isLoading}
				overlayOpacity={0.3}
				overlayColor='#c5c5c5'
			/>
			<Group noWrap position='right' className={classes.buttonHeader}>
				<Group noWrap spacing='xs'>
					<BrandButton size='xs'>Move</BrandButton>
					<Button size='xs' variant='default' onClick={handleModalClose}>
						Close
					</Button>
				</Group>
			</Group>
			<Group noWrap className={classes.jobHeader}>
				<Avatar size={42} />
				<div>
					<Title className={classes.jobHeaderText}>{data?.job?.employer}</Title>
					<Text className={classes.jobHeaderSubtext}>
						{data?.job?.title}
						{jobType && ` | ${jobType}`}
					</Text>
				</div>
			</Group>
			<Tabs
				grow
				position='center'
				onTabChange={handleTabChange}
				classNames={{
					tabsListWrapper: classes.tabsListWrapper,
					body: classes.tabsBody,
				}}
				active={activeTab}
			>
				{tabsList.map((tab, index) => {
					const { Component } = tab;
					return (
						<Tabs.Tab
							key={index}
							label={tab.label}
							icon={tab.icon}
							tabKey={tab.tabKey}
						>
							{isSuccess && Component && <Component job={data?.job} />}
						</Tabs.Tab>
					);
				})}
			</Tabs>
		</Modal>
	);
};
