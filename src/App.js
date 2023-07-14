import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Footer from './components/Footer/Footer';
import SubProduct from "./pages/SubProduct/SubProduct";
import Service from "./pages/Service/Service";
import BackToTop from "./components/BackToTop/BackToTop";
import { ScrollTop } from "./components/ScrollTop/ScrollTop";
import { WowAnimate } from "./components/WowAnimate/WowAnimate";
import Clients from './pages/Clients/Clients';
import Contact from './pages/Contact/Contact';

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <WowAnimate />

        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/product/:name" element={<ProductDetails />} />
          <Route path="/product/:name/:subproduct" element={<SubProduct />} />
          <Route path="/services/:name" element={<Service />} />
          <Route path="/clients" exact element={<Clients />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>

        <Footer />
        <BackToTop />
      </BrowserRouter>

    </>
  );
}

export default App;
