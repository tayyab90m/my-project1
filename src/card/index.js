
import React from 'react';
import './form.css'


const Moviscard = ({index,name,description,available,handlonEdit,handelonDell})=> {
    return(
    <div className="card" style={{width: "15rem"}}>
      <img className="card-img-top" src="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..." />
      <div className="card-body" style={{backgroundColor:"#6ECB6F"}}>
      <i class="fa fa-trash" style={{color:"#F50815"}} onClick={() =>handelonDell(index)} aria-hidden="true"></i>
        <h5 className="card-title">{name}.</h5>
        <p className="card-text">{description}.</p>
        <button onClick={() => handlonEdit({name,description})} className="btn btn-primary">Edit</button>
        <p className="card-text">{available}.</p>
        
        <a href="#" className="btn btn-success">Be Mine</a>
      </div>
    </div>
  );
}


export default Moviscard;