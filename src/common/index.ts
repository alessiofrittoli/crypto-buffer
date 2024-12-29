import { toDataView, type ToDataViewInput } from '@/toDataView'


/**
 * Compare `buffer1` to `buffer2` byte by byte.
 *  
 * @param	buffer1 The Buffer to compare.
 * @param	buffer2 The Buffer to compare with `buffer1`.
 * 
 * @returns	True if buffers are equal, false otherwise.
 */
export const bufferEquals = ( buffer1: ToDataViewInput, buffer2: ToDataViewInput ) => {

	const view1 = toDataView( buffer1 )
	const view2 = toDataView( buffer2 )

	if ( view1.byteLength !== view2.byteLength ) {
		return false
	}

	for ( let i = 0; i < view1.byteLength; i++ ) {		
		if ( view1.getUint8( i ) !== view2.getUint8( i ) ) return false
	}

	return true
}