import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import About from './pages/AboutMe/About';
import Home from './pages/Home/Home/Home'
import ManageItem from './pages/ManageItem/ManageItem'
import Login from './pages/Login/Login/Login'
import MyItem from './pages/MyItem/MyItem'
import AddItem from './pages/AddItem/AddItem'
import SignUp from './pages/Login/SignUp/SignUp'

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/myitem' element={<MyItem/>}/>
          <Route path='/additem' element={<AddItem/>}/>
          <Route path='/manageitem' element={<ManageItem/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
