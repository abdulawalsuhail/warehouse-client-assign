import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home'
import ManageItem from './pages/ManageItem/ManageItem'
import Login from './pages/Auth/Login/Login'
import MyItem from './pages/MyItem/MyItem'
import AddItem from './pages/AddItem/AddItem'
import SignUp from './pages/Auth/Signup/Signup'
import RequireAuth from './pages/Auth/RequireAuth/RequireAuth'
import ServiceDetail from './pages/ServiceDetails/ServiceDetails';

import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/Shared/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/item/:itemId' element={<ServiceDetail />} />
        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem />
          </RequireAuth>
        } />
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        } />
        <Route path='/manageitem' element={
          <RequireAuth>
            <ManageItem />
          </RequireAuth>
        } />
        
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/notfound' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;
