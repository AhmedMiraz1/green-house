import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import {
  MdAnnouncement,
  MdApartment,
  MdCardMembership,
  MdPayment,
  MdPayments,
} from "react-icons/md";
import { RiAdminFill, RiCoupon2Fill } from "react-icons/ri";
import useAdmin from "../hooks/useAdmin";
import { PiBuildingApartment } from "react-icons/pi";
import UseMember from "../hooks/UseMember";
import { TfiAnnouncement } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  const [isMember] = UseMember();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen  bg-blue-500">
        <ul className="menu p-4 uppercase text-white">
          {isAdmin && (
            <>
              {/* admin links */}
              <li>
                <NavLink
                  to="/dashboard/admin-profile"
                  className={({ isActive }) => isActive && "text-green-500  "}
                >
                  <RiAdminFill />
                  Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-members"
                  className={({ isActive }) => isActive && "text-green-500  "}
                >
                  <MdCardMembership />
                  Manage Members
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/make-announcement"
                  className={({ isActive }) => isActive && "text-green-500  "}
                >
                  <MdAnnouncement />
                  Make announcement
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/agreement-requests"
                  className={({ isActive }) => isActive && "text-green-500  "}
                >
                  <PiBuildingApartment />
                  Agreement requests
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-coupons"
                  className={({ isActive }) => isActive && "text-green-500  "}
                >
                  <RiCoupon2Fill />
                  Manage coupons
                </NavLink>
              </li>
            </>
          )}

          {isMember && (
            <>
              <li>
                <NavLink
                  to="/dashboard/member-profile"
                  className={({ isActive }) => isActive && "text-green-500  "}
                >
                  <CgProfile />
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/make-payment"
                  className={({ isActive }) => isActive && "text-green-500  "}
                >
                  <MdPayment />
                  Make payment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/payment-history"
                  className={({ isActive }) => isActive && "text-green-500  "}
                >
                  <MdPayments />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/announcements"
                  className={({ isActive }) => isActive && "text-green-500  "}
                >
                  <TfiAnnouncement />
                  Announcements
                </NavLink>
              </li>
            </>
          )}
          {!isAdmin && !isMember && (
            <>
              {/* // user links */}

              <li>
                <NavLink
                  to="/dashboard/my-profile"
                  className={({ isActive }) => isActive && "text-green-500  "}
                >
                  <ImProfile />
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/announcements"
                  className={({ isActive }) => isActive && "text-green-500  "}
                >
                  <TfiAnnouncement />
                  Announcements
                </NavLink>
              </li>
            </>
          )}

          {/* common links  */}

          <div className="divider text-orange-500 "></div>

          <li>
            <NavLink to="/">
              <FaHome />
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
