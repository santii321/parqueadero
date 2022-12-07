import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "../src/assets/style/index.css"
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Informes from "./pages/Informes";
import Productos from "./pages/Productos";
import AgregarProductos from "./pages/AgregarProductos";
import NuevoCliente from "./pages/NuevoCliente";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Informes" element={<Informes />} />
        <Route path="Productos" element={<Productos />} />
        <Route path="AgregarProductos" element={<AgregarProductos />} />
        <Route path="NuevoCliente" element={<NuevoCliente />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
