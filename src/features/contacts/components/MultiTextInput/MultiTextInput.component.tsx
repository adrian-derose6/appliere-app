import { useState, useEffect } from 'react';
import {
	Container,
	Text,
	TextInput,
	Group,
	Button,
	ActionIcon,
	Select,
	Menu,
} from '@mantine/core';
import { IoClose } from 'react-icons/io5';
import { FiChevronDown } from 'react-icons/fi';

import { useStyles } from './MultiTextInput.styles';

interface Props {
	label: string;
	addButtonName: string;
	icon?: React.ReactNode;
	placeholder: string;
	selectOptions: string[];
	onChange: (values: MultiInputState[]) => void;
}

export type MultiInputState = {
	value: string;
	category: string;
};

export const MultiTextInput = ({
	label,
	icon,
	addButtonName,
	placeholder,
	selectOptions,
	onChange,
}: Props) => {
	const [inputs, setInputs] = useState<MultiInputState[]>([]);
	const { classes } = useStyles();

	useEffect(() => {
		onChange(inputs);
	}, [inputs]);

	const addInput = () => {
		setInputs((current) => [
			...current,
			{ value: '', category: selectOptions[0] },
		]);
	};

	const removeInput = (index: number) => {
		setInputs((current) =>
			current.filter((item: MultiInputState, i) => index !== i)
		);
	};

	const changeCategory = (category: string, index: number) => {
		const newInputs = [...inputs];
		newInputs[index].category = category;
		setInputs(newInputs);
	};

	const updateValue = (value: string, index: number) => {
		const newInputs = [...inputs];
		newInputs[index].value = value;
		setInputs(newInputs);
	};

	return (
		<>
			<Text className={classes.inputLabel}>{label}</Text>
			<Container fluid className={classes.container} px={5} pb={5}>
				{inputs.map((item, inputIndex) => {
					return (
						<Group
							align='center'
							position='apart'
							noWrap
							className={classes.inputGroup}
							key={inputIndex}
						>
							<TextInput
								placeholder={placeholder}
								icon={icon}
								required
								variant='unstyled'
								value={inputs[inputIndex].value}
								onChange={(event) =>
									updateValue(event.currentTarget.value, inputIndex)
								}
								classNames={{ input: classes.input }}
							/>
							<Group align='center' noWrap>
								<Menu
									control={
										<Button
											variant='default'
											compact
											className={classes.selectInput}
										>
											<FiChevronDown />
											<Text ml={5} size='xs'>
												{item.category}
											</Text>
										</Button>
									}
									size='auto'
								>
									{selectOptions.map((option, index) => (
										<Menu.Item
											onClick={() => changeCategory(option, inputIndex)}
											key={index}
										>
											{option}
										</Menu.Item>
									))}
								</Menu>

								<ActionIcon
									variant='transparent'
									onClick={() => removeInput(inputIndex)}
									className={classes.cancelIcon}
								>
									<IoClose />
								</ActionIcon>
							</Group>
						</Group>
					);
				})}
				<Button
					size='xs'
					variant='subtle'
					mt={inputs.length > 0 ? 0 : 7}
					onClick={addInput}
					compact
				>
					+ add {addButtonName}
				</Button>
			</Container>
		</>
	);
};
