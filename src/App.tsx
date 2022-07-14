import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./App.styles";
import "./App.css";
import Home from "./pages/Home";
import CheckOut from "./pages/CheckOut";
import Quiz from "./pages/Quiz";
import NoPage from "./pages/NoPage";
import Nav from "./pages/Nav";
import Order from "./pages/Order";
import MyOrder from "./pages/MyOrder";
import About from "./pages/About";
import Footer from "./pages/Footer";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Shipping from "./pages/Shipping";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="about" element={<About />} />
          <Route path="order" element={<Order />} />
          <Route path="myorder" element={<MyOrder />} />
          {/* footer */}
          <Route path="faq" element={<FAQ />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shipping" element={<Shipping />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
