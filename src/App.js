import React,{ useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import Movies from './components/movies';
function App() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let movies = await Tmdb.getHomeList();
      setMovieList(movies);
    }
    loadAll();
  },[]);

  return (
    <div className="page">
      <section className="moviesList">
        {
          movieList.map((item, key) => (
            <Movies key={key} title={item.title} items={item.items} />
          ))
        }
      </section>

    </div>
  );
}

export default App;
