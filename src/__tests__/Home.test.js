import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';

const renderShow = () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
}

describe("<Home/>", () => {
    it("has a image in home page", () => {
        renderShow()
        const homePagePic = screen.getByRole('img')
        expect(homePagePic).toBeInTheDocument()
    })
})