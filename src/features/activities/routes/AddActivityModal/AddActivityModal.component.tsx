import { useEffect, useState } from 'react';
import {
	useNavigate,
	useMatch,
	useParams,
	useLocation,
} from 'react-router-dom';
import {
	Modal,
	TextInput,
	Text,
	Textarea,
	Chips,
	Chip,
	Checkbox,
	Button,
	Group,
	Select,
	ScrollArea,
	Grid,
	SimpleGrid,
	LoadingOverlay,
	Divider,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { CgAdd } from 'react-icons/cg';
import { useForm } from '@mantine/form';

import { CATEGORY_SELECTION } from '@/features/activities/constants/category-selection';
import { BrandButton } from '@/components/Buttons';
import { useStyles } from './AddActivityModal.styles';

const OPEN_TIMEOUT = 50;
const CLOSE_TIMEOUT = 200;

type Props = {};

export const AddActivityModal = (props: Props) => {
	const [opened, setOpened] = useState(false);
	const params = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const locationState = location.state as { backgroundLocation?: Location };
	const match = useMatch('/add-activity/*');
	const { classes } = useStyles();

	useEffect(() => {
		if (match?.pathname) {
			setTimeout(() => setOpened(true), OPEN_TIMEOUT);
		}

		return () => {
			locationState.backgroundLocation = undefined;
		};
	}, [match]);

	const form = useForm({
		initialValues: {
			title: '',
			activityCategory: 'APPLY',
			boardId: params.boardId as string,
			jobId: '',
			startDate: '',
			endDate: '',
		},
	});

	type FormValues = typeof form.values;

	useEffect(() => {
		const { activityCategory, title } = form.values;
		const newTitle = CATEGORY_SELECTION.find(
			(item) => item.value === activityCategory
		)?.label;

		form.setFieldValue('title', newTitle as string);
	}, [form.values.activityCategory]);

	const handleModalClose = () => {
		setOpened(false);
		setTimeout(() => navigate(-1), CLOSE_TIMEOUT);
	};

	const handleSubmit = (values: FormValues) => {};

	return (
		<Modal
			size='lg'
			padding={0}
			title={
				<Group spacing={5}>
					<CgAdd />
					<Text>Log Activity</Text>
				</Group>
			}
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
			<form onSubmit={form.onSubmit(handleSubmit)}>
				<Grid gutter={0}>
					<Grid.Col span={8} p={20} className={classes.mainSection}>
						<TextInput
							required
							label='Title'
							placeholder='i.e. Apply'
							classNames={{ label: classes.inputLabel }}
							mb={20}
							{...form.getInputProps('title')}
						/>

						<Text className={classes.inputLabel}>Category</Text>
						<ScrollArea scrollbarSize={8} style={{ height: 130 }} mb={20}>
							<Chips
								multiple={false}
								size='xs'
								mt={10}
								variant='filled'
								{...form.getInputProps('activityCategory')}
							>
								{CATEGORY_SELECTION.map((category, index) => {
									return <Chip value={category.value}>{category.label}</Chip>;
								})}
							</Chips>
						</ScrollArea>
						<SimpleGrid cols={2} mb={20}>
							<DatePicker label='Start Date' placeholder='+ set start date' />
							<DatePicker label='End Date' placeholder='+ set end date' />
						</SimpleGrid>
						<Textarea
							label='Note'
							placeholder='i.e: A note about the activity'
							mb={20}
						/>
						<Checkbox
							label='Mark as Completed'
							classNames={{ label: classes.checkboxLabel }}
						/>
					</Grid.Col>
					<Grid.Col span={4} px={10} py={20} className={classes.rightSection}>
						<Text className={classes.linkedTo}>Linked to</Text>
						<Divider mt={5} mb={10} />
						<Select
							label='Job'
							placeholder='+ Link job'
							data={[]}
							transition='pop'
							transitionDuration={120}
							transitionTimingFunction='ease'
							classNames={{ input: classes.jobSelectInput }}
						/>
					</Grid.Col>
				</Grid>

				<Group position='right' p='xs' className={classes.modalFooter}>
					<Button
						variant='default'
						size='xs'
						className={classes.modalButton}
						onClick={handleModalClose}
					>
						Discard
					</Button>
					<BrandButton type='submit' size='xs' className={classes.modalButton}>
						Save Activity
					</BrandButton>
				</Group>
			</form>
		</Modal>
	);
};
