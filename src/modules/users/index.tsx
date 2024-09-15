'use client'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Flex,
    TableContainer,
    Box,
    Spacer,
    IconButton,
    Heading
} from '@chakra-ui/react'
import { AddIcon, DeleteIcon } from '@chakra-ui/icons'

export const Users = ({}) => {
    return (
        <Box>
            <Flex marginBottom={6}>
                <Heading as="h3" size="md">
                    Users
                </Heading>
                <Spacer />
                <Button leftIcon={<AddIcon />} boxShadow="md">
                    Create User
                </Button>
            </Flex>
            <TableContainer backgroundColor="white">
                <Table size="lg">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Role</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody fontWeight={'bold'}>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>
                                <IconButton
                                    colorScheme="whiteAlpha"
                                    aria-label="Delete User"
                                    icon={<DeleteIcon color="gray" />}
                                />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>feet</Td>
                            <Td>centimetres (cm)</Td>
                            <Td>centimetres (cm)</Td>
                            <Td>
                                <IconButton
                                    colorScheme="whiteAlpha"
                                    aria-label="Delete User"
                                    icon={<DeleteIcon color="gray" />}
                                />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>yards</Td>
                            <Td>metres (m)</Td>
                            <Td>metres (m)</Td>
                            <Td>
                                <IconButton
                                    colorScheme="whiteAlpha"
                                    aria-label="Delete User"
                                    icon={<DeleteIcon color="gray" />}
                                />
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}
