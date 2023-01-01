import {createContext} from "react";

export const AppThemeContext = createContext({});

export const AppThemeProvider = ({children, theme}) => {
    return (
        <AppThemeContext.Provider value={theme}>
            {children}
        </AppThemeContext.Provider>
    )
}
