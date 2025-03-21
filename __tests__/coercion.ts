import { coerceToBigInt64Array, coerceToBigUint64Array, coerceToFloat32Array, coerceToFloat64Array, coerceToUint8Array } from '@/coercion'
import { binaryToString, stringToBinary, stringToBytes } from '@/conversion'
import { toDataView } from '@/toDataView'

export const runCoercionUnitTests = () => {

	const isClient		= typeof window !== 'undefined'
	const clientSuffix	= isClient ? ' in the client' : ''
	
	
	describe( 'coerceToUint8Array', () => {
	
		const rawValue	= 'some value here!'
		const bytes		= stringToBytes( rawValue )
	
	
		it( 'returns a new instance of Uint8Array' + clientSuffix, () => {
			expect( coerceToUint8Array( rawValue ) ).toBeInstanceOf( Uint8Array )
		} )
	
	
		it( 'keeps input data unmutated' + clientSuffix, () => {
			expect(
				binaryToString( coerceToUint8Array( rawValue ) )
			).toBe( rawValue )
		} )
	
	
		it( 'supports String input' + clientSuffix, () => {
			expect( coerceToUint8Array( rawValue ).byteLength )
				.toBe( bytes.length )
		} )
		
		
		it( 'supports number input' + clientSuffix, () => {
			expect( coerceToUint8Array( 10 ).byteLength )
				.toBe( stringToBytes( ( 10 ).toString() ).length )
		} )
	
	
		it( 'supports Array of bytes' + clientSuffix, () => {
			expect( coerceToUint8Array( bytes ).byteLength )
				.toBe( bytes.length )
		} )
	
	
		it( 'supports Buffer' + clientSuffix, () => {
			const uInt8Array = coerceToUint8Array( stringToBinary( rawValue ) )
			expect( uInt8Array.byteLength ).toBe( bytes.length )
		} )
	
	
		it( 'supports ArrayBuffer' + clientSuffix, () => {
			const arrayBuffer	= new Uint8Array( bytes ).buffer
			const uInt8Array	= coerceToUint8Array( arrayBuffer )
	
			expect( uInt8Array.byteLength ).toBe( bytes.length )
		} )
	
	
		it( 'supports Int8Array' + clientSuffix, () => {
			const int8Array	= new Int8Array( bytes )
			const uInt8Array= coerceToUint8Array( int8Array )
	
			expect( uInt8Array.byteLength ).toBe( bytes.length )
		} )
	
	
		it( 'supports Int16Array' + clientSuffix, () => {
			const int16Array	= new Int16Array( bytes )
			const uInt8Array	= coerceToUint8Array( int16Array )
	
			expect( uInt8Array.byteLength ).toBe( bytes.length )
		} )
	
	
		it( 'supports Int32Array' + clientSuffix, () => {
			const int32Array	= new Int32Array( bytes )
			const uInt8Array	= coerceToUint8Array( int32Array )
	
			expect( uInt8Array.byteLength ).toBe( bytes.length )
		} )
	
	
		it( 'supports Uint8Array' + clientSuffix, () => {
			expect(
				coerceToUint8Array( new Uint8Array( bytes ) ).byteLength
			).toBe( bytes.length )
		} )
	
	
		it( 'supports Uint16Array' + clientSuffix, () => {
			expect(
				coerceToUint8Array( new Uint16Array( bytes ) ).byteLength
			).toBe( bytes.length )
		} )
	
	
		it( 'supports Uint32Array' + clientSuffix, () => {
			expect(
				coerceToUint8Array( new Uint32Array( bytes ) ).byteLength
			).toBe( bytes.length )
		} )
	
	
		it( 'supports BigInt64Array' + clientSuffix, () => {
			expect(
				coerceToUint8Array( coerceToBigInt64Array( rawValue ) ).byteLength
			).toBe( bytes.length )
		} )
	
	
		it( 'supports BigUint64Array' + clientSuffix, () => {
			expect(
				coerceToUint8Array( coerceToBigUint64Array( rawValue ) ).byteLength
			).toBe( bytes.length )
		} )
	
	
		it( 'supports Float32Array' + clientSuffix, () => {
			expect(
				coerceToUint8Array( coerceToFloat32Array( rawValue ) ).byteLength
			).toBe( bytes.length / 4 )
		} )
	
	
		it( 'supports Float64Array' + clientSuffix, () => {
			expect(
				coerceToUint8Array( coerceToFloat64Array( rawValue ) ).byteLength
			).toBe( bytes.length / 8 )
		} )
	
	
		it( 'supports Uint8ClampedArray' + clientSuffix, () => {
			expect(
				coerceToUint8Array( new Uint8ClampedArray( bytes ) ).byteLength
			).toBe( bytes.length )
		} )
		
		
		it( 'supports DataView' + clientSuffix, () => {
			expect(
				coerceToUint8Array( toDataView( bytes ) ).byteLength
			).toBe( bytes.length )
		} )
	
	} )
	
	
	describe( 'coerceToFloat32Array', () => {
	
		const rawValue = 'some value here!'
	
		it( 'returns a new instance of Float32Array' + clientSuffix, () => {
			expect( coerceToFloat32Array( rawValue ) )
				.toBeInstanceOf( Float32Array )
		} )
	
	
		it( 'supports an Array of bytes' + clientSuffix, () => {
			expect( coerceToFloat32Array( stringToBytes( rawValue ) ) )
				.toBeInstanceOf( Float32Array )
		} )
	
	} )
	
	
	describe( 'coerceToFloat64Array', () => {
	
		const rawValue = 'some value here!'
	
		it( 'returns a new instance of Float64Array' + clientSuffix, () => {
			expect( coerceToFloat64Array( rawValue ) )
				.toBeInstanceOf( Float64Array )
		} )
	
	
		it( 'supports an Array of bytes' + clientSuffix, () => {
			expect( coerceToFloat64Array( stringToBytes( rawValue ) ) )
				.toBeInstanceOf( Float64Array )
		} )
	
	} )
	
	
	describe( 'coerceToBigInt64Array', () => {
	
		const rawValue = 'some value here!'
	
		it( 'returns a new instance of BigInt64Array' + clientSuffix, () => {
			expect( coerceToBigInt64Array( rawValue ) )
				.toBeInstanceOf( BigInt64Array )
		} )
	
		it( 'keeps input data unmutated' + clientSuffix, () => {
			expect(
				binaryToString( coerceToBigInt64Array( rawValue ) )
			).toBe( rawValue )
		} )
	
	} )
	
	
	describe( 'coerceToBigUint64Array', () => {
	
		const rawValue = 'some value here!'
	
		it( 'returns a new instance of BigUint64Array' + clientSuffix, () => {
			expect( coerceToBigUint64Array( rawValue ) )
				.toBeInstanceOf( BigUint64Array )
		} )
	
		it( 'keeps input data unmutated' + clientSuffix, () => {
			expect(
				binaryToString( coerceToBigUint64Array( rawValue ) )
			).toBe( rawValue )
		} )
	
	} )
	
}