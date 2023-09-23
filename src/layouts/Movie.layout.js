import React from "react";
 
//components
import MovieNavbar from "../Components/Navbar/movieNavbar.componet";

const MovieLayout = (props) => {
    return (
        <>
        <MovieNavbar />
        {props.children}
        </>
    );
};

export default MovieLayout;