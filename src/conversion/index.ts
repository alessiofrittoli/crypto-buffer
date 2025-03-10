import { coerceToUint8Array, type CoerceToUint8ArrayInput } from '@/coercion'


/**
 * Convert a String into a Uint8Array.
 * 
 * @param input The string to convert.
 * @returns A new Uint8Array instance.
 */
export const stringToBinary = ( input: string ): Uint8Array => (
	new Uint8Array( new TextEncoder().encode( input ) )
)


/**
 * Convert unicode characters to a 0-1 binary sequence.
 * 
 * @param input The string to convert.
 * @returns The 0-1 converted binary sequence.
 */
export const unicodeToBinarySequence = ( input: CoerceToUint8ArrayInput, separator = ' ' ) => (
	Array.from( coerceToUint8Array( input ) )
		.map( byte => byte.toString( 2 ).padStart( 8, '0' ) )
		.join( separator )
)


/**
 * Convert a 0-1 binary sequence to Uint8Array.
 * 
 * @param input The 0-1 binary to convert.
 * @returns A new Uint8Array instance.
 */
export const binarySequenceToUint8Array = ( input: CoerceToUint8ArrayInput, separator = ' ' ) => (
	new Uint8Array(
		( separator === ''
			? ( binaryToString( input ).match( /.{1,8}/g ) || [] )
			: binaryToString( input ).split( separator )
		).map( bin => parseInt( bin, 2 ) )
	)
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