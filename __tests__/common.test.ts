import { bufferEquals } from '@/common'
import { stringToBinary, stringToBytes } from '@/conversion'

const isClient		= typeof window !== 'undefined'
const clientSuffix	= isClient ? ' in the client' : ''


describe( 'bufferEquals', () => {

	it( 'compares two Buffers' + clientSuffix, () => {

		const rawData = 'raw string value'
		const buffer1 = stringToBinary( rawData )
		const buffer2 = stringToBytes( rawData )
		const buffer3 = new Uint8Array( new TextEncoder().encode( 'wrong value' ) )
		const buffer4 = Buffer.from( buffer1 )
		buffer4[ 2 ] = 4
		
		expect( bufferEquals( buffer1, buffer2 ) )
			.toBe( true )
		
		expect( bufferEquals( buffer1, buffer3 ) )
			.toBe( false )

		expect( bufferEquals( buffer1, buffer4 ) )
			.toBe( false )
		
	} )

} )