import * as yup from 'yup'
import { Role } from '../types'



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
