import React from "react";
import { useHistory } from "react-router";
import Moviscard  from "../card";
import {useParams} from  'react-router-dom';
const Moviedetail = ({ movie, index }) => {
    const {movieName} = useParams;
    console.log('params',movieName);
    return (
        <Moviscard
            index={index}
            name={movie.name}
            description={movie.description}
            available="yes"
            // handleonEdit={(value) => onEdit(value)}
            // handleonDelete={(value) => handleDelete(value)}
        ></Moviscard>

    );
};
export default Moviedetail;