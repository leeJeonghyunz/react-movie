import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "../css/Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    // 영화 정보들을 받아온다.
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  console.log(movies);
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.body}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.wrapper}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              rating={movie.rating}
              runtime={movie.runtime}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
