import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import NotFound from '../pages/NotFound';

const renderShow = () => {
    render(
        <BrowserRouter>
            <NotFound />
        </BrowserRouter>
    )
}

describe("<NotFound/>", () => {
    it("has a image in NotFound page", () => {
        renderShow()
        const notFoundPic = screen.getByRole('img')
        expect(notFoundPic).toBeInTheDocument()
    })
})