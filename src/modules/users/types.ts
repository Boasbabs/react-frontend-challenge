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
