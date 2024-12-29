# Crypto Buffer 🚌

Version 2.0.1

## Lightweight TypeScript Node.js Buffers utility library

### Table of Contents

- [Getting started](#getting-started)
- [Utilities](#utilities)
	- [toDataView](#todataview)
	- [Common Utilities](#common-utilities)
		- [bufferEquals](#bufferequals)
	- [Conversion Utilities](#conversion-utilities)
		- [stringToBinary](#stringtobinary)
		- [stringToBytes](#stringtobytes)
		- [binaryToString](#binarytostring)
- [Security](#security)
- [Credits](#made-with-)

---

### Getting started

Run the following command to start using `crypto-buffer` in your projects:

```bash
npm i @alessiofrittoli/crypto-buffer
```

or using `pnpm`

```bash
pnpm i @alessiofrittoli/crypto-buffer
```

---

### Utilities

#### `toDataView`

The `toDataView` function is a utility designed to convert various data types into a `DataView`. It ensures compatibility with a wide range of input formats, including strings, arrays, typed arrays, and buffers, providing a `DataView` representation of the given data.

##### Input Type

```ts
type ToDataViewInput = (
	| string
	| Array<number>
	| ArrayLike<number>
	| Buffer
	| ArrayBuffer
	| ArrayBufferLike
	| Int8Array
	| Int16Array
	| Int32Array
	| Uint8Array
	| Uint16Array
	| Uint32Array
	| Uint8ClampedArray
)
```

<details>

<summary>Parameters</summary>

| Parameter | Type              | Description                                                             |
|-----------|-------------------|-------------------------------------------------------------------------|
| `input`   | `ToDataViewInput` | The data to be converted into a `DataView`. Possible input Type can be: |
|           |                   | - `string`                                                              |
|           |                   | - `Array<number>`                                                       |
|           |                   | - `ArrayLike<number>`                                                   |
|           |                   | - `Buffer`                                                              |
|           |                   | - `ArrayBuffer`                                                         |
|           |                   | - `ArrayBufferLike`                                                     |
|           |                   | - `Int8Array`                                                           |
|           |                   | - `Int16Array`                                                          |
|           |                   | - `Int32Array`                                                          |
|           |                   | - `Uint8Array`                                                          |
|           |                   | - `Uint16Array`                                                         |
|           |                   | - `Uint32Array`                                                         |
|           |                   | - `Uint8ClampedArray`                                                   |

</details>

<details>

<summary>Returns</summary>

Type: `DataView`

The function returns a `DataView` object created from the input data.

</details>

<details>

<summary>Errors</summary>

Throws a `TypeError` if the input does not match any of the supported types.

</details>

<details>

<summary>Usage</summary>

##### Converting a String to DataView

```ts
import { toDataView } from '@alessiofrittoli/crypto-buffer'
// or
import { toDataView } from '@alessiofrittoli/crypto-buffer/toDataView'

const data = 'Hello, World!'
const view = toDataView( data )

console.log( view.byteLength ) // Logs the byte length of the string.
```

##### Converting a Uint8Array to DataView

```ts
import { toDataView } from '@alessiofrittoli/crypto-buffer'
// or
import { toDataView } from '@alessiofrittoli/crypto-buffer/toDataView'

const data = new Uint8Array( [ 1, 2, 3, 4 ] )
const view = toDataView( data )

console.log( view.getUint8( 0 ) ) // Logs 1
```

##### Handling Invalid Input

```ts
import { toDataView } from '@alessiofrittoli/crypto-buffer'
// or
import { toDataView } from '@alessiofrittoli/crypto-buffer/toDataView'

try {
	const invalidInput = { foo: 'bar' }
	const view = toDataView( invalidInput )
} catch ( error ) {
	console.error( error.message ) // Expected `input` to be a Expected `input` to be a string, Array<number>, ...
}
```

</details>

---

#### `Common Utilities`

##### `bufferEquals`

The `bufferEquals` function leverages the [toDataView](#todataview) utility to normalize input buffers into `DataView` objects for consistent byte-level comparison.

It first checks the byte lengths of the two buffers to ensure they are identical. If the lengths match, it performs a byte-by-byte comparison using the `getUint8` method of `DataView`.

<details>

<summary>Parameters</summary>

| Parameter | Type              | Description                                  |
|-----------|-------------------|----------------------------------------------|
| `buffer1` | `ToDataViewInput` | The first buffer to compare.                 |
| `buffer1` | `ToDataViewInput` | The second buffer to compare with `buffer1`. |

</details>

<details>

<summary>Returns</summary>

Type: `boolean`

`true` if the buffers are equal, `false` otherwise.

</details>

<details>

<summary>Usage</summary>

###### Convert a String in a Node.js Environment

```ts
import { bufferEquals } from '@alessiofrittoli/crypto-buffer'
// or
import { bufferEquals } from '@alessiofrittoli/crypto-buffer/common'

const buffer1 = new Uint8Array( [ 1, 2, 3 ] )
const buffer2 = new Uint8Array( [ 1, 2, 3 ] )
const buffer3 = new Uint8Array( [ 4, 5, 6 ] )

console.log( bufferEquals( buffer1, buffer2 ) ) // true
console.log( bufferEquals( buffer1, buffer3 ) ) // false
```

</details>

---

#### `Conversion Utilities`

##### `stringToBinary`

The `stringToBinary` function is a utility for converting a string into a `Uint8Array`\

<details>

<summary>Parameters</summary>

| Parameter | Type     | Description                 |
|-----------|----------|-----------------------------|
| `input`   | `string` | The string to be converted. |

</details>

<details>

<summary>Returns</summary>

Type: `Uint8Array`

The function returns a new `Uint8Array` instance.

</details>

<details>

<summary>Usage</summary>

###### Convert a String to binary data

```ts
import { stringToBinary } from '@alessiofrittoli/crypto-buffer'
// or
import { stringToBinary } from '@alessiofrittoli/crypto-buffer/conversion'

const data = 'Hello, World!'
const binary = stringToBinary( data )

console.log( new TextDecoder().decode( binary ) )
// Outputs: 'Hello, World!'
```

</details>

---

##### `stringToBytes`

The `stringToBytes` function converts a string into an Array of bytes (`number[]`). It leverages the [stringToBinary](#stringToBinary) utility to handle string-to-binary conversion, ensuring compatibility with both browser and Node.js environments. The resulting array represents the byte values of the input string.

<details>

<summary>Parameters</summary>

| Parameter | Type     | Description                 |
|-----------|----------|-----------------------------|
| `input`   | `string` | The string to be converted. |

</details>

<details>

<summary>Returns</summary>

Type: `number[]`

The function returns an array of bytes (`number[]`), where each element represents a single byte of the input string.

</details>

<details>

<summary>Usage</summary>

###### Convert a String to Bytes

```ts
import { stringToBytes } from '@alessiofrittoli/crypto-buffer'
// or
import { stringToBytes } from '@alessiofrittoli/crypto-buffer/conversion'

const data = 'Hello'
const bytes = stringToBytes( data )

console.log( bytes ) // [ 72, 101, 108, 108, 111 ] (ASCII values of 'Hello')

```

</details>

---

##### `binaryToString`

The `binaryToString` function converts various binary data types into their string representations.\
It is designed to be cross-platform, working in both Node.js and browser environments.

<details>

<summary>Parameters</summary>

| Parameter | Type                  | Description                                       |
|-----------|-----------------------|---------------------------------------------------|
| `input`   | `BinaryToStringInput` | The binary data to be converted to a string.      |
|           |                       | - `Array<number>` - A simple array of bytes.      |
|           |                       | - `Buffer` - Node.js buffer instance.             |
|           |                       | - `ArrayBuffer` - Generic buffer for binary data. |
|           |                       | - `Int8Array`                                     |
|           |                       | - `Int16Array`                                    |
|           |                       | - `Int32Array`                                    |
|           |                       | - `Uint8Array`                                    |
|           |                       | - `Uint16Array`                                   |
|           |                       | - `Uint32Array`                                   |
|           |                       | - `Uint8ClampedArray`                             |

</details>

<details>

<summary>Returns</summary>

Type `string`

A string representation of the given input.

</details>

<details>

<summary>Example usage</summary>

###### Node.js

```ts
import { binaryToString } from '@alessiofrittoli/crypto-buffer'
// or
import { binaryToString } from '@alessiofrittoli/crypto-buffer/conversion'

console.log( binaryToString( Buffer.from( 'Hello, World!' ) ) )
// Outputs: 'Hello, World!'
```

###### Browser

```ts
import { binaryToString, stringToBytes } from '@alessiofrittoli/crypto-buffer'
// or
import { binaryToString, stringToBytes } from '@alessiofrittoli/crypto-buffer/conversion'

const uint8Array = new Uint8Array( stringToBytes( 'Hello!' ) )
console.log( binaryToString( uint8Array ) )
// Outputs: 'Hello!'
```

</details>

---

<!-- ### Development

#### Install depenendencies

```bash
npm install
```

or using `pnpm`

```bash
pnpm i
```

#### Build your source code

Run the following command to build code for distribution.

```bash
pnpm build
```

#### [ESLint](https://www.npmjs.com/package/eslint)

warnings / errors check.

```bash
pnpm lint
```

#### [Jest](https://npmjs.com/package/jest)

Run all the defined test suites by running the following:

```bash
# Run tests and watch file changes.
pnpm test

# Run tests in a Jest JSDOM environment.
pnpm test:jsdom

# Run tests in a CI environment.
pnpm test:ci

# Run tests in a Jest JSDOM and CI environment.
pnpm test:ci:jsdom
```

You can eventually run specific suits like so:

```bash
pnpm test:jest
pnpm test:conversion
pnpm test:conversion:jsdom
pnpm test:todataview
pnpm test:todataview:jsdom
```

---

### Contributing

Contributions are truly welcome!\
Please refer to the [Contributing Doc](./CONTRIBUTING.md) for more information on how to start contributing to this project.

--- -->

### Security

If you believe you have found a security vulnerability, we encourage you to **_responsibly disclose this and NOT open a public issue_**. We will investigate all legitimate reports. Email `security@alessiofrittoli.it` to disclose any security vulnerabilities.

### Made with ☕

<table style='display:flex;gap:20px;'>
	<tbody>
		<tr>
			<td>
				<img src='https://avatars.githubusercontent.com/u/35973186' style='width:60px;border-radius:50%;object-fit:contain;'>
			</td>
			<td>
				<table style='display:flex;gap:2px;flex-direction:column;'>
					<tbody>
						<tr>
							<td>
								<a href='https://github.com/alessiofrittoli' target='_blank' rel='noopener'>Alessio Frittoli</a>
							</td>
						</tr>
						<tr>
							<td>
								<small>
									<a href='https://alessiofrittoli.it' target='_blank' rel='noopener'>https://alessiofrittoli.it</a> |
									<a href='mailto:info@alessiofrittoli.it' target='_blank' rel='noopener'>info@alessiofrittoli.it</a>
								</small>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>