import { coerceToUint8Array, type CoerceToUint8ArrayInput } from '@/coercion'


/**
 * Compare `buffer1` to `buffer2` byte by byte.
 *  
 * @param	buffer1 The Buffer to compare.
 * @param	buffer2 The Buffer to compare with `buffer1`.
 * 
 * @returns	True if buffers are equal, false otherwise.
 */
export const bufferEquals = ( buffer1: CoerceToUint8ArrayInput, buffer2: CoerceToUint8ArrayInput ) => {

	const view1 = coerceToUint8Array( buffer1 )
	const view2 = coerceToUint8Array( buffer2 )

	if ( view1.byteLength !== view2.byteLength ) {
		return false
	}

	for ( let i = 0; i < view1.byteLength; i++ ) {		
		if ( view1[ i ] !== view2[ i ] ) return false
	}

	return true
}