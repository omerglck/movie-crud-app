import { Link } from "react-router-dom";
const Card = ({ movie, index }) => {
  // const r = Number(movie.rating);  number method or "+"
  const r = +movie.rating;
  const color = r > 9 ? "blue" : r > 7.5 ? "green" : r > 5 ? "orange" : "red";
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="border shadow p-3 rounded-md hover:bg-gray-200 cursor-pointer transition max-sm:flex max-sm:gap-5"
    >
      <div className="relative">
        <img
          className="rounded w-full max-w-[450px] max-h-[300px] object-cover max-sm:max-h-[150px]"
          src={`https://picsum.photos/500/70${index}`}
          alt="poster"
        />
        <span
          style={{ backgroundColor: color }}
          className="absolute right-[-10px] top-[-10px] font-semibold p-2 rounded-full text-white"
        >
          {movie.rating}
        </span>
      </div>
      <div>
        <h3 className="font-bold mt-4 text-2xl md:text-lg line-clamp-1">
          {movie.title}
        </h3>

        <div className="text-gray-400 flex gap-2">
          <p>{movie.year}</p>
          <p className="flex gap-2">
            {movie.genre.map((genre, i) => (
              <span key={i}>{genre}</span>
            ))}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
