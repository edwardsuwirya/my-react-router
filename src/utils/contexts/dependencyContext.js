import {createContext} from "react";

export const DepsContext = createContext({});

export const DepsProvider = ({children, ...services}) => {
    return (
        <DepsContext.Provider value={services}>
            {children}
        </DepsContext.Provider>
    )
}
