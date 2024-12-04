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