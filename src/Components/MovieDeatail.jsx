import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";

const MovieDetail = () => {
  const { movieId } = useParams(); // Get the movie ID from the URL
  console.log("Movie ID:", movieId);  // Debugging line

  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!movieId) {
      console.error("No movieId found");
      return;
    }

    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await axios.get(
          `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
        );
        setMovieDetails(movieResponse.data);

        const creditsResponse = await axios.get(
          `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
        );

        setCast(creditsResponse.data.cast.slice(0,15));
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!movieDetails) {
    return <div className="text-center">Movie details not found.</div>;
  }

  const getImageUrl = (path) => {
    return path ? `https://image.tmdb.org/t/p/w500${path}` : '/path/to/fallback-image.jpg'; 
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen w-full pt-10 pb-10">
      <div className="w-[100%] sm:w-[80%] mx-auto">
        <h1 className="text-4xl font-bold text-center pt-14 mb-8">{movieDetails.title}</h1>
        
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-6 lg:gap-4">
          <img
            src={getImageUrl(movieDetails.poster_path)}
            alt={movieDetails.title}
            className="w-full sm:w-[200px] sm:h-[300px] md:w-[230px] md:h-[350px] lg:w-[300px] lg:h-[450px] object-cover rounded-lg"
          />
          <div className="flex flex-col justify-between text-center sm:text-left w-full sm:w-[65%]">
            <p className="text-lg text-gray-400">{movieDetails.overview}</p>
            <p className="text-lg text-gray-300 mt-2">Rating: {movieDetails.vote_average}</p>
            <p className="text-lg text-gray-300 mt-2">Release Date: {movieDetails.release_date}</p>

            <h2 className="text-2xl font-bold mt-8">Cast</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
              {cast.map((actor) => (
                <div key={actor.id} className="flex flex-col items-center">
                  <img
                    src={getImageUrl(actor.profile_path)}
                    alt={actor.name}
                    className="w-32 h-48 object-cover rounded-lg"
                  />
                  <p className="mt-2 text-sm text-gray-400">{actor.name}</p>
                  <p className="text-xs text-gray-500">{actor.character}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
