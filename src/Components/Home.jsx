import React, { useEffect, useState } from "react";
import axios from "axios";


const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch popular movies using Axios
  const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      setPopularMovies(response.data.results); // Save the popular movies in state
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Popular Movies</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <p className="text-xl">Loading...</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">
          {popularMovies.map((movie) => (
            <div
              key={movie.id}
              className="flex flex-col bg-white rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-[20%] transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-72 object-cover rounded-t-lg hover:cursor-pointer"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                <p className="text-gray-600">Rating: {movie.vote_average}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Include TopRated and Upcoming components */}
      {/* <TopRated />
      <Upcoming /> */}
    </div>
  );
};

export default Home;
