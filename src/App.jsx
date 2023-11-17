import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Promo from "./pages/Promo";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<About />} path="/about"></Route>
        <Route element={<Promo />} path="/promo"></Route>
      </Routes>


    </>
  )
}
export default App;
