
import React, { useEffect, useState } from "react";

import {
  adminDahboardData,
  employeeDashboardData,
} from "../assets/data";

import { useAuth } from "../context/AuthContext";

import Admindashboard from "../components/Admindashboard";
import Employeedashboard from "../components/Employeedashboard";
import Loading from "../components/Loading";

const Dashboard = () => {
  const { user } = useAuth();
console.log("Logged in user:", user);
console.log("User role:", user?.role);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setData(null);

    const timer = setTimeout(() => {
console.log("Dashboard useEffect running");
      if (user?.role === "admin") {
        setData(adminDahboardData);
      } 
      else if (user?.role === "employee") {
        setData(employeeDashboardData);
      }

      // IMPORTANT: Stop loading
      setLoading(false);

    }, 500);

    return () => clearTimeout(timer);

  }, [user]);

  if (loading) {
    return <Loading />;
  }

  if (!user || !data) {
    return <div>Unable to load dashboard.</div>;
  }

  return user.role === "admin" ? (
    <Admindashboard data={data} />
  ) : (
    <Employeedashboard data={data} />
  );
};

export default Dashboard;
