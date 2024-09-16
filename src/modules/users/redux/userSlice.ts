import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User, UsersState } from '../types'
import { getUsers, createUser, deleteUser, editUser } from './userThunk'

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get Users
        builder.addCase(getUsers.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(
            getUsers.fulfilled,
            (state, action: PayloadAction<Array<User>>) => {
                state.loading = false
                state.users = action.payload
            }
        )
        builder.addCase(getUsers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Failed to fetch users'
        })

        // Create User
        builder.addCase(createUser.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(createUser.fulfilled, (state, action: PayloadAction<User>) => {
            state.loading = false
            state.users.push(action.payload)
        })
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Failed to create user'
        })

        // Delete User
        builder.addCase(deleteUser.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(deleteUser.fulfilled, (state, action: PayloadAction<string>) => {
            state.loading = false
            state.users = state.users.filter((user) => user.id !== action.payload)
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Failed to delete user'
        })

        // Edit User
        builder.addCase(editUser.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(editUser.fulfilled, (state, action: PayloadAction<User>) => {
            state.loading = false
            const index = state.users.findIndex((user) => user.id === action.payload.id)
            if (index !== -1) {
                state.users[index] = action.payload
            }
        })
        builder.addCase(editUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Failed to edit user'
        })
    }
})

export default usersSlice.reducer