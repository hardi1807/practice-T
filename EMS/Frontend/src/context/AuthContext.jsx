
import React, { createContext, useContext, useState } from "react";
import { authUsers } from "../assets/data";

// Create authentication context
const AuthContext = createContext();

// Auth provider
export const AuthProvider = ({ children }) => {

  // Get logged-in user from localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("emsUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Login function
  const login = (email, password, role) => {

    const matchedUser = authUsers.find(
      (item) =>
        item.email === email &&
        item.password === password &&
        item.role === role
    );

    if (!matchedUser) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    // Do not store password in logged-in user data
    const loggedInUser = {
      id: matchedUser.id,
      email: matchedUser.email,
      role: matchedUser.role,
      firstName: matchedUser.firstName,
      lastName: matchedUser.lastName,
      image: matchedUser.image,
    };

    setUser(loggedInUser);

    localStorage.setItem(
      "emsUser",
      JSON.stringify(loggedInUser)
    );

    return {
      success: true,
    };
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("emsUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
