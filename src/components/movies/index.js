import './movies.css';

const Movies = ({title, items}) => {

  return (
    <div>
      <h2>{title}</h2>
      <div className="movieRow--listerea">
        {items.results.length > 0 && items.results.map((item, key) => (
          <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
        ))}
      </div>
    </div>
  )
}

export default Movies;