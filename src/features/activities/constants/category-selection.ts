export enum ActivityCategory {
	APPLY = 'APPLY',
	FOLLOW_UP = 'FOLLOW_UP',
	PREP_COVER_LETTER = 'PREP_COVER_LETTER',
	PREP_RESUME = 'PREP_RESUME',
	REACH_OUT = 'REACH_OUT',
	PREP_FOR_INTERVIEW = 'PREP_FOR_INTERVIEW',
	PHONE_SCREEN = 'PHONE_SCREEN',
	PHONE_INTERVIEW = 'PHONE_INTERVIEW',
	ON_SITE_INTERVIEW = 'ON_SITE_INTERVIEW',
	OFFER_RECEIVED = 'OFFER_RECEIVED',
	ACCEPT_OFFER = 'ACCEPT_OFFER',
	DECLINE_OFFER = 'DECLINE_OFFER',
	REJECTED = 'REJECTED',
	SEND_THANK_YOU = 'SEND_THANK_YOU',
	EMAIL = 'EMAIL',
	MEETING = 'MEETING',
	PHONE_CALL = 'PHONE_CALL',
	GET_REFERENCE = 'GET_REFERENCE',
	SEND_AVAILABILITY = 'SEND_AVAILABILITY',
	ASSIGNMENT = 'ASSIGNMENT',
	NETWORKING_EVENT = 'NETWORKING_EVENT',
	OTHER = 'OTHER',
	APPLICATION_WITHDRAWN = 'APPLICATION_WITHDRAWN',
}

export const CATEGORY_SELECTION = [
	{
		label: 'Apply',
		value: ActivityCategory.APPLY,
		color: 'rgb(255, 196, 55)',
	},
	{
		label: 'Follow Up',
		value: ActivityCategory.FOLLOW_UP,
		color: 'rgb(35, 245, 116)',
	},
	{
		label: 'Prep Cover Letter',
		value: ActivityCategory.PREP_COVER_LETTER,
		color: 'rgb(98, 144, 6)',
	},
	{
		label: 'Prep Resume',
		value: ActivityCategory.PREP_RESUME,
		color: 'rgb(80, 0, 151)',
	},
	{
		label: 'Reach Out',
		value: ActivityCategory.REACH_OUT,
		color: 'rgb(211, 98, 234)',
	},
	{
		label: 'Prep for Interview',
		value: ActivityCategory.PREP_FOR_INTERVIEW,
		color: 'rgb(210, 161, 6)',
	},
	{
		label: 'Phone Screen',
		value: ActivityCategory.PHONE_SCREEN,
		color: 'rgb(255, 167, 141)',
	},
	{
		label: 'Phone Interview',
		value: ActivityCategory.PHONE_INTERVIEW,
		color: 'rgb(255, 126, 182',
	},
	{
		label: 'On Site Interview',
		value: ActivityCategory.ON_SITE_INTERVIEW,
		color: 'rgb(255, 109, 55)',
	},
	{
		label: 'Offer Received',
		value: ActivityCategory.OFFER_RECEIVED,
		color: 'rgb(80, 227, 194)',
	},
	{
		label: 'Accept Offer',
		value: ActivityCategory.ACCEPT_OFFER,
		color: 'rgb(0, 158, 255)',
	},
	{
		label: 'Decline Offer',
		value: ActivityCategory.DECLINE_OFFER,
		color: 'rgb(250, 77, 86)',
	},
	{
		label: 'Rejected',
		value: ActivityCategory.REJECTED,
		color: 'rgb(212, 187, 255)',
	},
	{
		label: 'Send Thank You',
		value: ActivityCategory.SEND_THANK_YOU,
		color: 'rgb(72, 94, 212)',
	},
	{
		label: 'Email',
		value: ActivityCategory.EMAIL,
		color: 'rgb(10, 123, 135)',
	},
	{
		label: 'Meeting',
		value: ActivityCategory.MEETING,
		color: 'rgb(189, 16, 224)',
	},
	{
		label: 'Phone Call',
		value: ActivityCategory.PHONE_CALL,
		color: 'rgb(101, 109, 165)',
	},

	{
		label: 'Get Reference',
		value: ActivityCategory.GET_REFERENCE,
		color: 'rgb(159, 24, 83)',
	},

	{
		label: 'Send Availability',
		value: ActivityCategory.SEND_AVAILABILITY,
		color: 'rgb(111, 220, 140)',
	},

	{
		label: 'Assignment',
		value: ActivityCategory.ASSIGNMENT,
		color: 'rgb(177, 106, 0)',
	},
	{
		label: 'Application Withdrawn',
		value: ActivityCategory.APPLICATION_WITHDRAWN,
		color: 'rgb(209, 39, 113)',
	},
	{
		label: 'Networking Event',
		value: ActivityCategory.NETWORKING_EVENT,
		color: 'rgb(150, 150, 150)',
	},
	{
		label: 'Other',
		value: ActivityCategory.OTHER,
		color: 'rgb(186, 230, 255)',
	},
];
