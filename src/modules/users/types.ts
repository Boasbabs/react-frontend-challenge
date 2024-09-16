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

enum RoleValues {
    ROLE_ADMIN = 'admin',
    ROLE_USER = 'user'
}

export type Role = `${RoleValues}`
