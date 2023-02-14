import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import DataContext from "./Context/ContextData";
import PlantData from "./Context/PlantData";
import Footer from "./components/Footer";
import "./style/index.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <DataContext.Provider value={PlantData}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </DataContext.Provider>
    </>
  );
}

export default App;
