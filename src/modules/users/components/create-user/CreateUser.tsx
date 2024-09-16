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
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { createUserValidationSchema } from '../../utils/utils'
import { createUser } from '../../redux/userThunk'
import { AppDispatch } from '@/store/store'

const CreateUser = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(createUserValidationSchema),
        defaultValues: {
            name: '',
            email: '',
            role: 'admin'
        }
    })

    const onSubmit = (values: any) => {
        dispatch(createUser({ ...values }))
        onClose()
        reset()
    }

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
                        <form>
                            <Stack spacing={4}>
                                <FormControl isInvalid={Boolean(errors.name)} isRequired>
                                    <FormLabel>Name</FormLabel>
                                    <Input type="text" id="name" {...register('name')} />
                                    <FormErrorMessage>
                                        {errors.name && errors.name.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={Boolean(errors.email)} isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        type="email"
                                        id="email"
                                        {...register('email')}
                                    />
                                    <FormErrorMessage>
                                        {errors.email && errors.email.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={Boolean(errors.role)} isRequired>
                                    <FormLabel>Role</FormLabel>
                                    <Select id="role" {...register('role')}>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </Select>

                                    <FormErrorMessage>
                                        {errors.role && errors.role.message}
                                    </FormErrorMessage>
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
                            <Button width={'full'} onClick={handleSubmit(onSubmit)}>
                                Create User
                            </Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateUser
