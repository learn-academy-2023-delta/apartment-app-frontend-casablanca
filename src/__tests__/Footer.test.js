import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Footer from '../components/Footer';

const renderShow = () => {
    render(
        <BrowserRouter>
            <Footer/>
        </BrowserRouter>
    )
}

describe("<Footer />", () => {
    it("has a footer", () => {
        renderShow()
        const footer = screen.getByText(/© 2023 ricky espinoza, jacob oakley, padge mattaliano/i)
        expect(footer).toBeInTheDocument()
    })
})