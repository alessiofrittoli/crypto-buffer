/**
 * Convert a String into an Array of bytes.
 * 
 * @param string The string to convert.
 * @returns An Array of bytes.
 */
export const stringToBytes = ( string: string ) => (
	[ ...stringToBuffer( string ) ]
)


/**
 * Convert a String into a Uint8Array or Node.js Buffer.
 * 
 * @param string The string to convert.
 * @returns A Uint8Array or Node.js Buffer.
 */
export const stringToBuffer = ( string: string ) => (
	typeof window !== 'undefined'
		? new Uint8Array( new TextEncoder().encode( string ) )
		: Buffer.from( string )
)