import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import SignIn from '../pages/SignIn';
const renderShow = () => {
    render(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    )
}

describe("<SignIn/>", () => {
    it("has a email label", () => {
        renderShow()
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
        const passwordLabel = screen.getByText(/password/i)
        expect(passwordLabel).toBeInTheDocument()
    })

    it("has a input box for password", () => {
        renderShow()
        const passwordTextBox = screen.getByLabelText(/password/i)
        expect(passwordTextBox).toBeInTheDocument()
    })

    it("has a button to submit", () => {
        renderShow()
        const button = screen.getByRole('button', {name: /submit/i})
        expect(button).toBeInTheDocument()
    })
})