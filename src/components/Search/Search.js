import React from "react";
import MovieCard from "./MovieCard";
// import { apiKey } from "../../utils";
import useSearch from "./useSearch";
import "./Search.css";

const Search = () => {
  const apiKey = "a4e58d56fe8690c89ebed28c6816ff3f";
  const { query, searchResults, setQuery } = useSearch(apiKey);
  return (
    <main className="searchPage movieRows__container">
      <section>
        <input
          className="searchPage__searchBar"
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Title, character or genre"
        />
        <div className="searchPage__gallery">
          <div className="searchPage__container">
            {query
              ? searchResults.map((result) => (
                  <MovieCard
                    id={result.id}
                    key={result.id}
                    poster={result.backdrop_path}
                    title={result.title}
                  />
                ))
              : null}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Search;
