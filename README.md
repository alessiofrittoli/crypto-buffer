# Crypto Buffer 🚌

Version 3.2.0

## Lightweight TypeScript Node.js Buffers utility library

### Table of Contents

- [Getting started](#getting-started)
- [Utilities](#utilities)
	- [`toDataView`](#todataview)
	- [Common Utilities](#common-utilities)
		- [`bufferEquals`](#bufferequals)
	- [Conversion Utilities](#conversion-utilities)
		- [`stringToBinary`](#stringtobinary)
		- [`stringToBytes`](#stringtobytes)
		- [`binaryToString`](#binarytostring)
	- [Coercion Utilities](#coercion-utilities)
		- [`coerceToUint8Array`](#coercetouint8array)
		- [`coerceToFloatArray`](#coercetofloatarray)
		- [`coerceToFloat32Array`](#coercetofloat32array)
		- [`coerceToFloat64Array`](#coercetofloat64array)
		- [`coerceToBigArray`](#coercetobigarray)
		- [`coerceToBigInt64Array`](#coercetobigint64array)
		- [`coerceToBigUint64Array`](#coercetobiguint64array)
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
	| Buffer
	| ArrayBuffer
	| NodeJS.TypedArray
)
```

<details>

<summary>Parameters</summary>

| Parameter | Type              | Description                                                             |
|-----------|-------------------|-------------------------------------------------------------------------|
| `input`   | `ToDataViewInput` | The data to be converted into a `DataView`. Possible input Type can be: |
|           |                   | - `string`                                                              |
|           |                   | - `Array<number>` (array of bytes)                                      |
|           |                   | - `Buffer`                                                              |
|           |                   | - `ArrayBuffer`                                                         |
|           |                   | - `NodeJS.TypedArray`                                                   |

</details>

---

<details>

<summary>Returns</summary>

Type: `DataView`

The function returns a `DataView` object created from the input data.

</details>

---

<details>

<summary>Errors</summary>

Throws a `TypeError` if the input does not match any of the supported types.

</details>

---

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

#### Common Utilities

##### `bufferEquals`

The `bufferEquals` function leverages the `coerceToUint8Array` utility function to normalize input data into `Uint8Array` objects for consistent byte-level comparison.

It first checks the byte lengths of the two buffers to ensure they are identical. If the lengths match, it performs a byte-by-byte comparison.

<details>

<summary>Parameters</summary>

| Parameter | Type                      | Description                                 |
|-----------|---------------------------|---------------------------------------------|
| `buffer1` | `CoerceToUint8ArrayInput` | The first input to compare.                 |
| `buffer2` | `CoerceToUint8ArrayInput` | The second input to compare with `buffer1`. |

</details>

---

<details>

<summary>Returns</summary>

Type: `boolean`

`true` if the buffers are equal, `false` otherwise.

</details>

---

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

#### Conversion Utilities

##### `stringToBinary`

The `stringToBinary` function is a utility for converting a string into a `Uint8Array`\

<details>

<summary>Parameters</summary>

| Parameter | Type     | Description                 |
|-----------|----------|-----------------------------|
| `input`   | `string` | The string to be converted. |

</details>

---

<details>

<summary>Returns</summary>

Type: `Uint8Array`

The function returns a new `Uint8Array` instance.

</details>

---

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

The `stringToBytes` function converts a string into an Array of bytes (`number[]`). It leverages the [stringToBinary](#stringtobinary) utility to handle string-to-binary conversion, ensuring compatibility with both browser and Node.js environments. The resulting array represents the byte values of the input string.

<details>

<summary>Parameters</summary>

| Parameter | Type     | Description                 |
|-----------|----------|-----------------------------|
| `input`   | `string` | The string to be converted. |

</details>

---

<details>

<summary>Returns</summary>

Type: `number[]`

The function returns an array of bytes (`number[]`), where each element represents a single byte of the input string.

</details>

---

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

| Parameter | Type                      | Description |
|-----------|---------------------------|-------------|
| `input`   | `CoerceToUint8ArrayInput` | The binary data to be converted to a string. See [coerceToUint8Array](#coercetouint8array) for a list of possible input data types. |

</details>

---

<details>

<summary>Returns</summary>

Type `string`

A string representation of the given input.

</details>

---

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

#### Coercion Utilities

This module provides a set of utility functions for coercing data into specific array types, such as `Uint8Array`, `Float32Array`, `Float64Array`, `BigInt64Array`, and `BigUint64Array`.\
It supports various input types and ensures compatibility across different data representations.

---

##### `coerceToUint8Array`

Coerces input data into a `Uint8Array`.

###### Input Type

```ts
type CoerceToUint8ArrayInput = (
	| string
	| Array<number>
	| DataView
	| Buffer
	| ArrayBuffer
	| NodeJS.TypedArray
)
```

<details>

<summary>Parameters</summary>

| Parameter | Type              | Description                                                             |
|-----------|-------------------|-------------------------------------------------------------------------|
| `input`   | `CoerceToUint8ArrayInput` | The input data to convert. Possible input Type can be:          |
|           |                   | - `string`                                                              |
|           |                   | - `Array<number>` (array of bytes)                                      |
|           |                   | - `DataView`                                                            |
|           |                   | - `Buffer`                                                              |
|           |                   | - `ArrayBuffer`                                                         |
|           |                   | - `NodeJS.TypedArray`                                                   |

</details>

---

<details>

<summary>Returns</summary>

Type: `Uint8Array`

The function returns a new `Uint8Array` instance created from the input data.

</details>

---

<details>

<summary>Usage</summary>

###### Converting a String to Uint8Array

```ts
import { coerceToUint8Array } from '@alessiofrittoli/crypto-buffer'
// or
import { coerceToUint8Array } from '@alessiofrittoli/crypto-buffer/coercion'

const buffer = coerceToUint8Array( 'Hello, World!' )
```

###### Converting a DataView to Uint8Array

```ts
import { coerceToUint8Array } from '@alessiofrittoli/crypto-buffer'
// or
import { coerceToUint8Array } from '@alessiofrittoli/crypto-buffer/coercion'
import { toDataView } from '@alessiofrittoli/crypto-buffer/toDataView'
import { stringToBinary } from '@alessiofrittoli/crypto-buffer/conversion'

const view = toDataView( stringToBinary( 'Hello, World!' ) )

console.log( coerceToUint8Array( view ) )
```

</details>

---

##### `coerceToFloatArray`

Coerces input data into a `Float32Array` or `Float64Array`, based on the specified bit size.

<details>

<summary>Parameters</summary>

| Parameter | Type       | Description |
|-----------|------------|-------------|
| `input`   | `CoerceToUint8ArrayInput` | The input data to convert. See [coerceToUint8Array](#coercetouint8array) for a list of possible input data types. |
| `bit`     | `32 \| 64` | Specifies whether to return a `Float32Array` (32-bit) or `Float64Array` (64-bit). |

</details>

---

<details>

<summary>Returns</summary>

Type: `Float32Array | Float64Array`

A new instance of the respective float array type.

</details>

---

##### `coerceToFloat32Array`

A specialized version of `coerceToFloatArray` that coerces input data into a `Float32Array`.

<details>

<summary>Parameters</summary>

| Parameter | Type       | Description |
|-----------|------------|-------------|
| `input`   | `CoerceToUint8ArrayInput` | The input data to convert. See [coerceToUint8Array](#coercetouint8array) for a list of possible input data types. |

</details>

---

<details>

<summary>Returns</summary>

Type: `Float32Array`

A new instance of `Float32Array`.

</details>

---

<details>

<summary>Usage</summary>

```ts
import { coerceToFloat32Array } from '@alessiofrittoli/crypto-buffer'
// or
import { coerceToFloat32Array } from '@alessiofrittoli/crypto-buffer/coercion'

const float32Array = coerceToFloat32Array( 'Hello, World!' )
```

</details>

---

##### `coerceToFloat64Array`

A specialized version of `coerceToFloatArray` that coerces input data into a `Float64Array`.

<details>

<summary>Parameters</summary>

| Parameter | Type       | Description |
|-----------|------------|-------------|
| `input`   | `CoerceToUint8ArrayInput` | The input data to convert. See [coerceToUint8Array](#coercetouint8array) for a list of possible input data types. |

</details>

---

<details>

<summary>Returns</summary>

Type: `Float64Array`

A new instance of `Float64Array`.

</details>

---

<details>

<summary>Usage</summary>

```ts
import { coerceToFloat64Array } from '@alessiofrittoli/crypto-buffer'
// or
import { coerceToFloat64Array } from '@alessiofrittoli/crypto-buffer/coercion'

const float64Array = coerceToFloat64Array( 'Hello, World!' )
```

</details>

---

##### `coerceToBigArray`

Coerces input data into a `BigInt64Array` or `BigUint64Array` based on the `isUnsigned` parameter.

<details>

<summary>Parameters</summary>

| Parameter    | Type       | Description |
|--------------|------------|-------------|
| `input`      | `CoerceToUint8ArrayInput` | The input data to convert. See [coerceToUint8Array](#coercetouint8array) for a list of possible input data types. |
| `isUnsigned` | `boolean`  | If `true`, returns a `BigUint64Array`, `BigInt64Array` otherwise. |

</details>

---

<details>

<summary>Returns</summary>

Type: `BigInt64Array | BigUint64Array`

A new instance of the respective big integer array type.

</details>

---

##### `coerceToBigInt64Array`

A specialized version of `coerceToFloatArray` that coerces input data into a `BigInt64Array`.

<details>

<summary>Parameters</summary>

| Parameter | Type       | Description |
|-----------|------------|-------------|
| `input`   | `CoerceToUint8ArrayInput` | The input data to convert. See [coerceToUint8Array](#coercetouint8array) for a list of possible input data types. |

</details>

---

<details>

<summary>Returns</summary>

Type: `BigInt64Array`

A new instance of `BigInt64Array`.

</details>

---

<details>

<summary>Usage</summary>

```ts
import { coerceToBigInt64Array } from '@alessiofrittoli/crypto-buffer'
// or
import { coerceToBigInt64Array } from '@alessiofrittoli/crypto-buffer/coercion'

const bigInt64Array = coerceToBigInt64Array( 'Hello, World!' )
```

</details>

---

##### `coerceToBigUint64Array`

A specialized version of `coerceToFloatArray` that coerces input data into a `BigUint64Array`.

<details>

<summary>Parameters</summary>

| Parameter | Type       | Description |
|-----------|------------|-------------|
| `input`   | `CoerceToUint8ArrayInput` | The input data to convert. See [coerceToUint8Array](#coercetouint8array) for a list of possible input data types. |

</details>

---

<details>

<summary>Returns</summary>

Type: `BigUint64Array`

A new instance of `BigUint64Array`.

</details>

---

<details>

<summary>Usage</summary>

```ts
import { coerceToBigUint64Array } from '@alessiofrittoli/crypto-buffer'
// or
import { coerceToBigUint64Array } from '@alessiofrittoli/crypto-buffer/coercion'

const bigUint64Array = coerceToBigUint64Array( 'Hello, World!' )
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