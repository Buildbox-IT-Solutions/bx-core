import { format } from 'date-fns'

export function devConsole(
	method: (...data: unknown[]) => void,
	...args: unknown[]
) {
	if (process.env.NODE_ENV !== 'production') {
		method(format(new Date(), 'HH:mm:ss'), ...args.filter(Boolean))
	}
}

export function devLog(...args: unknown[]) {
	devConsole(console.log, ...args)
}

export function devError(...args: unknown[]) {
	devConsole(console.error, ...args)
}

export function devWarn(...args: unknown[]) {
	devConsole(console.warn, ...args)
}
