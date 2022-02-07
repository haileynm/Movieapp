import { useEffect, useState } from 'react';
import Movie from './Movie.js';


function Home() {
  //render again
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  
  useEffect(() => {
    getMovies();
  }, []);

  return ( 
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {/* movies 배열에서 변형되서 나온 걸 각각의 movie에 적용*/}
          {movies.map((movie) => (
            // props로써 component로 넘겨 component들이 사용하게 하기
            <Movie 
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image} 
              title={movie.title} 
              summary={movie.summary}
              genres={movie.genres}/>
          ))}
        </div>
      )}
    </div>
  );
}




export default Home;