import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function Film(props) {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  useEffect(() => {
    const filmler = props.movies.find((flm) => flm.id === Number(id));
    setMovie(filmler);
  }, []);
  /* Görev 5: Film component'i yüklendiğinde id'yi params'dan almalı ve sahteVeri'deki movies içinden ilgili id'li filmi bulup getirmeli */

  if (!movie) {
    return <div>Film bilgisi yükleniyor...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <p>Film ID: {id}</p>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map((star) => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>

      {/* Görev 6: kaydet butonu kaydedilenler state'ine filmi eklemeli */}
      <div className="save-button" onClick={() => props.kaydedilenFilm(movie)}>
        Kaydet
      </div>
    </div>
  );
}
