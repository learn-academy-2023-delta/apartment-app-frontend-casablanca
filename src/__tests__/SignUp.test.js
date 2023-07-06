import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import SignUp from '../pages/SignUp';

const renderShow = () => {
    render(
        <BrowserRouter>
            <SignUp />
        </BrowserRouter>
    )
}

describe("<SignUp/>", () => {
    it("has a email label", () => {
        renderShow()

        screen.logTestingPlaygroundURL()
        const emailLabel = screen.getByText(/email/i)
        expect(emailLabel).toBeInTheDocument()
    })

    it("has a input box for email", () => {
        renderShow()

        const emailTextBox = screen.getByRole('textbox', {
            name: /email/i
        })
        expect(emailTextBox).toBeInTheDocument()
    })

    it("has a password label", () => {
        renderShow()

        const passwordLabel = screen.getByText(/enter password/i)
        expect(passwordLabel).toBeInTheDocument()
    })

    it("has a input box for password", () => {
        renderShow()
        screen.logTestingPlaygroundURL()
        const passwordTextBox = screen.getByLabelText(/password/i)
        expect(passwordTextBox).toBeInTheDocument()
    })

    it("has a password confirmation label", () => {
        renderShow()
        const passwordConfirmationLabel = screen.getByText(/confirm password/i)
        expect(passwordConfirmationLabel).toBeInTheDocument()
    })

    it("has a input box for password", () => {
        renderShow()
        const passwordConfirmationTextBox = screen.getByLabelText(/confirm password/i)
        expect(passwordConfirmationTextBox).toBeInTheDocument()
    })

    it("has a button to submit", () => {
        renderShow()
        const button = screen.getByRole('button', {name: /submit/i})
        expect(button).toBeInTheDocument()
    })

})