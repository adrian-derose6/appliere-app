import React, { forwardRef } from 'react';
import { Group, Text } from '@mantine/core';

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
	label: string;
	employer: string;
	value: string;
}

export const JobSelectItem = forwardRef<HTMLDivElement, ItemProps>(
	({ label, employer, value, ...others }: ItemProps, ref) => (
		<div ref={ref} {...others}>
			<Group noWrap>
				<div>
					<Text size='sm'>{label}</Text>
					<Text size='xs' color='dimmed'>
						{employer}
					</Text>
				</div>
			</Group>
		</div>
	)
);
