import React from "react";

const SearchResult = (props) => {
  return (
    <div className="text-center">
      <h3>Title: {props.title}</h3>
      <img
        src={props.src}
        alt={props.title}
        className="img-fluid"
        style={{ margin: "0 auto" }}
      />
      <h3>Director(s): {props.director}</h3>
      <h3>Genre: {props.genre}</h3>
      <h3>Released: {props.released}</h3>
    </div>
  );
};

export default SearchResult;
