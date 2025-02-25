export class Kata {
	static getCount(str: string): number {
		const vowels: string[] = ["a", "e", "i", "o", "u"];
		let count = 0;
		for (let s of str) {
			if (vowels.includes(s)) {
				count++;
			}
		}
		return count;
	}
}
