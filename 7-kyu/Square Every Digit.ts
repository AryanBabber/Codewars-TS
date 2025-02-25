export class Kata {
	static squareDigits(num: number): number {
		return +String(num)
			.split("")
			.map((v) => (+v) ** 2)
			.join("");
	}
}
