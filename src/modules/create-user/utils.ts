import * as yup from 'yup'

enum RoleValues {
    ROLE_ADMIN = 'admin',
    ROLE_USER = 'user'
}

type Role = `${RoleValues}`

export interface CreateUserFormValues {
    name: string
    email: string
    role:  Role
}

export const createUserValidationSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name must be at least 2 characters long')
        .required('Name is required'),
    email: yup.string().email().required('Email is required'),
    role: yup
        .string()
        .required('Role is required')
})
