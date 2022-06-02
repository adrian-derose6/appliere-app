import {
	Container,
	Text,
	TextInput,
	Group,
	Button,
	ActionIcon,
} from '@mantine/core';
import { useSetState } from '@mantine/hooks';
import { IoClose } from 'react-icons/io5';

import { useStyles } from './MultiTextInput.styles';

interface Props {
	label: string;
	addButtonName: string;
	icon?: React.ReactNode;
	placeholder: string;
	selectOptions: string[];
}

type InputState = {
	value: string;
	category: string;
};

export const MultiTextInput = ({
	label,
	icon,
	addButtonName,
	placeholder,
}: Props) => {
	const [state, setState] = useSetState<{ inputs: InputState[] }>({
		inputs: [],
	});
	const { classes } = useStyles();

	const addInput = () => {
		setState((current) => ({
			inputs: [...current.inputs, { value: '', category: '' }],
		}));
	};

	const removeInput = (index: number) => {
		setState((current) => ({
			inputs: current.inputs.filter((item: InputState, i) => index !== i),
		}));
	};

	return (
		<>
			<Text className={classes.inputLabel}>{label}</Text>
			<Container fluid className={classes.container} p={5}>
				{state.inputs.map((item, index) => {
					return (
						<Group
							align='center'
							position='apart'
							className={classes.inputGroup}
						>
							<TextInput
								placeholder={placeholder}
								mb='md'
								icon={icon}
								required
								variant='unstyled'
								classNames={{ input: classes.input }}
							/>
							<Group align='center'>
								<ActionIcon
									variant='transparent'
									onClick={() => removeInput(index)}
								>
									<IoClose />
								</ActionIcon>
							</Group>
						</Group>
					);
				})}
				<Button size='xs' variant='subtle' onClick={addInput} compact>
					+ add {addButtonName}
				</Button>
			</Container>
		</>
	);
};
