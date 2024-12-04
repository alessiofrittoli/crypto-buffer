import { stringToBuffer, stringToBytes } from '@/conversion'

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