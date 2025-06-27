import { toDataView } from '@/toDataView'
import { stringToBytes } from '@/conversion'
import { coerceToBigInt64Array, coerceToBigUint64Array, coerceToFloat32Array, coerceToFloat64Array } from '@/coercion'

describe( 'toDataView' , () => {

	const rawValue	= 'some value here!'
	const bytes		= stringToBytes( rawValue )

	it( 'returns untouched DataView input', () => {

		const dataView = new DataView( new Uint8Array( [ 0 ] ).buffer )

		expect( toDataView( dataView ) )
			.toBe( dataView )

	} )


	it( 'supports String input', () => {
		const dataView = toDataView( rawValue )
		
		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length )
		expect( Buffer.from( dataView.buffer ).toString() ).toBe( rawValue )		
	} )


	it( 'supports Array of bytes', () => {
		const dataView = toDataView( bytes )
		
		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length )
	} )


	it( 'supports Node.JS Buffer', () => {
		const dataView = toDataView( Buffer.from( rawValue ) )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length )
	} )


	it( 'supports ArrayBuffer', () => {
		const arrayBuffer	= new Uint8Array( bytes ).buffer
		const dataView		= toDataView( arrayBuffer )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length )
	} )


	it( 'supports Int8Array', () => {
		const int8Array	= new Int8Array( bytes )
		const dataView	= toDataView( int8Array )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length )
	} )

	
	it( 'supports Int16Array', () => {
		const int16Array	= new Int16Array( bytes )
		const dataView		= toDataView( int16Array )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length * 2 )
	} )


	it( 'supports Int32Array', () => {
		const int32Array	= new Int32Array( bytes )
		const dataView		= toDataView( int32Array )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length * 4 )
	} )


	it( 'supports Uint8Array', () => {
		const uint8Array	= new Uint8Array( bytes )
		const dataView		= toDataView( uint8Array )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length )
	} )


	it( 'supports Uint16Array', () => {
		const uint16Array	= new Uint16Array( bytes )
		const dataView		= toDataView( uint16Array )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length * 2 )
	} )


	it( 'supports Uint32Array', () => {
		const uint32Array	= new Uint32Array( bytes )
		const dataView		= toDataView( uint32Array )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length * 4 )
	} )

	
	it( 'supports BigInt64Array', () => {
		const bigInt64Array	= coerceToBigInt64Array( rawValue )
		const dataView		= toDataView( bigInt64Array )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length )
	} )


	it( 'supports BigUint64Array', () => {
		const bigUint64Array= coerceToBigUint64Array( rawValue )
		const dataView		= toDataView( bigUint64Array )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length )
	} )


	it( 'supports Float32Array', () => {
		const float32Array	= coerceToFloat32Array( rawValue )
		const dataView		= toDataView( float32Array )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length )
	} )


	it( 'supports Float64Array', () => {
		const float64Array	= coerceToFloat64Array( rawValue )
		const dataView		= toDataView( float64Array )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length )

	} )


	it( 'supports Uint8ClampedArray', () => {
		const clampedArray	= new Uint8ClampedArray( bytes )
		const dataView		= toDataView( clampedArray )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length )
	} )


	it( 'throws a new Exception on unsupported input data type', () => {
		// @ts-expect-error negative testing
		expect( () => toDataView( () => {} ) )
			.toThrow( 'First argument to DataView constructor must be an ArrayBuffer' )
	} )

} )