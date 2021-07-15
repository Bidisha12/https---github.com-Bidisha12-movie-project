import axios from "axios";

export function getUserRequest() {
 return axios.request({
  method: "get",
  url: "https://jsonplaceholder.typicode.com/usershttps://developers.themoviedb.org/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63",
 });
}
