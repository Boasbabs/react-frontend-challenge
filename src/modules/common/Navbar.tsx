'use client'

import {
    Box,
    Flex,
    useColorModeValue,

    Heading,
    useColorMode
} from '@chakra-ui/react'

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Box
                bg={useColorModeValue('white', 'gray.900')}
                px={6}
                py={2}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
            >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Heading as="h2" size="md">
                            Archimydes Challenge
                        </Heading>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}
