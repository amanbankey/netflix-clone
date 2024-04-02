import logo from './logo.svg';
import './App.css';
import { Route , Switch, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import NetFlixShow  from './pages/NetFlixShow';
// import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer/Footer.js'
import FAQ from './components/FAQ.js';

function App() {
  return (
    <div className="App  ">

        {/* <ScrollToTop /> */}
        <Routes >
           <Route  path='/' element={<Home/>} />
           <Route path='/netflix-show' element={<NetFlixShow/>} />
        </Routes>

        <FAQ />
        <Footer />
    </div>
  );
}

export default App;
