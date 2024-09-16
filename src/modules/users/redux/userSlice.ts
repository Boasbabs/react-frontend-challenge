import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type User = {
    id: string
    name: string
    email: string
    role: string
}

export type UsersState = {
    users: User[]
    loading: boolean
    error: string | null
}

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null
}


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        createUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload)
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter((user) => user.id !== action.payload)
        },
        editUser: (state, action: PayloadAction<User>) => {
            const index = state.users.findIndex((user) => user.id === action.payload.id)
            if (index !== -1) {
                state.users[index] = action.payload
            }
        },
        getUsers: (state) => {
            return state // No need to modify state, as the users are already stored here
        }
    },
    
})

export const { createUser, deleteUser, editUser, getUsers } = usersSlice.actions

export default usersSlice.reducer