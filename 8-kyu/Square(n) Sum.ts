export function squareSum(numbers: number[]): number {
	return numbers.reduce((a, b) => a + b ** 2, 0);
}
