import React from 'react'
import { useEffect, useState } from 'react'
import API from '../utils/API'
import SearchForm from './SearchForm'
import SearchResult from './SearchResult'
import Container from './Container'
import Row from './Row'

const SearchContainer = () => {
  
  const [result, setResult] = useState({});
  const [search, setSearch] = useState('');
 
  const searchProduct = (query) => 
    API.search(query)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));
  
    useEffect(() => {
      searchProduct('Lord of the Rings');
    },[])
  
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
    } = result
  
    return (
      
      <Container>
        <Row>
        <SearchForm
              value={search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
            <SearchResult
              title={Title}
              src={Poster}
              director={Director}
              genre={Genre}
              released={Released}
            />
        </Row>
      </Container>
      
        
     
    );
}

export default SearchContainer;