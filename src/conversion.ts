/**
 * Convert a String into a Uint8Array or Node.js Buffer.
 * 
 * @param input The string to convert.
 * @returns A Uint8Array or Node.js Buffer.
 */
export const stringToBuffer = ( input: string ): Uint8Array | Buffer => (
	typeof window !== 'undefined'
		? new Uint8Array( new TextEncoder().encode( input ) )
		: Buffer.from( input )
)


/**
 * Convert a String into an Array of bytes.
 * 
 * @param input The string to convert.
 * @returns An Array of bytes.
 */
export const stringToBytes = ( input: string ): number[] => (
	[ ...stringToBuffer( input ) ]
)


export type BinaryToStringInput = (
	| Array<number>
	| Buffer
	| ArrayBuffer
	| Int8Array
	| Int16Array
	| Int32Array
	| Uint8Array
	| Uint16Array
	| Uint32Array
	| Uint8ClampedArray
)


/**
 * Return the string representation of the given input.
 * 
 * @param input The input data to convert.
 * @returns The string representation of the given input.
 */
export const binaryToString = ( input: BinaryToStringInput ) => (
	typeof Buffer !== 'undefined' && input instanceof Buffer
		? input.toString()
		: (
			new TextDecoder()
				.decode( new Uint8Array( input ) )
		)
)