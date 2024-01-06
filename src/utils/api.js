import axios from "axios";

const BASE_URL='https://api.themoviedb.org/3';
const headers={
    Authorization: 'bearer '+'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTgyOTIwZTRlNDkxMjk4NjFhNWI3YWY5YmU2NjcwNSIsInN1YiI6IjY1OTY0MDkxMGU2NGFmNDVlYjhjMWIwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VfBAERdDj8rzlYdbZamJY70ej3SOwsXir0-WCyprpJc',
}

export const fetchDataFromApi=async (url, params)=>{
  try{
      const {data}=await axios.get(BASE_URL + url,{
        headers,
        params 
      })
      return data;
  }
  catch(err)
  {
     console.log(err)
     return err;
  }
}