import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie( {id, coverImg, title, summary, genres} ) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul>
        {/* genres는 배열이므로 map으로 한번 더 감쌈 => 각각의 genres에 대해 map 적용 */}
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  id:PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  //string을 가진 array
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;