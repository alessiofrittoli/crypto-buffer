import { stringToBytes } from './conversion'
import type { CoerceToUint8ArrayInput } from './coercion'


/**
 * Accepted input Types for DataView coercion.
 * 
 */
export type ToDataViewInput = CoerceToUint8ArrayInput


/**
 * Convert data to {@link DataView}.
 *
 * @param input The data to convert to `DataView`.
 * @returns The `DataView` of the given data. Throws a new Exception on failure.
 */
export const toDataView = ( input: ToDataViewInput ): DataView => {


	if ( input instanceof DataView ) return input


	if (
		typeof input === 'string' ||
		typeof input === 'number' ||
		typeof input === 'bigint'
	) {
		return toDataView( stringToBytes( input.toString() ) )
	}


	if ( input instanceof ArrayBuffer ) {
		return new DataView( input )
	}


	if (
		ArrayBuffer.isView( input ) ||
		( typeof Buffer !== 'undefined' && Buffer.isBuffer( input ) )
	) {
		return (
			new DataView(
				input.buffer,
				input.byteOffset,
				input.byteLength,
			)
		)
	}


	if ( Array.isArray( input ) ) {
		return toDataView( new Uint8Array( input ) )
	}

	return new DataView( input )

}