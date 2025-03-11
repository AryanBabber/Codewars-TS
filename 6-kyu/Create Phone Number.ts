export function createPhoneNumber(numbers: number[]): string {
	if (numbers.length != 10) return "";
	return (
		"(" +
		numbers.slice(0, 3).join("") +
		") " +
		numbers.slice(3, 6).join("") +
		"-" +
		numbers.slice(6).join("")
	);
}
