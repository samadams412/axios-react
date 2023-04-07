import React from "react";

const SearchResult = (props) => {
    console.log(props);
  return (
    <div className="text-center">
      <img
        src={props.src}
        alt={props.title}
        className="img-fluid"
        style={{ margin: "0 auto", borderRadius: '5px' }}
      />
      <p><strong>Director(s):</strong> {props.director}</p>
      <p><strong>Genre:</strong> {props.genre}</p>
      <p><strong>Released:</strong> {props.released}</p>
      <p><strong>Run-time:</strong> {props.runtime}</p>
    </div>
  );
};

export default SearchResult;
