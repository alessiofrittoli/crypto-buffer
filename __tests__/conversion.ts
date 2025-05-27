import { binarySequenceToUint8Array, binaryToString, unicodeToBinarySequence, stringToBinary, stringToBytes, binaryToBinaryString } from '@/conversion'

export const runConversionUnitTests = () => {
	
	const isClient		= typeof window !== 'undefined'
	const clientSuffix	= isClient ? ' in the client' : ''
	
	
	describe( 'stringToBinary', () => {
	
		it( 'converts a String to Buffer' + clientSuffix, () => {
	
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
			expect( binaryToString( stringToBinary( rawData ) ) )
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
	
	
	describe( 'binaryToBinaryString', () => {
	
		const rawData = 'Hello world!'
	
		it( 'supports Array of bytes' + clientSuffix, () => {
			expect( binaryToBinaryString( stringToBytes( rawData ) ) )
				.toBe( rawData )
		} )
	
	
		it( 'supports Buffer' + clientSuffix, () => {
			expect( binaryToBinaryString( stringToBinary( rawData ) ) )
				.toBe( rawData )
		} )
	
	
		it( 'supports ArrayBuffer' + clientSuffix, () => {
			const arrayBuffer = new Uint8Array( stringToBytes( rawData ) ).buffer
			expect( binaryToBinaryString( arrayBuffer ) )
				.toBe( rawData )
		} )
	
	
		it( 'supports Int8Array' + clientSuffix, () => {
			expect( binaryToBinaryString( new Int8Array( stringToBytes( rawData ) ) ) )
				.toBe( rawData )
		} )
			
			
		it( 'supports Int16Array' + clientSuffix, () => {		
			expect( binaryToBinaryString( new Int16Array( stringToBytes( rawData ) ) ) )
				.toBe( rawData )
		} )
	
	
		it( 'supports Int32Array' + clientSuffix, () => {
			expect( binaryToBinaryString( new Int32Array( stringToBytes( rawData ) ) ) )
				.toBe( rawData )
		} )
	
	
		it( 'supports Uint8Array' + clientSuffix, () => {
			expect( binaryToBinaryString( new Uint8Array( stringToBytes( rawData ) ) ) )
				.toBe( rawData )
		} )
	
	
		it( 'supports Uint16Array' + clientSuffix, () => {
			expect( binaryToBinaryString( new Uint16Array( stringToBytes( rawData ) ) ) )
				.toBe( rawData )
		} )
	
	
		it( 'supports Uint32Array' + clientSuffix, () => {
			expect( binaryToBinaryString( new Uint32Array( stringToBytes( rawData ) ) ) )
				.toBe( rawData )
		} )
	
	
		it( 'supports Uint8ClampedArray' + clientSuffix, () => {
			expect( binaryToBinaryString( new Uint8ClampedArray( stringToBytes( rawData ) ) ) )
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
	
}