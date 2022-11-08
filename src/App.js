import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormCitas from "./componentes/citas/FormCitas";
import ListaDoctores from "./componentes/doctores/ListaDoctores";
import PerfilDoctores from "./componentes/doctores/PerfilDoctores";
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
          <Route path="/doctores" element={<ListaDoctores />} exact></Route>
          <Route path="/citas" element={<FormCitas />} exact></Route>
          <Route path="/micuenta" element={<Login />} exact></Route>
          <Route path="/doctores/:id" element={<PerfilDoctores />} exact></Route>
        </Routes>
      </BrowserRouter>
      <br></br>
      <Footer />
    </div>
  );
}
export default App;
