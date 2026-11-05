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
import ProtectedRoute from "./components/ProtectedRoutes";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user } = useAuth();
  return (
    <>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to="/dashboard" replace /> : <Loginlanding />
          }
        />
        <Route
          path="/login/admin"
          element={
            user ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Loginform
                role="admin"
                title="Admin Portal"
                subtitle="Sign in to manage the oraganization"
              />
            )
          }
        />
        <Route
          path="/login/employee"
          element={
            user ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Loginform
                role="employee"
                title="Employee Portal"
                subtitle="sign in to access your account"
              />
            )
          }
        />
 <Route element={<ProtectedRoute />}>
  <Route element={<Layout />}>
    <Route path="/attandance" element={<Attendance />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/employees" element={<Employees />} />
    <Route path="/leave" element={<Leave />} />
    <Route path="/payslip" element={<Payslip />} />
    <Route path="/payslipprint" element={<PayslipPrint />} />
    <Route path="/setting" element={<Setting />} />
  </Route>
</Route>

        <Route path="/print/playslip/:id" element={<PayslipPrint />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
};

export default App;
