import {Route, Routes} from 'react-router-dom';
import './App.css';
import ApartmentEdit from './pages/ApartmentEdit'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentProtectedIndex from './pages/ApartmentProtectedIndex'
import ApartmentShow from './pages/ApartmentShow'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import { mockApartments } from './MockApartments';
import { mockUsers } from './MockUsers';

function App() {

  const [apartments, setApartments] = useState(mockApartments)

  const [currentUser, setCurrentUser] = useState(mockUsers[0])


  return (
    <div className='landing-page'>
      <Header currentUser={currentUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartmentedit" element={<ApartmentEdit/>} />
          <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} />
          <Route path="/apartmentnew" element={<ApartmentNew/>} />
          <Route path="/apartmentprotectedindex" element={<ApartmentProtectedIndex apartments={apartments} currentUser={currentUser}/>} />
          <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments}/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;