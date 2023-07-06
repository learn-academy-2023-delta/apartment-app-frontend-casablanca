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

function App() {
  return (
    <>
    
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
    </>
  );
}

export default App;
