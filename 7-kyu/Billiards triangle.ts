export function pyramid(balls: number): number {
	let levels: number = 0;
	for (let i = 1; i <= balls; i++) {
		balls -= i;
		levels += 1;
	}
	return levels;
}
