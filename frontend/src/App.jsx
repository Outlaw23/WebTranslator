import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/home/Home";
import Hado from "./pages/hado/Hado";
import HadoR from "./pages/hadoR/HadoR";
import Learn from "./pages/learn/Learn";
import Info from "./pages/info/Info";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/public" element={<Home />} />
                    <Route path="/hado" element={<Hado />} />
                    <Route path="/hador" element={<HadoR />} />
                    <Route path="/learn" element={<Learn />} />
                    <Route path="/info" element={<Info />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;