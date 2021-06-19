export const declinationNumber = (number: number, textForms: Array<string>): string => {
	if (number === 0) return textForms[2];
	number = Math.abs(number) % 100;
	let normalizedNumber = number % 10;
	if (number > 10 && number < 20) return textForms[2];
	if (normalizedNumber > 1 && normalizedNumber < 5) return textForms[1];
	if (normalizedNumber === 1) return textForms[0];
	return textForms[2];
}


