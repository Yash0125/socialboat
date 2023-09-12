import React, { useCallback, useEffect, useState } from "react";
import "./header.css";
import Results from "../results/Results";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const fetchVideos = useCallback(async () => {
    try {
      const response = await fetch(
        `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${searchQuery}&numResults=10`
      );
      const data = await response.json();
      setResults(data.results);
      console.log(results);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  }, [searchQuery,results]);
  
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      fetchVideos();
    } else {
      setResults([]);
    }
  }, [searchQuery, fetchVideos]);
  

  return (
    <>
      <header className="header">
        <div className="logo"> SocialBoat </div>
        <input
          type="text"
          placeholder="Search for videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img
          src="https://ik.imagekit.io/socialboat/tr:w-800,c-maintain_ratio,fo-auto/Screenshot_2022-11-18_at_6.58_1_9uEHwjAKg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668867345853"
          alt="Profile"
          className="profile-image"
        />
      </header>
      <h1 className="search-text">
        Search for : <span className="search">{searchQuery}</span>
      </h1>
      {searchQuery === "" ? (
        <div className="results">No results found</div>
      ) : (
        <Results results={results} />
      )}
    </>
  );
};

export default Header;
