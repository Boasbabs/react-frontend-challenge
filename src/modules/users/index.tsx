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
import { DeleteIcon } from '@chakra-ui/icons'
import CreateUser from './components/CreateUser'
import SectionHeader from '@/modules/common/SectionHeader'

const Users = ({}) => {
    return (
        <Box>
            <SectionHeader title="Users">
                <CreateUser />
            </SectionHeader>
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

export default Users
