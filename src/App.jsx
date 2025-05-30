import React, { useEffect, useState } from "react";
import "./App.css";
import SearcheIcon from "./searche.svg";
import MovieCard from "./movieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Erreur lors de la récupération des films :", error);
      setMovies([]);
    }
  };

  useEffect(() => {
    searchMovies("avengers");
  }, []);

  return (
    <div className="movies">
      <h1>Movies</h1>

      {/* Barre de recherche */}
      <div className="search">
        <input
          type="text"
          placeholder="Search movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          name="searchMovie"
        />
        <img
          src={SearcheIcon}
          alt="search icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {/* Résultats */}
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} moviee={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
