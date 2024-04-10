import { Jost } from 'next/font/google'
import { Inter } from 'next/font/google'
 const jost = Jost({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
const inter = Inter({
    weight: '400',
    subsets: ['latin']
})

export {inter, jost}
