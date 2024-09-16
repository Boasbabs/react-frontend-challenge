'use client'
import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Heading,
    IconButton,
    Icon,
    Stack
} from '@chakra-ui/react'
import { DeleteIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../redux/userThunk'
import { AppDispatch } from '@/store/store'

type DeleteUserProps = {
    id: string
    name: string
}

const DeleteUser = ({ id, name }: DeleteUserProps) => {
    const dispatch = useDispatch<AppDispatch>()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const onSubmit = (values: any) => {
        dispatch(deleteUser(id))
        onClose()
    }

    return (
        <>
            <IconButton
                colorScheme="whiteAlpha"
                aria-label="Delete User"
                onClick={onOpen}
                data-testid="open-delete-user"
                icon={<DeleteIcon color="gray" />}
            />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Icon
                            aria-label="Back"
                            color="brand.900"
                            fontWeight={700}
                            mr={2}
                            as={ArrowBackIcon}
                        />
                        Delete User
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Are you sure you want to delete this user?
                        <Heading size={'sm'} mt={4}>
                            {name}
                        </Heading>
                    </ModalBody>

                    <ModalFooter>
                        <Stack
                            spacing={4}
                            direction="column"
                            align="center"
                            width={'full'}
                        >
                            <Button
                                variant="ghost"
                                onClick={onClose}
                                width={'full'}
                                data-testid="cancel-delete-user"
                            >
                                Cancel
                            </Button>
                            <Button
                                colorScheme="red"
                                width={'full'}
                                onClick={onSubmit}
                                data-testid="submit-delete-user"
                            >
                                Delete User
                            </Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default DeleteUser
