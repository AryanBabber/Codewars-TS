export class Kata {
	static highAndLow(numbers: string): string {
		let numArr = numbers
			.trim()
			.split(" ")
			.map(Number)
			.sort((a, b) => b - a);
		return numArr[0] + " " + numArr[numArr.length - 1];
	}
}
