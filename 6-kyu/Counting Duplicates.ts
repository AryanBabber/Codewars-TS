export function duplicateCount(text: string): number {
	return (
		text
			.toLowerCase()
			.split("")
			.sort()
			.join("")
			.match(/([^])\1+/g) || []
	).length;
}
