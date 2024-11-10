import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Pages";
// import bell from "../Images/bell.svg";
// import sub from "../Images/sub.svg";
// import cap from "../Images/comp.PNG"
// import cust from '../Images/cust.svg'
// import dash from '../Images/dash.svg'
// import person from '../Images/Vector.svg'
// import log from '../Images/log.svg'
import logoimg from '../Utils/Images/BrandLogo.png'
const Sidebar = () => {
  // useEffect(() => {
  //   getResInfo()


  const [sideMenu, setSideMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const toggleSideMenu = () => {
    setSideMenu(!sideMenu); // Toggle the state of sideMenu
  };
  const array = ["Hello 1", "Hello 2", "Hello 3"];
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };
  return (
    <>
      <div
        className="bg-[#282b8f]"
        style={{
          position: "fixed",
          display: "block",
          width: "100vw",
          zIndex: 100,
        }}
      >
       <h1 className="text-center text-2xl font-bold pt-4  text-white">ADMIN PANEL</h1>
        <nav className="bg-[white]  border-gray-300  ">
          <div className="flex justify-between items-center px-9 h-16 ">
            <button
              id="menu-button"
              className="lg:hidden"
              onClick={toggleSideMenu}
            >
              <i className="fa fas fa-bars text-cyan-500 text-lg"></i>
            </button>
            <div className="">
            <img
              src={logoimg}
              alt="Alma Better"
              className="h-16 w-auto"

            />
            </div>

            {/* <div className=" pt-2 pb-2 pl-3 pr-3 rounded-md">
              <div
                className=" nav-link form-control flex justify-center items-center"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div>
                </div>
                <div
                  className="bg-[#2F4CDD] pt-2 pb-2 pl-4 pr-4 rounded-md absolute bottom-7 right-7 h-8"
                  style={{ opacity: 0.0669 }}
                ></div>
                <div>
                  <p
                    style={{ color: "#2F4CDD" }}
                    className="absolute bottom-8 text-lg right-10"
                  >
                    {array.length}
                  </p>
                </div>
              </div>
              <ul className="dropdown-menu ">
                {array.map((item, index) => {
                  return (
                    <div key={index} className="pl-2 pr-2">
                      <li className="border-b  mt-2 w-full">{item}</li>
                    </div>
                  );
                })}
              </ul>
            </div> */}
          </div>
        </nav>
        <div
          id="sidebar"
          className={`lg:block ${sideMenu ? "" : "hidden"
            } bg-gray-50 w-64 h-screen fixed rounded-none border-none z-10`}
        >
          <div className="space-y-4 pl-2 mt-4">
            <NavLink
              to="/mainpage"
              onClick={() => {
                setSelectedTab(0);
              }}
              aria-label="dashboard"
              className={({ isActive }) =>
                isActive
                  ? "relative px-4 py-3 h-10 flex items-center space-x-4 text-white bg-[#282b8f] rounded-xl no-underline"
                  : "relative px-4 py-3 h-10 flex items-center space-x-4 text-black no-underline"
              }
            >
              {/* <img src={dash} alt="" /> */}
              <span className="-mr-1 font-medium">DashBoard</span>
            </NavLink>



            <NavLink
              to="/customize"
              onClick={() => {
                setSelectedTab(1);
              }}
              className={({ isActive }) =>
                isActive
                  ? "relative px-4 py-3 h-10 flex items-center space-x-4 text-white bg-[#282b8f] rounded-xl no-underline"
                  : "relative px-4 py-3 h-10 flex items-center space-x-4 text-black no-underline"
              }
            >
              {/* <img src={person} alt="" /> */}
              <span>Customize</span>
            </NavLink>

            <NavLink
              to="/customise-categories"
              onClick={() => {
                setSelectedTab(1);
              }}
              className={({ isActive }) =>
                isActive
                  ? "relative px-4 py-3 h-10 flex items-center space-x-4 text-white bg-[#282b8f] rounded-xl no-underline"
                  : "relative px-4 py-3 h-10 flex items-center space-x-4 text-black no-underline"
              }
            >
              {/* <img src={person} alt="" /> */}
              <span>Category</span>
            </NavLink>

            <NavLink
              to="/sub-category"
              onClick={() => {
                setSelectedTab(1);
              }}
              className={({ isActive }) =>
                isActive
                  ? "relative px-4 py-3 h-10 flex items-center space-x-4 text-white bg-[#282b8f] rounded-xl no-underline"
                  : "relative px-4 py-3 h-10 flex items-center space-x-4 text-black no-underline"
              }
            >
              {/* <img src={person} alt="" /> */}
              <span>Sub-Category</span>
            </NavLink>
            <NavLink
              to="/TemplateSelection"
              onClick={() => {
                setSelectedTab(1);
              }}
              className={({ isActive }) =>
                isActive
                  ? "relative px-4 py-3 h-10 flex items-center space-x-4 text-white bg-[#282b8f] rounded-xl no-underline"
                  : "relative px-4 py-3 h-10 flex items-center space-x-4 text-black no-underline"
              }
            >
              {/* <img src={person} alt="" /> */}
              <span>Select-Template</span>
            </NavLink>


            <NavLink
              onClick={() => {
                localStorage.removeItem('token')
                window.location.reload()
                navigate("/")
              }}
              className={`relative px-4 py-3 h-10 flex items-center space-x-4 cursor-pointer  ${selectedTab === 5 ? "text-black" : "text-black no-underline"
                } ${selectedTab === 5 ? "bg-[#282b8f] rounded-xl" : ""} `}
            >
              {/* <img src={log} alt="" /> */}
              <span>Logout</span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* {selectedTab === 0 && <Dashboard/>}
    {selectedTab === 1 && <Orders/>} */}
    </>
  );
};

export default Sidebar;
