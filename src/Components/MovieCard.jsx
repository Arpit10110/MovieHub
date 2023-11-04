import React from 'react'
import "../Style/MovieCard.css"
const MovieCard = ({Title, Poster,Year,Type,Name}) => {
  return (
    <>
    <div className="MovieCard">
    <img src={Poster} alt={Title} />
    <div className="MovieCont">
    <h3>Title:{Title}</h3>
    <h3>Year: {Year}</h3>
    <h3>Type:{Type}</h3>
    <div className="link">
    <a className='downloadLink' href={`https://yomovies.watch/?s=+${Name}` } target="_blank">Download Now</a>
    </div>
    </div>
    </div>
    </>
  )
}

export default MovieCard