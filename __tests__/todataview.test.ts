import toDataView from '@/toDataView'
import { stringToBuffer, stringToBytes } from '@/conversion'

const isClient		= typeof window !== 'undefined'
const clientSuffix	= isClient ? ' in the client' : ''


describe( 'toDataView' , () => {

	const rawValue	= 'some value here!'
	const bytes		= stringToBytes( rawValue )

	it( 'supports String input' + clientSuffix, () => {
		const dataView = toDataView( rawValue )
		
		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length )
		expect( Buffer.from( dataView.buffer ).toString() ).toBe( rawValue )		
	} )


	it( 'supports Array of bytes' + clientSuffix, () => {
		const dataView = toDataView( bytes )
		
		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length )
	} )


	it( 'supports Buffer' + clientSuffix, () => {
		const dataView = toDataView( stringToBuffer( rawValue ) )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length )
	} )


	it( 'supports ArrayBuffer' + clientSuffix, () => {
		const arrayBuffer	= new Uint8Array( bytes ).buffer
		const dataView		= toDataView( arrayBuffer )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length )
	} )


	it( 'supports Int8Array' + clientSuffix, () => {
		const int8Array	= new Int8Array( bytes )
		const dataView	= toDataView( int8Array )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length )
	} )

	
	it( 'supports Int16Array' + clientSuffix, () => {
		const int16Array	= new Int16Array( bytes )
		const dataView		= toDataView( int16Array )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length * 2 )
	} )


	it( 'supports Int32Array' + clientSuffix, () => {
		const int32Array	= new Int32Array( bytes )
		const dataView		= toDataView( int32Array )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length * 4 )
	} )


	it( 'supports Uint8Array' + clientSuffix, () => {
		const uint8Array	= new Uint8Array( bytes )
		const dataView		= toDataView( uint8Array )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length )
	} )


	it( 'supports Uint16Array' + clientSuffix, () => {
		const uint16Array	= new Uint16Array( bytes )
		const dataView		= toDataView( uint16Array )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length * 2 )
	} )


	it( 'supports Uint32Array' + clientSuffix, () => {
		const uint32Array	= new Uint32Array( bytes )
		const dataView		= toDataView( uint32Array )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length * 4 )
	} )


	it( 'supports Uint8ClampedArray' + clientSuffix, () => {
		const clampedArray	= new Uint8ClampedArray( bytes )
		const dataView		= toDataView( clampedArray )

		expect( dataView ).toBeInstanceOf( DataView )
		expect( dataView.byteLength ).toBe( bytes.length )
	} )


	it( 'throws a new Exception on unsupported input type' + clientSuffix, () => {

		let pass = false

		try {
			// @ts-expect-error negative testing
			toDataView( bytes.at( 0 ) )
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch ( error ) {
			pass = true
		}

		expect( pass ).toBe( true )

	} )

} )