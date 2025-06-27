import {
	coerceToBigInt64Array, coerceToBigUint64Array,
	coerceToFloat32Array, coerceToFloat64Array,
	coerceToUint8Array, coerceToUint16Array, coerceToUint32Array, coerceToSharedArrayBuffer,
	coerceToInt16Array,
	coerceToInt32Array
} from '@/coercion'
import { binaryToString, stringToBinary, stringToBytes } from '@/conversion'
import { toDataView } from '@/toDataView'

describe( 'coerceToUint8Array', () => {

	const rawValue	= 'some value here!'
	const bytes		= stringToBytes( rawValue )


	it( 'returns a new instance of Uint8Array', () => {
		expect( coerceToUint8Array( rawValue ) ).toBeInstanceOf( Uint8Array )
	} )


	it( 'keeps input data unmutated', () => {
		expect(
			binaryToString( coerceToUint8Array( rawValue ) )
		).toBe( rawValue )
	} )


	it( 'supports String input', () => {
		expect( coerceToUint8Array( rawValue ).byteLength )
			.toBe( bytes.length )
	} )
	
	
	it( 'supports number input', () => {
		expect( coerceToUint8Array( 10 ).byteLength )
			.toBe( stringToBytes( ( 10 ).toString() ).length )
	} )


	it( 'supports Array of bytes', () => {
		expect( coerceToUint8Array( bytes ).byteLength )
			.toBe( bytes.length )
	} )


	it( 'supports Buffer', () => {
		const uInt8Array = coerceToUint8Array( stringToBinary( rawValue ) )
		expect( uInt8Array.byteLength ).toBe( bytes.length )
	} )


	it( 'supports ArrayBuffer', () => {
		const arrayBuffer	= new Uint8Array( bytes ).buffer
		const uInt8Array	= coerceToUint8Array( arrayBuffer )

		expect( uInt8Array.byteLength ).toBe( bytes.length )
	} )


	it( 'supports Int8Array', () => {
		const int8Array	= new Int8Array( bytes )
		const uInt8Array= coerceToUint8Array( int8Array )

		expect( uInt8Array.byteLength ).toBe( bytes.length )
	} )


	it( 'supports Int16Array', () => {
		const uInt8Array = coerceToUint8Array( coerceToUint16Array( bytes ) )

		expect( uInt8Array.byteLength ).toBe( bytes.length )
	} )


	it( 'supports Int32Array', () => {
		const uInt8Array = coerceToUint8Array( coerceToUint32Array( bytes ) )

		expect( uInt8Array.byteLength ).toBe( bytes.length )
	} )


	it( 'supports Uint8Array', () => {
		expect(
			coerceToUint8Array( new Uint8Array( bytes ) ).byteLength
		).toBe( bytes.length )
	} )


	it( 'supports Uint16Array', () => {
		expect(
			coerceToUint8Array( coerceToUint16Array( bytes ) ).byteLength
		).toBe( bytes.length )
	} )


	it( 'supports Uint32Array', () => {			
		expect(
			coerceToUint8Array( coerceToUint32Array( bytes ) ).byteLength
		).toBe( bytes.length )
	} )


	it( 'supports BigInt64Array', () => {
		expect(
			coerceToUint8Array( coerceToBigInt64Array( rawValue ) ).byteLength
		).toBe( bytes.length )
	} )


	it( 'supports BigUint64Array', () => {
		expect(
			coerceToUint8Array( coerceToBigUint64Array( rawValue ) ).byteLength
		).toBe( bytes.length )
	} )


	it( 'supports Float32Array', () => {
		expect(
			coerceToUint8Array( coerceToFloat32Array( rawValue ) ).byteLength
		).toBe( bytes.length )
	} )


	it( 'supports Float64Array', () => {
		expect(
			coerceToUint8Array( coerceToFloat64Array( rawValue ) ).byteLength
		).toBe( bytes.length )
	} )


	it( 'supports Uint8ClampedArray', () => {
		expect(
			coerceToUint8Array( new Uint8ClampedArray( bytes ) ).byteLength
		).toBe( bytes.length )
	} )
	
	
	it( 'supports SharedArrayBuffer', () => {
		expect(
			coerceToUint8Array( coerceToSharedArrayBuffer( bytes ) ).byteLength
		).toBe( bytes.length )
	} )


	it( 'supports DataView', () => {
		expect(
			coerceToUint8Array( toDataView( bytes ) ).byteLength
		).toBe( bytes.length )
	} )

} )


describe( 'coerceToInt16Array', () => {

	it( 'converts input to Int16Array', () => {

		expect( coerceToInt16Array( 'value' ) )
			.toBeInstanceOf( Int16Array )

	} )

} )


describe( 'coerceToUint16Array', () => {

	it( 'converts input to Uint16Array', () => {

		expect( coerceToUint16Array( 'value' ) )
			.toBeInstanceOf( Uint16Array )

	} )

} )


describe( 'coerceToInt32Array', () => {

	it( 'converts input to Int32Array', () => {

		expect( coerceToInt32Array( 'value' ) )
			.toBeInstanceOf( Int32Array )

	} )

} )


describe( 'coerceToUint32Array', () => {

	it( 'converts input to Uint32Array', () => {

		expect( coerceToUint32Array( 'value' ) )
			.toBeInstanceOf( Uint32Array )

	} )

} )


describe( 'coerceToSharedArrayBuffer', () => {

	it( 'converts input to SharedArrayBuffer', () => {

		expect( coerceToSharedArrayBuffer( 'value' ) )
			.toBeInstanceOf( SharedArrayBuffer )

	} )

} )


describe( 'coerceToFloat32Array', () => {

	const rawValue = 'some value here!'

	it( 'returns a new instance of Float32Array', () => {
		expect( coerceToFloat32Array( rawValue ) )
			.toBeInstanceOf( Float32Array )
	} )


	it( 'supports an Array of bytes', () => {
		expect( coerceToFloat32Array( stringToBytes( rawValue ) ) )
			.toBeInstanceOf( Float32Array )
	} )

} )


describe( 'coerceToFloat64Array', () => {

	const rawValue = 'some value here!'

	it( 'returns a new instance of Float64Array', () => {
		expect( coerceToFloat64Array( rawValue ) )
			.toBeInstanceOf( Float64Array )
	} )


	it( 'supports an Array of bytes', () => {
		expect( coerceToFloat64Array( stringToBytes( rawValue ) ) )
			.toBeInstanceOf( Float64Array )
	} )

} )


describe( 'coerceToBigInt64Array', () => {

	const rawValue = 'some value here!'

	it( 'returns a new instance of BigInt64Array', () => {
		expect( coerceToBigInt64Array( rawValue ) )
			.toBeInstanceOf( BigInt64Array )
	} )

	it( 'keeps input data unmutated', () => {
		expect(
			binaryToString( coerceToBigInt64Array( rawValue ) )
		).toBe( rawValue )
	} )

} )


describe( 'coerceToBigUint64Array', () => {

	const rawValue = 'some value here!'

	it( 'returns a new instance of BigUint64Array', () => {
		expect( coerceToBigUint64Array( rawValue ) )
			.toBeInstanceOf( BigUint64Array )
	} )

	it( 'keeps input data unmutated', () => {
		expect(
			binaryToString( coerceToBigUint64Array( rawValue ) )
		).toBe( rawValue )
	} )

} )