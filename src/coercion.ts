import { stringToBytes } from '@/conversion'

/**
 * Accepted input Types for Uint8Array coercion.
 * 
 */
export type CoerceToUint8ArrayInput = (
	| string
	| number
	| bigint
	| Array<number>
	| Buffer
	| ArrayBufferLike
	| ArrayBufferView
	| NodeJS.ArrayBufferView
)


/**
 * Coerce data to Uint8Array.
 * 
 * @param	input The input data to convert.
 * @returns	A new instance of Uint8Array.
 */
export const coerceToUint8Array = ( input: CoerceToUint8ArrayInput ): Uint8Array => {


	if (
		typeof input === 'string' ||
		typeof input === 'number' ||
		typeof input === 'bigint'
	) {
		return new Uint8Array( stringToBytes( input.toString() ) )
	}
	

	if (
		input instanceof DataView ||
		ArrayBuffer.isView( input ) ||
		( typeof Buffer !== 'undefined' && Buffer.isBuffer( input ) )
	) {
		return (
			new Uint8Array(
				input.buffer,
				input.byteOffset,
				input.byteLength,
			)
		)
	}

	
	if ( Array.isArray( input ) || input instanceof ArrayBuffer ) {
		return new Uint8Array( input )
	}

	return new Uint8Array( input )
}


/**
 * Coerce data to Int16Array.
 * 
 * @param	input The input data to convert.
 * @returns	A new instance of Int16Array.
 */
export const coerceToInt16Array = ( input: CoerceToUint8ArrayInput ) => {
	const buffer = coerceToUint8Array( input )
	return (
		new Int16Array(
			buffer.buffer,
			buffer.byteOffset,
			buffer.byteLength / 2,
		)
	)
}


/**
 * Coerce data to Uint16Array.
 * 
 * @param	input The input data to convert.
 * @returns	A new instance of Uint16Array.
 */
export const coerceToUint16Array = ( input: CoerceToUint8ArrayInput ) => {
	const buffer = coerceToUint8Array( input )
	return (
		new Uint16Array(
			buffer.buffer,
			buffer.byteOffset,
			buffer.byteLength / 2,
		)
	)
}


/**
 * Coerce data to Int32Array.
 * 
 * @param	input The input data to convert.
 * @returns	A new instance of Int32Array.
 */
export const coerceToInt32Array = ( input: CoerceToUint8ArrayInput ) => {
	const buffer = coerceToUint8Array( input )
	return (
		new Int32Array(
			buffer.buffer,
			buffer.byteOffset,
			buffer.byteLength / 4,
		)
	)
}


/**
 * Coerce data to Uint32Array.
 * 
 * @param	input The input data to convert.
 * @returns	A new instance of Uint32Array.
 */
export const coerceToUint32Array = ( input: CoerceToUint8ArrayInput ) => {
	const buffer = coerceToUint8Array( input )
	return (
		new Uint32Array(
			buffer.buffer,
			buffer.byteOffset,
			buffer.byteLength / 4,
		)
	)
}


/**
 * Coerce data to a SharedArrayBuffer.
 * 
 * @param	input The input data to convert.
 * @returns	A new instance of SharedArrayBuffer.
 */
export const coerceToSharedArrayBuffer = ( input: CoerceToUint8ArrayInput ) => {

	const bytes		= coerceToUint8Array( input )
	const buffer	= new SharedArrayBuffer( bytes.length )
	const view		= new Uint8Array( buffer )
	
	view.set( bytes )

	return buffer

}


/**
 * FloatArray supported bits.
 * 
 */
type FloatArraySupportedBits = 32 | 64


/**
 * Float32Array | Float64Array based on the given bit `T`.
 * 
 */
type CoerceToFloatArrayReturnType<T extends FloatArraySupportedBits> = T extends 32 ? Float32Array : Float64Array


/**
 * Coerce data to Float32Array or Float64Array based on the given `bit`.
 * 
 * @param	input	The input data to convert.
 * @param	bit		The number of bits used for different calculations.
 * @returns	A new instance of Float32Array if `bit` is set to `32`, Float64Array otherwise.
 */
export const coerceToFloatArray = <T extends FloatArraySupportedBits>(
	input: CoerceToUint8ArrayInput, bit: T
): CoerceToFloatArrayReturnType<T> => {

	const is32bit = bit === 32

	if ( Array.isArray( input ) ) {
		return (
			is32bit
				? new Float32Array( input )
				: new Float64Array( input )
		) as CoerceToFloatArrayReturnType<T>
	}

	const magicN		= is32bit ? 4 : 8
	const uint8Array	= coerceToUint8Array( input )
	const numElements	= Math.ceil( uint8Array.length / magicN )
	const buffer		= new ArrayBuffer( numElements * magicN )
	const dataView		= new DataView( buffer )

	for ( let i = 0; i < numElements; i++ ) {
		let value = 0

		for ( let byteIndex = 0; byteIndex < magicN; byteIndex++ ) {
			const uint8Index	= i * magicN + byteIndex
			const byte			= uint8Array[ uint8Index ] || 0
			value				+= byte * Math.pow( 256, byteIndex )
		}

		if ( is32bit ) {
			dataView.setFloat32( i * magicN, value, true ) // Little-endian
			continue
		}
		dataView.setFloat64( i * magicN, value, true ) // Little-endian
	}

	return (
		is32bit
			? new Float32Array( buffer )
			: new Float64Array( buffer )
	) as CoerceToFloatArrayReturnType<T>
}


/**
 * Coerce data to Float32Array.
 * 
 * @param	input The input data to convert.
 * @returns	A new instance of Float32Array.
 */
export const coerceToFloat32Array = ( input: CoerceToUint8ArrayInput ): Float32Array => (
	coerceToFloatArray( input, 32 )
)


/**
 * Coerce data to Float64Array.
 * 
 * @param	input The input data to convert.
 * @returns	A new instance of Float64Array.
 */
export const coerceToFloat64Array = ( input: CoerceToUint8ArrayInput ): Float64Array => (
	coerceToFloatArray( input, 64 )
)


/**
 * BigInt64Array | BigUint64Array based on the given `T`.
 * 
 */
type BigArrayReturnType<T extends boolean> = T extends true ? BigUint64Array : BigInt64Array


/**
 * Coerce data to BigInt64Array or BigUint64Array.
 * 
 * @param	input		The input data to convert.
 * @param	isUnsigned	If set to `true` BigUint64Array is returned, BigInt64Array otherwise.
 * @returns	A new instance of BigUint64Array if `isUnsigned` is set to `true`, BigInt64Array otherwise.
 */
export const coerceToBigArray = <T extends boolean>(
	input		: CoerceToUint8ArrayInput,
	isUnsigned	: T,
): BigArrayReturnType<T> => {
	
	const magicN		= 8
	const uint8Array	= coerceToUint8Array( input )
	const numElements	= Math.ceil( uint8Array.length / magicN )
	const buffer		= new ArrayBuffer( numElements * magicN )
	const dataView		= new DataView( buffer )

	for ( let i = 0; i < numElements; i++ ) {
		let value = 0n

		for ( let byteIndex = 0; byteIndex < magicN; byteIndex++ ) {
			const uint8Index	= i * magicN + byteIndex
			const byte			= BigInt( uint8Array[ uint8Index ] || 0 )
			value				+= byte << BigInt( byteIndex * magicN )
		}

		if ( isUnsigned ) {
			dataView.setBigUint64( i * magicN, value, true ) // Little-endian
			continue
		}

		dataView.setBigInt64( i * magicN, value, true ) // Little-endian
	}
	
	return (
		isUnsigned
			? new BigUint64Array( buffer )
			: new BigInt64Array( buffer )
	) as BigArrayReturnType<T>
}


/**
 * Coerce data to BigInt64Array.
 * 
 * @param	input The input data to convert.
 * @returns	A new instance of BigInt64Array.
 */
export const coerceToBigInt64Array = ( input: CoerceToUint8ArrayInput ): BigInt64Array => (
	coerceToBigArray( input, false )
)


/**
 * Coerce data to BigUint64Array.
 * 
 * @param	input The input data to convert.
 * @returns	A new instance of BigUint64Array.
 */
export const coerceToBigUint64Array = ( input: CoerceToUint8ArrayInput ): BigUint64Array => (
	coerceToBigArray( input, true )
)