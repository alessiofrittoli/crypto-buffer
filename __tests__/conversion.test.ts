import { coerceToInt16Array, coerceToInt32Array, coerceToUint16Array, coerceToUint32Array } from '@/coercion'
import {
	readUint16BE,
	writeUint16BE,
	stringToBytes,
	binaryToString,
	stringToBinary,
	binaryToLatin1String,
	unicodeToBinarySequence,
	binarySequenceToUint8Array,
} from '@/conversion'


describe( 'stringToBinary', () => {

	it( 'converts a String to Buffer', () => {

		expect( stringToBinary( 'Hello world!' ) )
			.toBeInstanceOf( Uint8Array )

	} )

} )


describe( 'unicodeToBinarySequence', () => {

	it( 'converts data to 0-1 binary sequence', () => {

		expect( unicodeToBinarySequence( 'Hello world!' ) )
			.toBe( '01001000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100 00100001' )

	} )


	it( 'accepts a custom sequence separator', () => {

		expect( unicodeToBinarySequence( 'Hello world!', '' ) )
			.toBe( '010010000110010101101100011011000110111100100000011101110110111101110010011011000110010000100001' )

	} )

} )


describe( 'stringToBytes', () => {

	it( 'converts a String to an Array of bytes', () => {

		const rawData = 'Hello world!'

		expect( stringToBytes( rawData ).length )
			.toBe( rawData.length )

	} )

} )


describe( 'binaryToString', () => {

	const rawData = 'Hello world!'

	it( 'supports Array of bytes', () => {
		expect( binaryToString( stringToBytes( rawData ) ) )
			.toBe( rawData )
	} )


	it( 'supports Buffer', () => {
		expect( binaryToString( stringToBinary( rawData ) ) )
			.toBe( rawData )
	} )


	it( 'supports ArrayBuffer', () => {
		const arrayBuffer = new Uint8Array( stringToBytes( rawData ) ).buffer
		expect( binaryToString( arrayBuffer ) )
			.toBe( rawData )
	} )


	it( 'supports Int8Array', () => {
		expect( binaryToString( new Int8Array( stringToBytes( rawData ) ) ) )
			.toBe( rawData )
	} )
		
		
	it( 'supports Int16Array', () => {
		expect( binaryToString( coerceToInt16Array( rawData ) ) )
			.toBe( rawData )
	} )


	it( 'supports Int32Array', () => {
		expect( binaryToString( coerceToInt32Array( rawData ) ) )
			.toBe( rawData )
	} )


	it( 'supports Uint8Array', () => {
		expect( binaryToString( new Uint8Array( stringToBytes( rawData ) ) ) )
			.toBe( rawData )
	} )


	it( 'supports Uint16Array', () => {
		expect( binaryToString( coerceToUint16Array( rawData ) ) )
			.toBe( rawData )
	} )


	it( 'supports Uint32Array', () => {
		expect( binaryToString( coerceToUint32Array( rawData ) ) )
			.toBe( rawData )
	} )


	it( 'supports Uint8ClampedArray', () => {
		expect( binaryToString( new Uint8ClampedArray( stringToBytes( rawData ) ) ) )
			.toBe( rawData )
	} )

} )


describe( 'binaryToLatin1String', () => {

	const rawData = 'Hello world!'

	it( 'supports Array of bytes', () => {
		expect( binaryToLatin1String( stringToBytes( rawData ) ) )
			.toBe( rawData )
	} )


	it( 'supports Buffer', () => {
		expect( binaryToLatin1String( stringToBinary( rawData ) ) )
			.toBe( rawData )
	} )


	it( 'supports ArrayBuffer', () => {
		const arrayBuffer = new Uint8Array( stringToBytes( rawData ) ).buffer
		expect( binaryToLatin1String( arrayBuffer ) )
			.toBe( rawData )
	} )


	it( 'supports Int8Array', () => {
		expect( binaryToLatin1String( new Int8Array( stringToBytes( rawData ) ) ) )
			.toBe( rawData )
	} )
		
		
	it( 'supports Int16Array', () => {		
		expect( binaryToLatin1String( coerceToInt16Array( rawData ) ) )
			.toBe( rawData )
	} )


	it( 'supports Int32Array', () => {
		expect( binaryToLatin1String( coerceToInt32Array( rawData ) ) )
			.toBe( rawData )
	} )


	it( 'supports Uint8Array', () => {
		expect( binaryToLatin1String( new Uint8Array( stringToBytes( rawData ) ) ) )
			.toBe( rawData )
	} )


	it( 'supports Uint16Array', () => {
		expect( binaryToLatin1String( coerceToUint16Array( rawData ) ) )
			.toBe( rawData )
	} )


	it( 'supports Uint32Array', () => {
		expect( binaryToLatin1String( coerceToUint32Array( rawData ) ) )
			.toBe( rawData )
	} )


	it( 'supports Uint8ClampedArray', () => {
		expect( binaryToLatin1String( new Uint8ClampedArray( stringToBytes( rawData ) ) ) )
			.toBe( rawData )
	} )

} )


describe( 'binarySequenceToUint8Array', () => {

	it( 'converts 0-1 binary sequence to Uint8Array', () => {
		expect(
			binaryToString(
				binarySequenceToUint8Array( '01001000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100 00100001' )
			)
		).toBe( 'Hello world!' )
	} )


	it( 'accepts a custom sequence separator', () => {

		expect(
			binaryToString(
				binarySequenceToUint8Array( '010010000110010101101100011011000110111100100000011101110110111101110010011011000110010000100001', '' )
			)
		).toBe( 'Hello world!' )

	} )

} )


describe( 'writeUint16BE', () => {

	it( 'writes a 16-bit unsigned integer to a Buffer in big-endian format', () => {

		const value	= 0x1234
		const buf	= writeUint16BE( value )

		expect( buf ).toBeInstanceOf( Buffer )
		expect( buf.length ).toBe( 2 )
		expect( buf[ 0 ] ).toBe( 0x12 )
		expect( buf[ 1 ] ).toBe( 0x34 )

	} )


	it( 'writes 0 correctly', () => {

		const buf = writeUint16BE( 0 )

		expect( buf[ 0 ] ).toBe( 0x00 )
		expect( buf[ 1 ] ).toBe( 0x00 )

	} )

	it( 'writes 65535 (0xFFFF) correctly', () => {

		const buf = writeUint16BE( 0xFFFF )

		expect( buf[ 0 ] ).toBe( 0xFF )
		expect( buf[ 1 ] ).toBe( 0xFF )
		
	} )

} )


describe( 'readUint16BE', () => {

	it( 'reads a 16-bit unsigned integer from a Buffer in big-endian format', () => {
		const buf = Buffer.from( [ 0x12, 0x34 ] )
		expect( readUint16BE( buf ) ).toBe( 0x1234 )
	} )

	it( 'reads with offset', () => {
		const buf = Buffer.from( [ 0x00, 0x12, 0x34 ] )
		expect( readUint16BE( buf, 1 ) ).toBe( 0x1234 )
	} )

	it( 'reads 0 correctly', () => {
		const buf = Buffer.from( [ 0x00, 0x00 ] )
		expect( readUint16BE( buf ) ).toBe( 0 )
	} )

	it( 'reads 65535 (0xFFFF) correctly', () => {
		const buf = Buffer.from( [ 0xFF, 0xFF ] )
		expect( readUint16BE( buf ) ).toBe( 0xFFFF )
	} )
	
} )