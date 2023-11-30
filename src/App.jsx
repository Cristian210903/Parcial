import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Chefs from "./pages/Chefs";
import Recipes from "./pages/Recipes";
import Recipe1 from "./pages/Recipe1";
import Recipe2 from "./pages/Recipe2";
import Recipe3 from "./pages/Recipe3";
import Footer from "./components/Footer";
import Recipe4 from "./pages/Recipe4";
import Recipe5 from "./pages/Recipe5";
import Recipe6 from "./pages/Recipe6";
import Recipe7 from "./pages/Recipe7";
import Recipe8 from "./pages/Recipe8";
import Recipe9 from "./pages/Recipe9";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Chefs />} path="/chefs"></Route>
        <Route element={<Nosotros />} path="/nosotros"></Route>
        <Route element={<Recipes />} path="/recipes"></Route>
        <Route element={<Recipe1/>} path="/recipe1"></Route>
        <Route element={<Recipe2/>} path="/recipe2"></Route>
        <Route element={<Recipe3/>} path="/recipe3"></Route>
        <Route element={<Recipe4/>} path="/recipe4"></Route>
        <Route element={<Recipe5/>} path="/recipe5"></Route>
        <Route element={<Recipe6/>} path="/recipe6"></Route>
        <Route element={<Recipe7/>} path="/recipe7"></Route>
        <Route element={<Recipe8/>} path="/recipe8"></Route>
        <Route element={<Recipe9/>} path="/recipe9"></Route>
      </Routes>
      <Footer/>


    </>
  )
}
export default App;
