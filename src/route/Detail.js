import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams()
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)
    ).json();
  };

  //json -> state에 넣어서 영화별 상세 정보 확인 가능

  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;