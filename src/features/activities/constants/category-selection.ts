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
	},
	{
		label: 'Follow Up',
		value: ActivityCategory.FOLLOW_UP,
	},
	{
		label: 'Prep Cover Letter',
		value: ActivityCategory.PREP_COVER_LETTER,
	},
	{
		label: 'Prep Resume',
		value: ActivityCategory.PREP_RESUME,
	},
	{
		label: 'Reach Out',
		value: ActivityCategory.REACH_OUT,
	},
	{
		label: 'Prep for Interview',
		value: ActivityCategory.PREP_FOR_INTERVIEW,
	},
	{
		label: 'Phone Screen',
		value: ActivityCategory.PHONE_SCREEN,
	},
	{
		label: 'Phone Interview',
		value: ActivityCategory.PHONE_INTERVIEW,
	},
	{
		label: 'On Site Interview',
		value: ActivityCategory.ON_SITE_INTERVIEW,
	},
	{
		label: 'Offer Received',
		value: ActivityCategory.OFFER_RECEIVED,
	},
	{
		label: 'Accept Offer',
		value: ActivityCategory.ACCEPT_OFFER,
	},
	{
		label: 'Decline Offer',
		value: ActivityCategory.DECLINE_OFFER,
	},
	{
		label: 'Rejected',
		value: ActivityCategory.REJECTED,
	},
	{
		label: 'Send Thank You',
		value: ActivityCategory.SEND_THANK_YOU,
	},
	{
		label: 'Email',
		value: ActivityCategory.EMAIL,
	},
	{
		label: 'Meeting',
		value: ActivityCategory.MEETING,
	},
	{
		label: 'Phone Call',
		value: ActivityCategory.PHONE_CALL,
	},

	{
		label: 'Get Reference',
		value: ActivityCategory.GET_REFERENCE,
	},

	{
		label: 'Send Availability',
		value: ActivityCategory.SEND_AVAILABILITY,
	},

	{
		label: 'Assignment',
		value: ActivityCategory.ASSIGNMENT,
	},
	{
		label: 'Application Withdrawn',
		value: ActivityCategory.APPLICATION_WITHDRAWN,
	},
	{
		label: 'Networking Event',
		value: ActivityCategory.NETWORKING_EVENT,
	},
	{
		label: 'Other',
		value: ActivityCategory.OTHER,
	},
];
