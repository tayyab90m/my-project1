import React, { useContext } from "react";
import {Route, Redirect } from 'react-router-dom';
import { RootContext } from  '../Context';


const ProtectedRoute = ({ children, ...restProps }) => {
    let token = localStorage.getItem("token");
    return(
       
    <Route
    {...restProps}  
    render={() => {
        if (token) {
            return children;
        }else{
            return<Redirect to="/Login"/>;
        }
    }}
    /> 
    );
};
export default ProtectedRoute;