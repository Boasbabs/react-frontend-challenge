'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { theme } from './theme'
import { store } from '@/store/store'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider theme={theme}>
            <Provider store={store}>{children}</Provider>
        </ChakraProvider>
    )
}
