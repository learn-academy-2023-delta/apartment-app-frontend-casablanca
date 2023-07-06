import React from 'react'
import '../styles/Header.css'
import {Nav, NavLink, NavItem} from 'reactstrap'

const Header = (props) => {
  return (
  <div className="header">
    <h1>Apartment App</h1>
    <p>Find your crib today!!!</p>

    <Nav className="nav">
      {props.currentUser && (
        <NavItem>
          <input type="button" value='Logout' />
        </NavItem>
      )}
      {!props.currentUser && (
        <>
          <NavItem>
            <NavLink href='/signin' className="nav-link">
              Sign In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/signup' className="nav-link">
              Sign Up
            </NavLink>
          </NavItem>
        </>
      )}
    </Nav>
  </div>
  )
}

export default Header