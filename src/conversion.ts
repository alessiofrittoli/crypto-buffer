/**
 * Convert a String into an Array of bytes.
 * 
 * @param string The string to convert.
 * @returns An Array of bytes.
 */
export const stringToBytes = ( string: string ): number[] => (
	[ ...stringToBuffer( string ) ]
)


/**
 * Convert a String into a Uint8Array or Node.js Buffer.
 * 
 * @param string The string to convert.
 * @returns A Uint8Array or Node.js Buffer.
 */
export const stringToBuffer = ( string: string ): Uint8Array | Buffer => (
	typeof Buffer !== 'undefined'
		? Buffer.from( string )
		: new Uint8Array( new TextEncoder().encode( string ) )
)