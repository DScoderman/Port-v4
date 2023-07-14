import { Outlet} from "react-router-dom";
import FooterComponent from "../Components/Footer";
import HeaderComponent from "../Components/Header";

const Layout = () => {
    return (
      <>
        <HeaderComponent/>
        <Outlet />
        <FooterComponent/>
      </>
    )
  };
  
  export default Layout;