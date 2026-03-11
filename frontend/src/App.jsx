import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/home/Home";
// import Hado from "./pages/Hado";
// import HadoR from "./pages/HadoR";
// import Learn from "./pages/Learn";
// import Info from "./pages/Info";

function App() {
    return (
        <BrowserRouter>
            <Layout>

                <Routes>
                    <Route path="/" element={<Home />} />
                    {/*<Route path="/hado" element={<Hado />} />*/}
                    {/*<Route path="/hador" element={<HadoR />} />*/}
                    {/*<Route path="/learn" element={<Learn />} />*/}
                    {/*<Route path="/info" element={<Info />} />*/}
                </Routes>

            </Layout>
        </BrowserRouter>
    );
}

export default App;