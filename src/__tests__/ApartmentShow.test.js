import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route  } from 'react-router-dom'
import ApartmentShow from '../pages/ApartmentShow';
import { mockApartments } from '../MockApartments';
import { toBeInTheDOM } from '@testing-library/jest-dom/dist/matchers';

const renderShow = () => {
    render(
        <MemoryRouter initialEntries={["/apartmentshow/1"]}>
            <Routes>
                <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={mockApartments} />} />
            </Routes>
        </MemoryRouter>
    ) 
}

describe("<ApartmentShow />", () => {
    it("displays apartment listings", () => {
        renderShow()
        
        const apartmentImage = screen.getByRole('img', {
            name: /raccoon cityoh/i
        })
        expect(apartmentImage).toBeInTheDocument()
    })

    it("displays apartment price", () => {
        renderShow()

        const apartmentPrice = screen.getByRole('heading', {
            name: /900/i
        })
        expect(apartmentPrice).toBeInTheDocument()
    })

    it("displays apartment city and state", () => {
        renderShow()

        const apartmentCityState = screen.getByRole('heading', {
            name: /raccoon cityoh/i
        })
        expect(apartmentCityState).toBeInTheDocument()
    })

    it("displays apartment descriptions", () => {
        renderShow()
        const apartmentDescription = screen.getByText(/square footage: 5000bedrooms: 2bathrooms: 2/i)
        expect(apartmentDescription).toBeInTheDocument()
    })

    it("displays link to edit apartment listing", () => {
        renderShow()
        const editApartmentLink = screen.getByRole('link', {
            name: /edit apartment listing/i
        })
        expect(editApartmentLink).toBeInTheDocument()
    })

    it("displays link to delete apartment", () => {
        renderShow()
        const removeApartment = screen.getByRole('link', {
            name: /delete apartment/i
        })
        expect(removeApartment).toBeInTheDocument()
    })
})




