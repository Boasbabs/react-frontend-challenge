'use client'
import React, { useEffect, useRef } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    IconButton,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { AppDispatch, RootState } from '@/store/store'
import { useSelector, useDispatch } from 'react-redux'
import CreateUser from '../create-user/CreateUser'
import SectionHeader from '@/modules/common/SectionHeader'
import { getUsers } from './redux/userSlice'




const Users = ({}) => {
    const userRef = useRef(false)

    const { users, loading, error } = useSelector((state: RootState) => state.users)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        if (userRef.current === false) {
            dispatch(getUsers())
        }

        return () => {
            userRef.current = true
        }
    }, [])

    console.log(users)

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
                        {loading ? (
                            <Tr>
                                <Td colSpan={4}>Loading...</Td>
                            </Tr>
                        ) : (
                            users.map((user) => (
                                <Tr key={user.id}>
                                    <Td>{user.name}</Td>
                                    <Td>{user.email}</Td>
                                    <Td>{user.role}</Td>
                                    <Td>
                                        <IconButton
                                            colorScheme="whiteAlpha"
                                            aria-label="Delete User"
                                            icon={<DeleteIcon color="gray" />}
                                            // Add delete handler here if needed
                                        />
                                    </Td>
                                </Tr>
                            ))
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Users
