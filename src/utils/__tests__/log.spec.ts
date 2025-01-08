import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { devError, devLog, devWarn } from '../log'

describe('log utilities', () => {
	const originalEnv = process.env.NODE_ENV

	beforeEach(() => {
		vi.useFakeTimers()
		vi.setSystemTime(new Date(2023, 0, 1, 12, 0, 0))
	})

	afterEach(() => {
		vi.useRealTimers()
		process.env.NODE_ENV = originalEnv
		vi.clearAllMocks()
	})

	it('should log messages in development environment', () => {
		const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

		devLog('test message')

		expect(logSpy).toHaveBeenCalledWith('12:00:00', 'test message')
	})

	it('should not log messages in production environment', () => {
		process.env.NODE_ENV = 'production'

		const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

		devLog('test message')

		expect(logSpy).not.toHaveBeenCalled()
	})

	it('should log errors in development environment', () => {
		const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

		devError('test error')

		expect(errorSpy).toHaveBeenCalledWith('12:00:00', 'test error')
	})

	it('should not log errors in production environment', () => {
		process.env.NODE_ENV = 'production'
		const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

		devError('test error')

		expect(errorSpy).not.toHaveBeenCalled()
	})

	it('should log warnings in development environment', () => {
		const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

		devWarn('test warning')

		expect(warnSpy).toHaveBeenCalledWith('12:00:00', 'test warning')
	})

	it('should not log warnings in production environment', () => {
		process.env.NODE_ENV = 'production'
		const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

		devWarn('test warning')

		expect(warnSpy).not.toHaveBeenCalled()
	})
})
