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
    FormControl,
    FormLabel,
    Input,
    Icon,
    Stack,
    FormErrorMessage,
    Select
} from '@chakra-ui/react'
import { AddIcon, ArrowBackIcon } from '@chakra-ui/icons'

const CreateUser = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen} leftIcon={<AddIcon />} boxShadow="md">
                Create User
            </Button>
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
                        Create User
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={() => {}}>
                            <Stack spacing={4}>
                                <FormControl isInvalid={true} isRequired>
                                    <FormLabel>Name</FormLabel>
                                    <Input type="text" id="name" />
                                    <FormErrorMessage>{/* no error */}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={true} isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email" id="email" />
                                    <FormErrorMessage>{/* no error */}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={true} isRequired>
                                    <FormLabel>Role</FormLabel>
                                    <Select id="role">
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </Select>

                                    <FormErrorMessage>{/* no error */}</FormErrorMessage>
                                </FormControl>
                            </Stack>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Stack
                            spacing={4}
                            direction="column"
                            align="center"
                            width={'full'}
                        >
                            <Button variant="ghost" onClick={onClose} width={'full'}>
                                Cancel
                            </Button>
                            <Button width={'full'}>Create User</Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateUser
