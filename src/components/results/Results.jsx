import React from "react";
import "./results.css";

function Results({ results }) {
  if (!results || results.length === 0) {
    return <div className="no-results">No results found</div>;
  }

  return (
    <>
      <div className="results">
        {results.map((result, index) => (
          <div key={index} className="result-card">
            <video controls width="300" height="200">
              <source
                src={result.video || "placeholder-video-url"}
                type="video/mp4"
              />
            </video>
            <h2>
              {" "}
              <span>Heading :</span> {result.heading || "No Title"}
            </h2>
            <div className="tags">
              <span>tag : </span>
              {result.tags &&
                result.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Results;
