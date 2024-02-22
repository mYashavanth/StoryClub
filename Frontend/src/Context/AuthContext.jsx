import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [position, setPosition] = useState("");
  const [activeCategory, setActiveCategory] = useState("Slelect Category...");
  const [storyTitle, setStoryTitle] = useState("");



  return (
    <AuthContext.Provider
      value={{
        position,
        setPosition,
        activeCategory,
        setActiveCategory,
        storyTitle,
        setStoryTitle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
