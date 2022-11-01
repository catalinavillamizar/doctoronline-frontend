import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormEspecialidades from "./componentes/especialidades/FormEspecialidades";
import TablaEspecialidades from "./componentes/especialidades/TablaEspecialidades";
import Banner from "./componentes/general/Banner";
import Footer from "./componentes/general/Footer";
import Header from "./componentes/general/Header";
import Login from "./componentes/general/Login";

const App = () => {
  return (
    <div>
      <Header />
      <br></br>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />} exact></Route>
          <Route path="/especialidades" element={<TablaEspecialidades />} exact></Route>
          <Route path="/especialidades/form" element={<FormEspecialidades />} exact></Route>
          <Route path="/micuenta" element={<Login />} exact></Route>
        </Routes>
      </BrowserRouter>
      <br></br>
      <Footer />
    </div>
  );
}
export default App;
