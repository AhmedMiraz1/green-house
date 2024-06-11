import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shard/Navbar";
import Footer from "../pages/shard/Footer";

const MainLayout = () => {
  const location = useLocation()
   
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
  return (
    <div className="font-display "> 
    <div className="container  mx-auto shadow-md  bg-fixed rounded-b-md">
    {noHeaderFooter || <Navbar/>}
    </div>
     <div className=" container  mx-auto  min-h-[calc(100vh-580px)]">
     <Outlet/>
     </div>
     {noHeaderFooter ||  <Footer/>}
  </div>
  );
};

export default MainLayout;
