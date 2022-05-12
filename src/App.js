import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import About from './pages/AboutMe/About';
import Home from './pages/Home/Home/Home'
import ManageItem from './pages/ManageItem/ManageItem'
import Login from './pages/Auth/Login/Login'
import MyItem from './pages/MyItem/MyItem'
import AddItem from './pages/AddItem/AddItem'
import SignUp from './pages/Auth/Signup/Signup'
import RequireAuth from './pages/Auth/RequireAuth/RequireAuth'
import ServiceDetail from './ServiceDetails/ServiceDetails';
import Checkout from './CheckOut/CheckOut';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/item/:serviceId'element={<ServiceDetail/>}/>
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
        {/* <Route path='/checkOut' element={
          <RequireAuth>
            <Checkout/>
          </RequireAuth>
        }/> */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/notfound' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
