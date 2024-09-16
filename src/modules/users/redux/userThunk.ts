import {  createAsyncThunk } from '@reduxjs/toolkit'
import { User } from '../types'

export const getUsers = createAsyncThunk('users/getUsers', async () => {
    return new Promise<Array<User>>((resolve) => {
        setTimeout(() => {
            resolve([]) 
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
            // Simply return the userId to delete from state
            resolve(userId)
        }, 500)
    })
})

export const editUser = createAsyncThunk('users/editUser', async (user: User) => {
    return new Promise<User>((resolve) => {
        setTimeout(() => {
            // Simulate editing a user by returning the updated data
            resolve(user)
        }, 500)
    })
})