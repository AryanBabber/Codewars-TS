export function trailingZeros(n: number): number {
	return n.toString(2).split("").reverse().indexOf("1");
}
