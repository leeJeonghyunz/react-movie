import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // params를 꺼낼 수 있는 react Router의 기능
import styles from "../css/Detail.module.css";
import Runtime from "../components/Runtime";

function Detail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };

  console.log(movie);

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.body}>
      <div
        className={styles.background}
        style={{
          backgroundImage: `URL(
            ${movie.background_image}
          )`,
        }}
      ></div>
      <div className={styles.movieWrapper}>
        <div className={styles.wrapper_top}>
          <div className={styles.imgBox}>
            <img
              className={styles.posterImg}
              src={movie.medium_cover_image}
              alt={movie.title}
            />
          </div>
          <div className={styles.detailBox}>
            <p className={styles.title}>{movie.title}</p>
            <div className={styles.genres}>
              {movie.genres ? (
                <ul>
                  {movie.genres.map((genre) => (
                    <li>{genre}</li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className={styles.rating}>⭐ Rating : {movie.rating}</div>
            <Runtime runtime={movie.runtime} />
          </div>
        </div>
        <hr />
        <div className={styles.wrapper_bottom}>
          {movie.description_full ? movie.description_full : "No description"}
        </div>
      </div>
    </div>
  );
}

export default Detail;
