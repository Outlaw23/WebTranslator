import Navbar from "./navbar/Navbar.jsx";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div className="layout">

            <Navbar />

            <main className="content">
                {children}
            </main>

            <Footer />

        </div>
    );
}

export default Layout;