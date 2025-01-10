import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

// Constants for API
const API_KEY = "c45a857c193f6302f2b5061c3b85e743";  // Your API Key
const BASE_URL = "https://api.themoviedb.org/3";

const UpcomingPage = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
        );
        setUpcomingMovies(response.data.results); // Set the fetched movies
      } catch (err) {
        console.error("Error fetching upcoming movies:", err);
        setError("Failed to load upcoming movies.");
      } finally {
        setLoading(false);  // Stop loading after fetching is done
      }
    };

    fetchUpcomingMovies();
  }, []);  // Empty array ensures the fetch runs only once when the component mounts

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`); // Navigate to the movie detail page
  };

  if (loading) {
    return <div className="text-center">Loading upcoming movies...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!upcomingMovies.length) {
    return <div className="text-center">No upcoming movies found.</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen w-full pt-10 pb-10">
      <div className="w-[100%] sm:w-[80%] mx-auto">
        <h1 className="text-4xl font-bold text-center pt-14 mb-8">Upcoming Movies</h1>
        
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-6 lg:gap-4 m-[16px] md:m-0">
          {upcomingMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-[200px] md:w-[200px] lg:w-[250px] xl:w-[280px] cursor-pointer"
              onClick={() => handleMovieClick(movie.id)}  // Add the click handler
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-[300px] object-cover rounded-t-lg"
              />
              <div className="text-center pt-2 pb-4 px-2">
                <h3 className="text-lg font-semibold pt-1">{movie.title}</h3>
                <p className="text-gray-400">Release Date: {movie.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingPage;
