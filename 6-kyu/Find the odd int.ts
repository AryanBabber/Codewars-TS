export const findOdd = (arr: number[]): number => {
	return arr.reduce((a, b) => a ^ b);
};
