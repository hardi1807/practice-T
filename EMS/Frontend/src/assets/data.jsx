
// ================= DEMO LOGIN USERS =================

export const authUsers = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "admin123",
    role: "admin",
    firstName: "Admin",
    lastName: "User",
    image: "https://i.pravatar.cc/150?img=12",
  },

  {
    id: 2,
    email: "rahul.sharma@gmail.com",
    password: "employee123",
    role: "employee",
    firstName: "Rahul",
    lastName: "Sharma",
    image: "https://i.pravatar.cc/150?img=47",
  },
];



export const usersData = 
  {
    id: 1,
    firstName: "Rahul",
    lastName: "Sharma",
    email: "rahul.sharma@gmail.com",
    phone: "+91 9876543210",
    image: "https://i.pravatar.cc/150?img=12",
  };

 export const adminDahboardData = {
  role: "ADMIN",
  totalEmployees: 50,
  totalDepartments: 6,
  todayAttendance: 42,
  pendingLeaves: 5,
}


// ================= EMPLOYEE DASHBOARD DATA =================

export const employeeDashboardData = {
  role: "EMPLOYEE",
  employee: {
    id: 2,
    firstName: "Hardi",
    lastName: "Patel",
    email: "hardi@gmail.com",
    position: "Frontend Developer",
    department: "Development",
    image: "https://i.pravatar.cc/150?img=47",
  },

  presentDays: 22,

  pendingLeaves: 2,

  latestPayslip: {
    month: "October",
    year: 2026,
    basicSalary: 18000,
    allowances: 3000,
    deductions: 1000,
    netSalary: 20000,
    status: "Paid",
  },
};
