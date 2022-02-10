import React, { useState, useEffect } from 'react';
import instance from './axios';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";


function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("");

    //A snippet code which runs based on a specific condition

    //useEffct is a function which has two arguments. one a function and other one is a square bracket.
    //if we leave the second argument empty then useEffect will run once, only on page load. 
    //otherwise it will run when ever the value inside the square bracket changegs.
    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl);
            // console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    // console.log(movies);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");

        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
        }
    };
    return (
        <div className='row'>
            {/*title*/}

            <h2>{title}</h2>

            <div className='row__posters'>
                {/*container with several posters*/}
                {movies.map((movie) => (

                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                ))}

            </div>
            {trailerUrl && < YouTube videoId={trailerUrl} opts={opts} />}

        </div>
    )
}

export default Row
