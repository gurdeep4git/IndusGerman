import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/product/:name" element={<ProductDetails />} />
        </Routes>

        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
