import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [position, setPosition] = useState("");

  return (
    <AuthContext.Provider value={{ position, setPosition }}>
      {children}
    </AuthContext.Provider>
  );
}
