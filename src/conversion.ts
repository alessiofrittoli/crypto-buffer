import { coerceToUint8Array, CoerceToUint8ArrayInput } from './coercion'


/**
 * Convert a String into a Uint8Array.
 * 
 * @param input The string to convert.
 * @returns A new Uint8Array instance.
 */
export const stringToBinary = ( input: string ): Uint8Array | Buffer => (
	new Uint8Array( new TextEncoder().encode( input ) )
)


/**
 * Convert a String into an Array of bytes.
 * 
 * @param input The string to convert.
 * @returns An Array of bytes.
 */
export const stringToBytes = ( input: string ): number[] => (
	[ ...stringToBinary( input ) ]
)


/**
 * Return the string representation of the given input.
 * 
 * @param input The input data to convert.
 * @returns The string representation of the given input.
 */
export const binaryToString = ( input: CoerceToUint8ArrayInput ) => (
	new TextDecoder()
		.decode( coerceToUint8Array( input ) )
)