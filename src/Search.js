import React from "react";


const Search = (props) => {

   
    return (
        <div className="search-div">
        <input className="search-bar" onChange={props.selectTown} type="search" placeholder="Search town or city" />
        </div>
        )
}
      

export default Search;