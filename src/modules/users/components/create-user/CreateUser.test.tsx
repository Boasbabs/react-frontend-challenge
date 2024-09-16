import { vi, it, beforeEach, describe, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import CreateUser from './CreateUser'
import { createUser } from '@/modules/users/redux/userThunk'

vi.doMock('@/modules/users/redux/userThunk', () => ({
    createUser: vi.fn(),
    getUsers: vi.fn()
}))

describe('CreateUser Component', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })
    
    it('opens the Create User modal correctly', async () => {
        render(
            <Provider store={store}>
                <CreateUser />
            </Provider>
        )

        // Open modal
        const openModalButton = screen.getByTestId('open-create-user')
        await userEvent.click(openModalButton)

        // Modal should be open
        const nameInput = screen.getByLabelText(/name/i)
        const emailInput = screen.getByLabelText(/email/i)
        const roleInput = screen.getByLabelText(/role/i)
        const modalSubmitButton = screen.getByTestId('submit-create-user')

        expect(nameInput).toBeVisible()
        expect(emailInput).toBeVisible()
        expect(roleInput).toBeVisible()
        expect(modalSubmitButton).toBeVisible()
    })

    it('opens and closes the modal correctly', async () => {
        render(
            <Provider store={store}>
                <CreateUser />
            </Provider>
        )
        // Open modal
        const openModalButton = screen.getByTestId('open-create-user')
        await userEvent.click(openModalButton)

        // Modal should be open
        const modalSubmitButton = screen.getByTestId('submit-create-user')
        const nameInput = screen.getByLabelText(/name/i)

        // Close modal
        const cancelButton = screen.getByTestId('cancel-create-user')
        await userEvent.click(cancelButton)

        waitFor(() => {
            // Modal should be closed
            expect(modalSubmitButton).not.toBeVisible()
            expect(nameInput).not.toBeVisible()
        })


    })

    it('shows validation errors when form is invalid', async () => {
        render(
            <Provider store={store}>
                <CreateUser />
            </Provider>
        )

        // Open modal
        const openModalButton = screen.getByTestId('open-create-user')
        await userEvent.click(openModalButton)

        // Submit the form without filling fields
        const submitButton = screen.getByTestId('submit-create-user')
        await userEvent.click(submitButton)

        // Expect validation errors
        expect(
            await screen.findByText('Name must be at least 2 characters long')
        ).toBeInTheDocument()
        expect(await screen.findByText('Email is required')).toBeInTheDocument()

    })

    it('shows validation error for short name', async () => {
        render(
            <Provider store={store}>
                <CreateUser />
            </Provider>
        )

        // Open modal
        const openModalButton = screen.getByTestId('open-create-user')
        await userEvent.click(openModalButton)
        
        const nameInput = screen.getByLabelText(/name/i)
        await userEvent.type(nameInput, 'J') // Short name

        const emailInput = screen.getByLabelText(/email/i)
        await userEvent.type(emailInput, 'john@gmail.com')

        const submitButton = screen.getByTestId('submit-create-user')
        await userEvent.click(submitButton)

        // Expect validation errors
        expect(
            await screen.findByText('Name must be at least 2 characters long')
        ).toBeInTheDocument()
    })

    // TODO: Fix this test
    it.skip('dispatches createUser action when form is valid', async () => {
        render(
            <Provider store={store}>
                <CreateUser />
            </Provider>
        )

        // Open modal
        const openModalButton = screen.getByTestId('open-create-user')
        await userEvent.click(openModalButton)

        // Fill out the form
        await userEvent.type(screen.getByLabelText(/name/i), 'John Doe')
        await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com')
        await userEvent.selectOptions(screen.getByLabelText(/role/i), 'admin')

        // Submit the form
        const submitButton = screen.getByTestId('submit-create-user')
        await userEvent.click(submitButton)

        // Wait for modal to close
        await waitFor(() => expect(submitButton).not.toBeInTheDocument())

        // Check if createUser was called with correct data
        expect(createUser).toHaveBeenCalledTimes(1)
        expect(createUser).toHaveBeenCalledWith({
            name: 'John Doe',
            email: 'john@example.com',
            role: 'admin'
        })
    })
})