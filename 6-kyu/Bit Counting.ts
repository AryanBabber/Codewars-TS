export function countBits(n: number): number {
	return n.toString(2).replace(/0/g, "").length;
}
