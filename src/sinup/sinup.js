import React, { useContext } from "react";
import "./sinup.css";
import * as yup from 'yup';
import {useHistory} from 'react-router-dom';
import {RootContext} from '../Context';
import { useFormik} from "formik";




let Login = () => {
   let login =(values)=>{
  alert(values);
  }

 const history = useHistory();
  const { user, setUser } = useContext(RootContext);

 let schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.number().required().positive().integer(),
  
});
  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit:(values)=>login(values),
    validationSchema: schema
 });
  return (
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <div class="fadeIn first">
    
            <img className="card-img-top" src="https://thumbs.dreamstime.com/b/login-icon-button-vector-illustration-isolated-white-background-127000574.jpg" alt="Log IN" />
          
        </div>

        
           
         <form onSubmit={formik.handleSubmit}
         
          onSubmit={() => {
            localStorage.setItem("token", "12345678");
            history.push("/");
            setUser({ name: "Tayyab", gender: "male"});
          }}>
          <input
            type="email"
            id="login"
            class="fadeIn second"
            name="email"
            placeholder="Email ID"
          />
          <input
            type="password" required
            id="login"
            class="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input type="submit" class="fadeIn fourth" value="Log In" />
        </form>

        <div id="formFooter">
          <a class="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
