import { createContext, useState } from "react";

export const AppContext = createContext(null);

function AppProvider({ children }) {
    const [mealName, setMealName] = useState(null);

    const value = {
        mealName,
        setMealName
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;