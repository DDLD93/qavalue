import { createContext, useState, useEffect } from "react";

export const StateContext = createContext();

export default function StateProvider({ children }) {
    const [darkMode, setdarkMode] = useState(JSON.parse(localStorage.getItem("theme"))||true)

    const toggleDarkMode = () => {
      setdarkMode(!darkMode)
      localStorage.setItem("theme",darkMode)
    }
useEffect(() => {
}, [darkMode])

  
    
    

const context = {
    darkMode,
    toggleDarkMode
}
    return <StateContext.Provider
        value={context}>
        {children}
    </StateContext.Provider>;
}