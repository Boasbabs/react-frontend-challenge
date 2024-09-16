'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { theme } from './theme'
import { store, persistor } from '@/store/store'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider theme={theme}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
        </ChakraProvider>
    )
}
