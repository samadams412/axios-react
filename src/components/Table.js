import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Table = () => {
    const [data, setData] = useState([]);
 
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
        console.log(response.data);
        setData(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }, [])
  
    const arr = data.map((data, index) => {
      return (
        <tr>
          <td>{data.userId}</td>
          <td>{data.id}</td>
          <td>{data.title}</td>
        </tr>
      )
    })
  
    return (
      <div className="App">
        <h1>
          Axios with React
        </h1>
        <table>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
          </tr>
         {arr}
        </table>
      </div>
    );
}

export default Table;