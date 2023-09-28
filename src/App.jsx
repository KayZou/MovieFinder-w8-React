import React, { useState, useEffect } from "react";
import MovieCard from "./Components/MovieCard";
import "./App.css"; // Import the CSS file

const API_URL = "https://www.omdbapi.com?apikey=2d6fca8d";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        searchMovies("");
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };

    return (
        <div>
            <h1 className="movie-land-title">Movie Finder</h1>
            <div className="search-container">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for movies"
                    type="text"
                    className="search-input"
                />
                <button
                    className="search-button"
                    onClick={() => searchMovies(searchTerm)}
                >
                    Search
                </button>
            </div>

            <div className="movie-list">
                {movies?.length > 0 ? (
                    movies.map((movie, i) => (
                        <div className="movie-card" key={i}>
                            <MovieCard movie={movie} />
                        </div>
                    ))
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
