import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "./../components/Loader";
import Error from "./../components/Error";
import { FaTrash, FaRegBookmark, FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BiSolidCameraMovie } from "react-icons/bi";

import api from "../utils/api";
const Detail = () => {
  const navigate = useNavigate();
  // * 1) Extract the movie ID from the URL parameter.
  const { id } = useParams();
  // * 2) Movie data fetch from API
  const { data, isError, isLoading } = useQuery({
    queryKey: ["movie"],
    queryFn: () => api.get(`/movies/${id}`),
  });
  const movie = data?.data;

  const r = +movie?.rating;
  const color = r > 9 ? "blue" : r > 7.5 ? "green" : r > 5 ? "orange" : "red";

  const handleDelete = () => {
    api
      .delete(`/movies/${movie.id}`)
      .then((res) => navigate("/"))
      .catch((err) => console.log("Başarısız"));
  };
  return (
    <div className="p-10">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error />
      ) : (
        data && (
          <>
            <div>
              <div className="flex justify-end">
                <button
                  onClick={handleDelete}
                  className="bg-red-600 text-white p-2 rounded-md hover:bg-red-400"
                >
                  <FaTrash />
                </button>
              </div>

              <div className="flex flex-col gap-10 items-center md:flex-row">
                <div>
                  <img
                    className="rounded-md "
                    src="https://picsum.photos/250/400"
                    alt="poster"
                  />
                </div>
                {/* title */}
                <div className="flex flex-col gap-10">
                  <h1 className="text-3xl font-semibold">
                    {movie.title} <span>({movie.year})</span>
                  </h1>
                  {/* scores */}
                  <p>
                    <span className="font-semibold me-3">İzleyici Skoru</span>
                    <span
                      style={{ background: color }}
                      className="p-2 rounded-full text-white font-semibold"
                    >
                      {movie.rating}
                    </span>
                  </p>
                  {/* buttons */}
                  <div className="flex gap-5">
                    <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600">
                      <CiHeart />
                    </button>
                    <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600">
                      <FaRegBookmark />
                    </button>
                    <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600">
                      <FaRegStar />
                    </button>
                    <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600">
                      <BiSolidCameraMovie />
                    </button>
                  </div>

                  {/* categories */}
                  <div className="flex gap-5 items-center">
                    <p className="font-semibold ">Kategoriler</p>
                    <p className="flex gap-3 ">
                      {movie.genre.map((genre, i) => (
                        <span
                          key={i}
                          className="py-1 px-3 bg-yellow-600 p-2 rounded-full text-white"
                        >
                          {genre}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Detail;
