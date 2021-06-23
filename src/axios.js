import axios from "axios";
// base url to make requests to the  The Movie DataBase(tmbd)
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;

// https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>
