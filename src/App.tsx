import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./App.styles";
import "./App.css";
import Home from "./pages/Home";
import CheckOut from "./pages/CheckOut";
import Quiz from "./pages/Quiz";
import NoPage from "./pages/NoPage";
import Nav from "./pages/Nav";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
