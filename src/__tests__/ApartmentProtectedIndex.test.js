import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import ApartmentProtectedIndex from '../pages/ApartmentProtectedIndex';
import { mockApartments } from '../MockApartments';
import { mockUsers } from '../MockUsers';

const renderShow = () => {
    render(
        <BrowserRouter>
            <ApartmentProtectedIndex apartments={mockApartments} currentUser={mockUsers[0]} />
        </BrowserRouter>
    )
}

describe("<ApartmentProtectedIndex />", () => {
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
        expect(apartmentCityStatePrice).toBeInTheDocument()})
    it("displays link to edit apartment listing", () => {
          renderShow()
          const editApartmentLink = screen.getByRole('link', {
              name: /edit apartment at 666 elm street/i
          })
          expect(editApartmentLink).toBeInTheDocument()
      })
  
    it("displays link to delete apartment", () => {
          renderShow()
          const removeApartment = screen.getByRole('link', {
              name: /delete apartment at 666 elm street/i
          })
          expect(removeApartment).toBeInTheDocument()
      })


    })