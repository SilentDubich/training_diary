export const declinationNumber = (number: number, textForms: Array<string>): string => {
	if (number === 0) return textForms[2];
	number = Math.abs(number) % 100;
	let normalizedNumber = number % 10;
	if (number > 10 && number < 20) return textForms[2];
	if (normalizedNumber > 1 && normalizedNumber < 5) return textForms[1];
	if (normalizedNumber === 1) return textForms[0];
	return textForms[2];
};

export const getFullTimeText = (timeInSeconds: number | null): string => {
	if (!timeInSeconds) return '';
	const timeInMin = Math.floor(timeInSeconds / 60);
	const secondsInFullMin = timeInMin * 60;
	const seconds = timeInSeconds - secondsInFullMin;
	const minutesText = timeInMin !== 0 ? `${ timeInMin } ${ declinationNumber(timeInMin, [ 'минута', 'минуты', 'минут' ]) }` : '';
	const secondsText = seconds !== 0 ? `${ seconds } ${ declinationNumber(seconds, [ 'секунда', 'секунды', 'секунд' ]) }` : '';
	const isMinutesEmpty = !minutesText;
	const isSecondsEmpty = !secondsText;
	const isEmptyText = isMinutesEmpty && isSecondsEmpty;
	const fullText = isEmptyText ? 'Время не выставлено' : isMinutesEmpty ? secondsText : isSecondsEmpty ? minutesText : `${ minutesText } и ${ secondsText }`;
	return fullText;
}


