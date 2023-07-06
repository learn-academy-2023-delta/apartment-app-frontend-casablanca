import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header';

const renderShow = () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
}

describe("<Header/>", () => {
    it("has a header", () => {
        renderShow()
        const header = screen.getByRole('heading', {
            name: /apartment app/i
        })
        expect(header).toBeInTheDocument()
    })
})