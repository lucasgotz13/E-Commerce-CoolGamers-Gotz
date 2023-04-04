import Footer from "../Footer";
import Navbar from "../Navbar";
import { Outlet as Page } from "react-router-dom";

function Layout() {
    return (
        <main>
            <Navbar />
            <Page />
            <Footer />
        </main>
    );
}

export default Layout;
