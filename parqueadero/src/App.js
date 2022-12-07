import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "../src/assets/style/index.css"
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
