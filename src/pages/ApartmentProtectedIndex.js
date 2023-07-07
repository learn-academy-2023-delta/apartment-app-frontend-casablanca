import React from 'react'
import {Card, CardBody, CardSubtitle, CardTitle, Button} from 'reactstrap'
import {NavLink} from 'react-router-dom'


const ApartmentProtectedIndex = ({apartments, currentUser, deleteApartment}) => { 
  const protectedApts = apartments?.filter(apartment => currentUser.id == apartment.user_id)
  console.log(protectedApts, apartments);
  return (
    <>
    <h1>List of All Apartments</h1>
    <div className='grid-container'>
    {protectedApts?.map((apartment, index) =>{
      return (
        <Card key={index} style={{width: '16rem'}}>
          <img alt={apartment.street} src={apartment.image}/>
          <CardBody>
          <CardTitle tag="h5">{apartment.street}</CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
          {apartment.city+", "+apartment.state}<br></br>
          {"$"+apartment.price}
          </CardSubtitle>
          <Button>
            <NavLink to={`/apartmentshow/${apartment.id}`}>More About This Listing</NavLink>
          </Button>
          <Button>
            <NavLink to={`/apartmentedit/${apartment?.id}`} >
            Edit Apartment at {apartment.street} </NavLink>
          </Button>

          <Button onClick={() => deleteApartment(apartment.id)}>
            <NavLink to={'/apartmentindex'}>
            Delete Apartment at {apartment.street}</NavLink>
          </Button>
          </CardBody>
        </Card>
      )
    })}
    </div>
    </>
  )
}

export default ApartmentProtectedIndex