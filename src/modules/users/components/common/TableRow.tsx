import { Tr, Td } from '@chakra-ui/react'
import DeleteUser from '../delete-user/DeleteUser'
import { User } from '../../types'

type TableRowProps = {
    user: User
}

const TableRow = ({ user }: TableRowProps) => {
    return (
        <>
            <Tr>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.role}</Td>
                <Td>
                    <DeleteUser id={user.id} name={user.name} />
                </Td>
            </Tr>
        </>
    )
}

export default TableRow
