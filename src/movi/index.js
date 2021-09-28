

import Moviscard from '../card'
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";


function Movis() {

  
const [data, setData]= useState([
  {
    name:"Diwaly",
    description:"1 Some quick function of a card"
  },
  {
    name:"Sirf Tum",
    description:"2 Some quick function of a card"
  },
  {
    name:"Dil Ruba",
    description:"3 Some quick function of a card"
  },
  {
    name:"khuda or Muhabat",
    description:"4 Some quick function of a card"
  },
]);
 let schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
  });

let [name,setName] = useState("")
let [description,setDescription] = useState("")
let [editedmovi,setEditedmovi]=useState(null);

//add movi
 let handlAddmov=(values)=>{

    let dummyData=[...data];
    dummyData.push({
       name: values.name,
       description: values.description,
      })
    setData(dummyData);
    setName("");
    setDescription("");
 };

 const formik = useFormik({
    enableReinitialize: true,
    initialValues: editedmovi
      ? {
          name: editedmovi.name,
          description: editedmovi.description,
        }
      : {
          name: "",
          description: "",
        },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
       
      if (editedmovi) {
        handleUpdate(values);
      } else {
        handlAddmov(values);
      }
    },
  });

 
 let onEdit=(item) => {
   setEditedmovi(item);
      setName(item.name);
      setDescription(item.description);
 };
 let handleUpdate = () => {
   let dummyData=[...data];
   let index = dummyData.findIndex (item => item.name === editedmovi.name);
   if (dummyData !== -1){
      dummyData[index]={
        name, 
        description,
      };
      setData(dummyData);
      setName('');
      setDescription('');
      setEditedmovi(null);
   };
 }
 let onDell= (index)  => {
     let dummyData=[...data];
     dummyData.splice(index,1);
     setData(dummyData);
   };

  
  

  return (




  
     
  <div className="App">
  <form onSubmit={formik.handleSubmit}>

     <div class="input-group mb-4">
     <div class="input-group-prepend">
    <label class="input-group-text" id="inputWarning" 
    style={{color:"#369EEC"}}>Movie Name: </label>
   </div>
  <input  type="text" class="form-control" placeholder="Name" 
  aria-label="name" 
  aria-describedby="basic-addon1"
  value ={formik.values.name}
  name="name"
  onChange={formik.handleChange}></input>
  </div>
  <div>{formik.errors.name}</div>
  
 
 
   <div class="input-group mb-4">
   <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon2" style={{color:"#369EEC"}}>Descriptions:</span>
  </div>   
  <input type="text" class="form-control" placeholder="Description" 
  aria-label="description" 
  aria-describedby="basic-addon2"
    value={formik.values.description}
    name = "description"
    onChange={formik.handleChange}></input>
    </div>
    {formik.errors.description && <div>{formik.errors.description}</div>}
 
 
 
        <button type="submit" className="btn btn-primary">
          {editedmovi ?  "Update Movie" : "Add Moive"}
        </button>
           
  </form>
  

   
                    
      <div className="row mt-2 justify-content-between">
      
        {
          data.map((movis,index) => ( 
          <Moviscard 
          index={index} 
          name={movis.name}
          description={movis.description}
          available="yes" 
          handlonEdit={(value) => onEdit(value)}
          handelonDell={(value) => onDell(value)}

          ></Moviscard>
          ))
        }
        </div>
      </div>
       
       
       
  )}

export default Movis;