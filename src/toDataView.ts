import { stringToBytes } from './conversion'

export type ToDataViewInput = (
	| string
	| Array<number>
	| Buffer
	| ArrayBuffer
	| NodeJS.TypedArray
)


/**
 * Convert data to {@link DataView}.
 *
 * @param input The data to convert to `DataView`.
 * @returns The `DataView` of the given data. Throws a new Exception on failure.
 */
export const toDataView = ( input: ToDataViewInput ): DataView => {

	if ( typeof input === 'string' ) {
		return toDataView( stringToBytes( input ) )
	}

	if ( Array.isArray( input ) ) {
		return toDataView( new Uint8Array( input ) )
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
		input instanceof BigInt64Array ||
		input instanceof BigUint64Array ||
		input instanceof Float32Array ||
		input instanceof Float64Array ||
		( typeof Buffer !== 'undefined' && ( input as Buffer ) instanceof Buffer )
	) {
		return new DataView( input.buffer, input.byteOffset, input.byteLength )
	}

	const expectedInputs = [
		'string', 'Array<number>', 'Buffer', 'ArrayBuffer',
		'Int8Array', 'Int16Array', 'Int32Array',
		'Uint8Array', 'Uint16Array', 'Uint32Array',
		'Uint8ClampedArray', 'BigInt64Array', 'BigUint64Array',
		'Float32Array', 'Float64Array'
	]

	throw new TypeError(
		'Expected `input` to be one of the following supported type.',
		{ cause: expectedInputs }
	)

}