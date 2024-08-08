import 'bootstrap/dist/css/bootstrap.min.css'
import 'swiper/css'
import './App.css';
import Header from './pages/Header';
import Movie from './pages/Movie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Movie/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
