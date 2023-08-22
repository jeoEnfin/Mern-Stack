import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";




function RootLayout() {
    return (
           <>
           <NavBar />
           <Outlet />
           </>
        );

}
export default RootLayout;