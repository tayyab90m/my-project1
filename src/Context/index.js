import React, { useState } from "react";

export const RootContext = React.createContext();

export default ({children}) => {
    const [user , setUser ] =useState(null);
    const defaultValue={
        user,
        setUser,
    };
    return(
    <RootContext.Provider value={defaultValue}>
    {children}
    </RootContext.Provider>);
};


