export const fillWithCharBefore = (str: string | number, length: number, char = '0'): string => {
	if (typeof str === 'number') str = str.toString();
	return str.padStart(length, char);
};
