import { binaryToString, stringToBuffer, stringToBytes } from '@/conversion'

const isClient		= typeof window !== 'undefined'
const clientSuffix	= isClient ? ' in the client' : ''


describe( 'stringToBuffer', () => {

	it( 'converts a String to Buffer' + clientSuffix, () => {

		expect( stringToBuffer( 'Hello world!' ) )
			.toBeInstanceOf( ! isClient ? Buffer : Uint8Array )

	} )

} )


describe( 'stringToBytes', () => {

	it( 'converts a String to an Array of bytes' + clientSuffix, () => {

		const rawData = 'Hello world!'

		expect( stringToBytes( rawData ).length )
			.toBe( rawData.length )

	} )

} )


describe( 'binaryToString', () => {

	const rawData = 'Hello world!'

	it( 'supports Array of bytes' + clientSuffix, () => {
		expect( binaryToString( stringToBytes( rawData ) ) )
			.toBe( rawData )
	} )


	it( 'supports Buffer' + clientSuffix, () => {
		expect( binaryToString( stringToBuffer( rawData ) ) )
			.toBe( rawData )
	} )


	it( 'supports ArrayBuffer' + clientSuffix, () => {
		const arrayBuffer = new Uint8Array( stringToBytes( rawData ) ).buffer
		expect( binaryToString( arrayBuffer ) )
			.toBe( rawData )
	} )


	it( 'supports Int8Array' + clientSuffix, () => {
		expect( binaryToString( new Int8Array( stringToBytes( rawData ) ) ) )
			.toBe( rawData )
	} )
		
		
	it( 'supports Int16Array' + clientSuffix, () => {		
		expect( binaryToString( new Int16Array( stringToBytes( rawData ) ) ) )
			.toBe( rawData )
	} )


	it( 'supports Int32Array' + clientSuffix, () => {
		expect( binaryToString( new Int32Array( stringToBytes( rawData ) ) ) )
			.toBe( rawData )
	} )


	it( 'supports Uint8Array' + clientSuffix, () => {
		expect( binaryToString( new Uint8Array( stringToBytes( rawData ) ) ) )
			.toBe( rawData )
	} )


	it( 'supports Uint16Array' + clientSuffix, () => {
		expect( binaryToString( new Uint16Array( stringToBytes( rawData ) ) ) )
			.toBe( rawData )
	} )


	it( 'supports Uint32Array' + clientSuffix, () => {
		expect( binaryToString( new Uint32Array( stringToBytes( rawData ) ) ) )
			.toBe( rawData )
	} )


	it( 'supports Uint8ClampedArray' + clientSuffix, () => {
		expect( binaryToString( new Uint8ClampedArray( stringToBytes( rawData ) ) ) )
			.toBe( rawData )
	} )

} )