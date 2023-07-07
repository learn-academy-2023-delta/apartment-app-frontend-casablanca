import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import ApartmentIndex from '../pages/ApartmentIndex';
import { mockApartments } from '../MockApartments';

const renderShow = () => {
    render(
        <BrowserRouter>
            <ApartmentIndex apartments={mockApartments} />
        </BrowserRouter>
    )
}

describe("<ApartmentIndex />", () => {
    it("displays apartment listings", () => {
        renderShow()
        const header = screen.getByRole('heading', {
            name: /list of all apartments/i
        })
        expect(header).toBeInTheDocument()
    })

    it("displays image of apartment listing", () => {
        renderShow()
        const apartmentImage = screen.getByRole('img', {
            name: /666 elm street/i
        })
        expect(apartmentImage).toBeInTheDocument()
    })

    it("displays street name of apartment", () => {
        renderShow()
        const apartmentStreet = screen.getByRole('heading', {
            name: /666 elm street/i
        })
        expect(apartmentStreet).toBeInTheDocument()
    })

    it("displays city, state and price of apartment", () => {
        renderShow()
        const apartmentCityStatePrice = screen.getByRole('heading', {
            name: /raccoon city, oh/i
    
        })
        expect(apartmentCityStatePrice).toBeInTheDocument()

    })
})