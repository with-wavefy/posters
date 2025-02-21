type IsDayFunction = (date: Date) => boolean;

type Slots = {
	days: number[];
	weeks?: number[];
};

type CreateIsDayFunction = (slots: Slots[]) => IsDayFunction;

const createIsDay: CreateIsDayFunction =
	(slots) =>
	(date = new Date()) => {
		const day = date.getDay();
		const week = Math.ceil(date.getDate() / 7);
		return slots.some(
			(slot) => slot.days.includes(day) && (slot.weeks?.length ? slot.weeks.includes(week) : true)
		);
	};

export default createIsDay;
