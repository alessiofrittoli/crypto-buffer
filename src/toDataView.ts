import { stringToBytes } from './conversion'

export type ToDataViewInput = (
	| string
	| Array<number>
	| ArrayLike<number>
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
 * Convert data to {@link DataView}.
 *
 * @param input The data to convert to `DataView`.
 * @returns The `DataView` of the given data. Throws a new Exception on failure.
 */
const toDataView = ( input: ToDataViewInput ): DataView => {

	if ( typeof input === 'string' ) {
		return toDataView( stringToBytes( input ) )
	}

	if ( Array.isArray( input ) ) {
		return toDataView( new Uint8Array( input ).buffer )
	}

	if ( input instanceof ArrayBuffer ) {
		return new DataView( input )
	}

	if (
		input instanceof Int8Array ||
		input instanceof Int16Array ||
		input instanceof Int32Array ||
		input instanceof Uint8Array ||
		input instanceof Uint16Array ||
		input instanceof Uint32Array ||
		input instanceof Uint8ClampedArray ||
		( typeof Buffer !== 'undefined' && input instanceof Buffer )
	) {
		return new DataView( input.buffer, input.byteOffset, input.byteLength )
	}

	throw new TypeError( 'Expected `input` to be a string, Array<number>, ArrayLike<number>, Buffer, ArrayBuffer, Int8Array, Int16Array, Int32Array, Uint8Array, Uint16Array, Uint32Array or Uint8ClampedArray' )

}

export default toDataView