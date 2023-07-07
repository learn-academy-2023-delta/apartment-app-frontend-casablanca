import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button} from 'reactstrap'

const ApartmentShow = ({apartments, deleteApartment}) => {
  const { id } = useParams()
  let selectedApartment = apartments?.find(apartment => apartment.id === +id)

  return (

    <div>
      {selectedApartment && (
        <Card
        style={{
          width: '21rem'
        }}
      >
        <img
          alt={selectedApartment?.city+""+selectedApartment?.state}
          src={selectedApartment?.image}
        />
        <CardBody>
          <CardTitle tag="h5">
            {selectedApartment?.price}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {selectedApartment?.city}
            {selectedApartment?.state}
          </CardSubtitle>
          <CardText>
            Square Footage: {selectedApartment?.square_footage}<br></br>
            Bedrooms: {selectedApartment?.bedrooms}<br></br>
            Bathrooms: {selectedApartment?.bathrooms}
          </CardText>
        </CardBody>
      </Card>
      )}
      <Button>
        <NavLink to={`/apartmentedit/${selectedApartment?.id}`} >
        Edit Apartment Listing </NavLink>
      </Button>

      <Button onClick={() => deleteApartment(id)}>
        <NavLink to={'/apartmentindex'}>
        Delete Apartment</NavLink>
      </Button>
      
    </div>
  
  )
}

export default ApartmentShow