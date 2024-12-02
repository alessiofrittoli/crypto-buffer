export type ToDataViewInput = (
	| number[]
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
 * Convert data to {@link DataView}.
 *
 * @param data The data to convert to `DataView`.
 * @returns The `DataView` of the given data. Throws a new Exception on failure.
 */
const toDataView = ( data: ToDataViewInput ) => {

	if ( Array.isArray( data ) ) {
		return toDataView( new Uint8Array( data ).buffer )
	}

	if ( data instanceof ArrayBuffer ) {
		return new DataView( data )
	}

	if (
		data instanceof Int8Array ||
		data instanceof Int16Array ||
		data instanceof Int32Array ||
		data instanceof Uint8Array ||
		data instanceof Uint16Array ||
		data instanceof Uint32Array ||
		data instanceof Uint8ClampedArray
	) {
		return new DataView( data.buffer, data.byteOffset, data.byteLength )
	}

	throw new TypeError( 'Expected `data` to be an ArrayBuffer, Buffer, Int8Array, Int16Array, Int32Array, Uint8Array, Uint16Array, Uint32Array or Uint8ClampedArray' )

}

export default toDataView