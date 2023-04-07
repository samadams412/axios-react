import axios from "axios";

const search = async (query) =>
  axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${query}`);

export default { search };
