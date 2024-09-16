'use client'
import React, { useEffect } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
} from '@chakra-ui/react'
import { AppDispatch, RootState } from '@/store/store'
import { useSelector, useDispatch } from 'react-redux'
import CreateUser from './components/create-user/CreateUser'
import SectionHeader from '@/modules/common/SectionHeader'
import { getUsers } from './redux/userThunk'
import TableRow from './components/common/TableRow'

const Users = () => {
    const { users, loading, error } = useSelector((state: RootState) => state.users)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    if (error) {
        return <div>Error: {error}</div>
    }

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
                                <TableRow key={user.id} user={user} />
                            ))
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Users
