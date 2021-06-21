export type ApproachType = {
	title: string,
	order: number,
	breakBeforeInSec: number,
	type: 'CARDIO' | 'WORKOUT',
	weight?: number,
	repeat?: number,
	speed?: number,
	time?: number
}

export type TrainingType = {
	id: number,
	title: string,
	datetime: string,
	description: string | null,
	approach: Array<ApproachType>
}