import React,{useContext} from 'react';
import { useHistory} from 'react-router-dom'
import {RootContext} from '../Context';
import "./layout.css"




const Layout = ({ children }) => {
const history = useHistory();
const {user} = useContext(RootContext);

    return (
<div class="sidenav"  onClick={()=>history.push('/')}>
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#clients">Clients</a>
  <a href="#contact">Contact</a>
   {user?.name}
   {user?.description}
{ children }
</div>
   
    )}
 export default Layout;