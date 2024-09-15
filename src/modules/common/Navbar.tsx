'use client'

import { Box, Flex, Heading } from '@chakra-ui/react'

export default function Navbar() {
    return (
        <>
            <Box
                bg={'white'}
                px={6}
                py={2}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={'gray.200'}
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
