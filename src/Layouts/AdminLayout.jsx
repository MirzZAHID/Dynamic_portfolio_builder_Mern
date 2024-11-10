import React, { useEffect, useState } from "react";
import Sidebar from "../Admin/Sidebar";
import {useNavigate} from 'react-router-dom'

export default function AdminLayout({ children }) {
  const navigate = useNavigate()
  const [authToken, setToken] = useState(null);
  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setToken(token);
        return;
      } else {
        navigate("/");
      }
    };
    checkToken();
  }, []);
  return (
    <>
      {authToken && (
        <div>
          <Sidebar />
          <div>{children}</div>
        </div>
      )}
    </>
  );
}
