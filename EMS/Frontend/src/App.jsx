import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";

import Loginlanding from "./pages/Loginlanding";
import Layout from "./pages/Layout";
import Attendance from "./pages/Attendance";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Leave from "./pages/Leave";
import Payslip from "./pages/Payslip";
import PayslipPrint from "./pages/PayslipPrint";
import Setting from "./pages/Setting";
import Loginform from "./components/Loginform";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<Loginlanding />} />
         <Route path="/login/admin" element={<Loginform role="admin" title="Admin Portal" subtitle="Sign in to manage the oraganization"/>} />
         <Route path="/login/employee" element={<Loginform role="employee" title="Employee Portal" subtitle="sign in to access your account"/>} />
    
        <Route element={<Layout />}>
          <Route path="/attandance" element={<Attendance />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslip" element={<Payslip />} />
          <Route path="/payslipprint" element={<PayslipPrint />} />
          <Route path="/setting" element={<Setting />} />
        </Route>

        <Route path="/print/playslip/:id" element={<PayslipPrint />} />

        <Route path="*" element={<Navigate to= "/dashboard" replace />} />
      </Routes>
    </>
  );
};


export default App;
