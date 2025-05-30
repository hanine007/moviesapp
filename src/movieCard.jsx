 import React from "react";
const MovieCard = ({moviee})=>{
    return(
      
        <div className="movie">
        <div>
          <p>{moviee.Year}</p>
        </div>
        <div>
          <img src={moviee.Poster!=="N/A"?moviee.Poster:'https://via.placeholder.com/400'} alt="" />
        </div>
        <div>
          <span>{moviee.Type}</span>
          <h3>{moviee.Title}</h3>
        </div>
    
    
      </div>
  
    )

}
export default MovieCard; 
