import {useEffect} from 'react';

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
	if (!timeInSeconds) return 'Время не выставлено';
	const timeInMin = Math.floor(timeInSeconds / 60);
	const secondsInFullMin = timeInMin * 60;
	const seconds = timeInSeconds - secondsInFullMin;
	const hours = Math.floor(timeInMin / 60);
	const minutesInHours = hours * 60;
	const remainsMinutes = timeInMin - minutesInHours;

	const hoursText = hours !== 0 ? `${ hours } ${ declinationNumber(hours, [ 'час', 'часа', 'часов' ]) }` : '';
	const minutesText = remainsMinutes !== 0 ? `${ remainsMinutes } ${ declinationNumber(remainsMinutes, [ 'минута', 'минуты', 'минут' ]) }` : '';
	const secondsText = seconds !== 0 ? `${ seconds } ${ declinationNumber(seconds, [ 'секунда', 'секунды', 'секунд' ]) }` : '';
	const isHoursEmpty = !hoursText;
	const isMinutesEmpty = !minutesText;
	const isSecondsEmpty = !secondsText;

	const isEmpty = isMinutesEmpty && isSecondsEmpty && isHoursEmpty;
	const isEmptyText = 'Время не выставлено';

	const isFullText = !isHoursEmpty && !isMinutesEmpty && !isSecondsEmpty;
	const fullTextVariant = `${ hoursText }, ${ minutesText } и ${ secondsText }`;


	const withoutSeconds = !isHoursEmpty && !isMinutesEmpty && isSecondsEmpty;
	const withoutSecondsText = `${ hoursText } и ${ minutesText }`;

	const withoutMinutes = !isHoursEmpty && isMinutesEmpty && !isSecondsEmpty;
	const withoutMinutesText = `${ hoursText } и ${ secondsText }`;

	const withoutHours = isHoursEmpty && !isMinutesEmpty && !isSecondsEmpty;
	const withoutHoursText = `${ minutesText } и ${ secondsText }`;


	const withoutSecondsAndMinutes = !isHoursEmpty && isMinutesEmpty && isSecondsEmpty;
	const withoutSecondsAndMinutesText = `${ hoursText }`;

	const withoutHoursAndSeconds = isHoursEmpty && !isMinutesEmpty && isSecondsEmpty;
	const withoutHoursAndSecondsText = `${ minutesText }`;

	const withoutHoursAndMinutes = isHoursEmpty && isMinutesEmpty && !isSecondsEmpty;
	const withoutHoursAndMinutesText = `${ secondsText }`;


	switch (true) {
		case isEmpty: return isEmptyText;
		case isFullText: return fullTextVariant;
		case withoutSeconds: return withoutSecondsText;
		case withoutMinutes: return withoutMinutesText;
		case withoutSecondsAndMinutes: return withoutSecondsAndMinutesText;
		case withoutHours: return withoutHoursText;
		case withoutHoursAndSeconds: return withoutHoursAndSecondsText;
		case withoutHoursAndMinutes: return withoutHoursAndMinutesText;
		default: return isEmptyText;
	}
};

export const secondsToTime = (seconds: number | null): [ hours: number, minutes: number, seconds: number ] => {
	if (!seconds) return [ 0, 0, 0 ];
	const minutes = Math.floor(seconds / 60);
	const secondsInMinutes = minutes * 60;
	const remainsSeconds = seconds - secondsInMinutes;
	const hours = Math.floor(minutes / 60);
	const minutesInHours = hours * 60;
	const remainsMinutes = minutes - minutesInHours;
	return [ hours, remainsMinutes, remainsSeconds ];
};

export const timeToSeconds = (hours: number, minutes: number, seconds: number): number => {
	const minutesToSeconds = minutes * 60;
	const hoursInSeconds = hours * (60 ** 2);
	return seconds + minutesToSeconds + hoursInSeconds;
}

export const useEventListener = (target: any, type: 'click' | string, listener: (...args: Array<any>) => any, options = []) => {
	useEffect(
		() => {
			const targetIsRef = target.hasOwnProperty('current');
			const currentTarget = targetIsRef ? target.current : target;
			if (currentTarget) currentTarget.addEventListener(type, listener, ...options);
			return () => {
				if (currentTarget) currentTarget.removeEventListener(type, listener, ...options);
			};
		},
		[target, type, listener, options]
	);
};


