import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";
import Runtime from "./Runtime";

function Movie({
  id,
  medium_cover_image,
  title,
  summary,
  genres,
  rating,
  runtime,
}) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.poster} src={medium_cover_image} alt={title} />
      <div className={styles.infoWrapper}>
        <h2>
          <Link className={styles.title} to={`/movie/${id}`}>
            {title}
          </Link>
        </h2>
        <div className={styles.movieDetail}>
          <p>⭐ Rating : {rating}</p>
          <Runtime runtime={runtime} />
          <p>🎬 Genres: {genres.join(", ")}</p>
        </div>
        <div className={styles.summary}>{summary ? summary : "No Summary"}</div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: Proptypes.number.isRequired,
  medium_cover_image: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  genres: Proptypes.string.isRequired,
};

export default Movie;
