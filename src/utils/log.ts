import { format } from 'date-fns'

/**
 * Logs messages to the console in non-production environments.
 *
 * @param method - The console method to use for logging (e.g., console.log, console.error).
 * @param args - The arguments to log.
 */
export function devConsole(
	method: (...data: unknown[]) => void,
	...args: unknown[]
) {
	if (process.env.NODE_ENV !== 'production') {
		method(format(new Date(), 'HH:mm:ss'), ...args.filter(Boolean))
	}
}

/**
 * Logs messages to the console in non-production environments.
 *
 * @param args - The arguments to log.
 */
export function devLog(...args: unknown[]) {
	devConsole(console.log, ...args)
}

/**
 * Logs messages to the console in non-production environments.
 *
 * @param args - The arguments to log.
 */
export function devError(...args: unknown[]) {
	devConsole(console.error, ...args)
}

/**
 * Logs messages to the console in non-production environments.
 *
 * @param args - The arguments to log.
 */
export function devWarn(...args: unknown[]) {
	devConsole(console.warn, ...args)
}
