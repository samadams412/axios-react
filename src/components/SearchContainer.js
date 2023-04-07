import React from "react";
import { useEffect, useState } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";
import Container from "./Container";
import Row from "./Row";
import Card from "./Card";
import Col from "./Col";

const SearchContainer = () => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState("");

  const searchProduct = (query) => {
    API.search(query)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    searchProduct("Lord of the Rings");
  }, []);

  const handleInputChange = (e) => setSearch(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchProduct(search);
  };

  const {
    Title = "",
    Poster = "",
    Director = "",
    Genre = "",
    Released = "",
    Runtime = ""
  } = result;

  return (
    <Container>
      <Row>
        <Col size="md-6">
          <Card heading={Title || 'Search a movie to Begin'}>
            {Title ? (
              <SearchResult
              title={Title}
              src={Poster}
              director={Director}
              genre={Genre}
              released={Released}
              runtime={Runtime}
            />
            ) : (
              <h3>No Results to Display</h3>
            )}
            
          </Card>
        </Col>
        <Col size="md-4">
          <Card heading="Search">
            <SearchForm
              value={search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchContainer;
