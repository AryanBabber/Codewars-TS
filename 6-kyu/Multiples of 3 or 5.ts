export class Challenge {
	static solution(number: number): number {
		let count: number = 0;

		for (let i = 0; i < number; i++) {
			if (i % 3 == 0 || i % 5 == 0) {
				count += i;
			}
		}
		return count;
	}
}
