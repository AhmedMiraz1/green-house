import { Outlet } from "react-router-dom";
import Navbar from "../pages/shard/Navbar";

const MainLayout = () => {
  return (
    <div className="font-display "> 
    <div className="container  mx-auto shadow-md  bg-fixed rounded-b-md">
    <Navbar/>
    </div>
     <div className=" container  mx-auto  min-h-[calc(100vh-337px)]">
     <Outlet/>
     </div>
     
  </div>
  );
};

export default MainLayout;
