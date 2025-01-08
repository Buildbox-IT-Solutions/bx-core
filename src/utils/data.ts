/**
 * Converts a number of bytes into a human-readable string with the appropriate unit.
 *
 * @param bytes - The number of bytes to format.
 * @param decimals - The number of decimal places to include in the formatted string. Defaults to 2.
 * @returns A string representing the formatted number of bytes with the appropriate unit.
 *
 * @example
 * ```typescript
 * formatBytes(1024); // "1.00 KB"
 * formatBytes(1234, 3); // "1.205 KB"
 * formatBytes(0); // "0 Bytes"
 * ```
 */
export function formatBytes(bytes: number, decimals = 2): string {
	if (bytes === 0) return '0 Bytes'

	const k = 1024
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
	const i = Math.floor(Math.log(bytes) / Math.log(k))

	const dm = decimals >= 0 ? decimals : 0
	const value = bytes / k ** i

	return `${value.toFixed(dm)} ${sizes[i]}`
}

/**
 * Formats a given number of milliseconds into a human-readable string.
 * The function converts milliseconds into minutes, seconds, or milliseconds
 * based on the largest possible unit that can represent the time value.
 *
 * @param milliseconds - The number of milliseconds to format.
 * @returns A string representing the formatted time value.
 *
 * @example
 * ```typescript
 * formatMilliseconds(65000); // "1.08m"
 * formatMilliseconds(1500);  // "1.50s"
 * formatMilliseconds(500);   // "500ms"
 * ```
 */
export function formatMilliseconds(milliseconds: number): string {
	const timeUnits = [
		{ unit: 'm', value: 60000 },
		{ unit: 's', value: 1000 },
		{ unit: 'ms', value: 1 },
	]

	for (const { unit, value } of timeUnits) {
		if (milliseconds >= value) {
			const timeValue = milliseconds / value

			return `${timeValue.toFixed(unit === 'ms' ? 0 : 2)}${unit}`
		}
	}

	return '0ms'
}
