import { BiMenu } from "react-icons/bi";
import {  FaBook, FaCalendar,   FaHome,  FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";
import { ImProfile } from "react-icons/im";
import { MdApartment } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

    const  [isAdmin] = useAdmin() 

    return (
         <div className="flex">
      <div className="w-64 min-h-screen  bg-blue-500">
        <ul className="menu p-4 uppercase text-white">


       
           {
            isAdmin ? 
            <>
            {/* admin links */}
            <li>
            <NavLink to="/dashboard/admin-home">
                <RiAdminFill/>
              Admin Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-members">
                <FaUtensils/>
                Manage Members
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-items">
            <BiMenu />
            manage items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-bookings">
                <FaBook/>
             Manage bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/all-users">
                <FaUsers/>
                all users
            </NavLink>
          </li>
            </>
            :
            <>
             
          
            
            
          

            {/* // user links */}
           
            <li>
            <NavLink to="/dashboard/my-profile">
                <ImProfile/>
                My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/announcements">
                <FaCalendar/>
                Announcements
            </NavLink>
          </li>
            </>
           }









          {/* <li>
            <NavLink to="/dashboard/payment-history">
            <FaMoneyCheckDollar />
            Payment history
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
                <FaCartPlus/>
             
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
                <FaAd/>
             Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
                <FaList/>
              My Booking
            </NavLink>
          </li> */}
           
          
            
            
          

           
          
           
         


          {/* common links  */}

          <div className="divider text-orange-500 "></div>

          <li>
            <NavLink to="/">
                <FaHome/>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/apartment">
            <MdApartment />
            Apartment
            </NavLink>
          </li>
          
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
    );
};

export default Dashboard;