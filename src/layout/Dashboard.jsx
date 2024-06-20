import { BiMenu } from "react-icons/bi";
import { FaAd, FaBook, FaCalendar, FaCartPlus,  FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { FaMoneyCheckDollar} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { ImProfile } from "react-icons/im";
import { MdApartment } from "react-icons/md";


const Dashboard = () => {

    const  [isAdmin ]= useAdmin()

    return (
         <div className="flex">
      <div className="w-64 min-h-screen  bg-blue-500">
        <ul className="menu p-4 uppercase text-white">


        {/* {
            isAdmin ? <> */}
            {/* admin links */}
            <li>
            <NavLink to="/dashboard/admin-home">
                <FaHome/>
              admin home
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
          
            
            
            {/* </> :

            // user links
            <> */}
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
          <li>
            <NavLink to="/dashboard/payment-history">
            <FaMoneyCheckDollar />
            Payment history
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
                <FaCartPlus/>
             {/* ({cart.length} )My cart */}
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
          </li>
            {/* </>
          } */}
          
            
            
          

           
          
           
         


          {/* common links  */}

          <div className="divider text-white"></div>

          <li>
            <NavLink to="/">
                <FaHome/>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/apartment">
            <MdApartment />
             Menu
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