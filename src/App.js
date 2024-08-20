import 'bootstrap/dist/css/bootstrap.min.css'
import 'swiper/css'
import './App.css';
import Header from './pages/Header';
import Movie from './pages/Movie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Movie/>}/>
        <Route path='/home' element={<Movie/>}/>
        <Route path='/schedule' element={<Movie/>}/>
        <Route path='/populer' element={<Movie/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
