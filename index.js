import { createEffect } from 'solid-js'

const maxCallStackSize = 1000

export default function createEffectDevelopment(cb) {
	let count = 0
	const reset = () => (count = 0)
	createEffect(() => {
		count++
		if (count > maxCallStackSize) {
			return console.error('Possible Recursion in:', cb.toString())
		}
		cb()
		Promise.resolve().then(reset)
	})
}

export { createEffectDevelopment as createEffect }
