'use client'

import {
    Box,
    Container,
} from '@chakra-ui/react'
import Navbar from './Navbar'

type Props = {
    children: React.ReactNode
}

export const PageContainer = ({ children }: Props) => {
    return (
        <Box bg={'gray.50'} minH={'100vH'}>
            <Navbar />
            <Container maxW={'5xl'} mt={12} padding={6}>
                {children}
            </Container>
        </Box>
    )
}
