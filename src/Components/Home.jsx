import React, { useState, useEffect } from 'react';
import "../Style/Home.css";
import MovieCard from "./MovieCard.jsx";
import serachIcon from "../assets/search.png";

const Home = () => {
    const [Moviedata, setMoviedata] = useState([]);
    const [serach, setserach] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const submit = () => {
        getmovies();
    }

    const getmovies = async () => {
        try {
            setIsLoading(true);
            setErrorMessage(null); // Reset error message
            const searchQuery = serach === "" ? "Batman" : serach;
            const datas = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=5c9ce060&s=` + searchQuery);
            const Datas = await datas.json();
            if (Datas.Response === "True") {
                setMoviedata(Datas.Search);
            } else {
                setMoviedata([]); // Reset movie data
                setErrorMessage("Wrong Input"); // Set error message
            }
        } catch (error) {
            console.log(error);
            setErrorMessage("An error occurred while fetching data."); // Set error message for other errors
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        document.title = "MovieHub | Home";
        getmovies();
    }, []);

    return (
        <>
            <div className="search">
                <input
                    type="text"
                    placeholder='Search the movie'
                    className='searchInput'
                    value={serach}
                    onChange={(e) => {
                        setserach(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            getmovies();
                        }
                    }}
                />
                <img className='searchIcon' src={serachIcon} alt="Search" onClick={submit} />
            </div>
            <div className="cards">
                {isLoading ? (
                    <p>Loading...</p>
                ) : errorMessage ? (
                    <p>{errorMessage}</p> // Display error message
                ) : (
                    Moviedata.map((i, index) => (
                        <MovieCard id={index} Title={i.Title} Poster={i.Poster} Year={i.Year} Type={i.Type} Name={serach} />
                    ))
                )}
            </div>
        </>
    )
}

export default Home;
