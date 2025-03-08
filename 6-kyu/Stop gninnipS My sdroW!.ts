export function spinWords(words: string): string {
	return words
		.split(" ")
		.map((a) => (a.length >= 5 ? a.split("").reverse().join("") : a))
		.join(" ");
}
