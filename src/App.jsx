import React from 'react';
import { movies } from './sahteVeri.js';
import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import FilmListesi from './components/FilmListesi';
import Film from './components/Film';
export default function App() {
  const [savedFilm, setSavedFilm] = useState([]);
  const [filmList, setFilmList] = useState(movies);
  /* Görev: 1
  kaydedilmiş filmler ve film listesi için 2 tane state tanımlayın.
  film listesini sahteVeri'den alın.
  */
  const KaydedilenlerListesineEkle = (movie) => {
    const kaydedilen = savedFilm.find((film) => film.id === movie.id);

    if (!kaydedilen) {
      setSavedFilm([...savedFilm, movie]);
    } else {
    }

    /* Görev: 2
    kaydedilmiş film listesine eklemek için bir click handle fonksiyonu yazın.
    aynı filmi 2. kez eklememeli.
    Kaydet butonunun olduğu component'e prop olarak gönderin.
    */
  };

  return (
    <div>
      <KaydedilenlerListesi list={savedFilm} />
      {
        /* 
      Görev 3: 2 adet route tanımlayın.
      1. route '/' olacak ve FilmListesi component'ini yükleyecek ve buraya film listesini prop olarak yollayacak.
      2. route '/filmler/' parametresinden sonra 'id' parametresini alacak  (örnek: '/filmler/2', '/filmler/3' id dinamik olacak). Bu route 'Film' bileşenini yükleyecek.
      */
        <Switch>
          <Route exact path="/">
            <FilmListesi movies={filmList} />
          </Route>
          <Route path="/filmler/:id">
            <Film
              movies={filmList}
              kaydedilenFilm={KaydedilenlerListesineEkle}
            />
          </Route>
        </Switch>
      }
    </div>
  );
}
