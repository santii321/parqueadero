import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/style/index.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Informes from "./pages/Informes";
import Productos from "./pages/productos/Productos";
import AgregarProductos from "./pages/productos/AgregarProductos";
import NuevoCliente from "./pages/clientes/NuevoCliente";
import NoPage from "./pages/NoPage";
import EditarEliminar from "./pages/productos/EditarEliminar";
import EditarProductos from "./pages/productos/EditarProductos";
import EditarCliente from "./pages/clientes/EditarCliente";
import FormularioClientes from "./pages/clientes/FormularioClientes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Informes" element={<Informes />} />
          <Route path="Productos" element={<Productos />} />
          <Route path="NuevoCliente" element={<NuevoCliente />} />
          <Route path="AgregarProductos" element={<AgregarProductos />} />
          <Route path="EditarEliminar/" element={<EditarEliminar />} />
          <Route path="EditarProductos/:id" element={<EditarProductos />} />
          <Route path="FormularioClientes" element={<FormularioClientes />} />
          <Route path="EditarCliente/:id" element={<EditarCliente />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
