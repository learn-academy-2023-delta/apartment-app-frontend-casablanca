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

function App() {
  return (
    <div className='landing-page'>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartmentedit" element={<ApartmentEdit/>} />
          <Route path="/apartmentindex" element={<ApartmentIndex/>} />
          <Route path="/apartmentnew" element={<ApartmentNew/>} />
          <Route path="/apartmentprotectedindex" element={<ApartmentProtectedIndex/>} />
          <Route path="/apartmentshow" element={<ApartmentShow/>} />
          <Route path="/notfound" element={<NotFound/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/sigup" element={<SignUp/>} />
        </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
