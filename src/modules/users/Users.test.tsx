import { expect, it, describe, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import Users from './Users'

describe('Users', () => {
     beforeEach(() => {
         vi.clearAllMocks()
     })
     
    it('should render the section header with title "Users"', () => {
        render(
            <Provider store={store}>
                <Users />
            </Provider>
        )
        expect(screen.getByText('Users')).toBeInTheDocument()
    })

    it('should render CreateUser component', () => {
        render(
            <Provider store={store}>
                <Users />
            </Provider>
        )
        expect(screen.getByText('Create User')).toBeInTheDocument()
    })
})
