# Solid Create Effect Development

Detects possible recursion on createEffect for SolidJS.

A Solid tool. See https://www.solidjs.com/

## Usage

```jsx
import createEffect from 'solid-create-effect-development'

createEffect(() => {
	/*...*/
})
```

## Install

`npm install solid-create-effect-development`

## How it works?

It counts how many times the callback ran before the next microtask. If it did more than 1000 times then it displays an error with the string of the callback.

## Caveats

If the recursion is async(the next call comes after a microtask), then it wont be detected.

## Author

- https://github.com/titoBouzout

## URL

- https://github.com/titoBouzout/solid-create-effect-development
- https://www.npmjs.com/package/solid-create-effect-development
