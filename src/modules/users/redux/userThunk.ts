import {  createAsyncThunk } from '@reduxjs/toolkit'
import { User } from '../types'
import { RootState } from '@/store/store'

export const getUsers = createAsyncThunk('users/getUsers', async (_, { getState }) => {
    return new Promise<Array<User>>((resolve) => {
        setTimeout(() => {
            const state = getState() as RootState
            resolve(state.users.users)
        }, 500)
    })
})

export const createUser = createAsyncThunk(
    'users/createUser',
    async (user: Omit<User, 'id'>) => {
        return new Promise<User>((resolve) => {
            setTimeout(() => {
                const newUser = { ...user, id: Date.now().toString() }
                resolve(newUser)
            }, 500)
        })
    }
)

export const deleteUser = createAsyncThunk('users/deleteUser', async (userId: string) => {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(userId)
        }, 500)
    })
})

export const editUser = createAsyncThunk('users/editUser', async (user: User) => {
    return new Promise<User>((resolve) => {
        setTimeout(() => {
            resolve(user)
        }, 500)
    })
})