import { expect, it, describe } from 'vitest'
import { render, screen } from '@testing-library/react'

import Users from './Users'

describe('Users', () => {
    it('should render the section header with title "Users"', () => {
        render(<Users />)
        screen.debug()
        expect(screen.getByText('Users')).toBeInTheDocument()
    })

    it('should render CreateUser component', () => {
        render(<Users />)
        expect(screen.getByText('Create User')).toBeInTheDocument()
    })
})
