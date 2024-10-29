import React, { useEffect, useState } from 'react';
import Paggination from './Paggination';
import { useNavigate } from 'react-router-dom';


const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage =4;
    const navigate = useNavigate();


    // Calculate current movies based on pagination
    const indexOfLastMovie = currentPage * itemsPerPage;
    const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
    const totalPages = Math.ceil(movies.length / itemsPerPage);


    // const totalPages = Math.ceil(length / itemsPerPage);
    useEffect(() => {
        // Local Storage se movies fetch karna
        const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
        setMovies(storedMovies);
    }, []);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleLogout = () => {
        // Perform any logout logic here (like clearing localStorage, etc.)
        navigate('/'); // Navigate to the Login page
    };

    const handleNewMovie = () => {
        navigate('/Newmovie'); // Navigate to the New Movie page
    };


    const handleMovieClick = (movie) => {
        // Navigate to Updatemovie page with movie details
        navigate('/Updatemovie', { state: { movie } });
    };

    return (
        <>
            <div className='movie_head'>
                <h2 className='movie_name'>My Movies<i class="fa-solid fa-circle-plus plus-icon" onClick={handleNewMovie}></i></h2>
                <div>
                    <h2 className='movie_log' onClick={handleLogout}> Logout
                        <i class="fa-solid fa-arrow-right-from-bracket icon"></i>
                    </h2>
                </div>
            </div>
            <div className="movie-container">
                <div className="movie-row">
                    {currentMovies.map((movie, index) => (
                        <div key={index} className="movie-card" onClick={() => handleMovieClick(movie)} // Handle click event
                        >
                            <img src={movie.image || '/assets/default-movie.jpg'} alt={movie.title} className="movie-image" />
                            <h2 className='mov_head'>{movie.title}</h2>
                            <h2 className='mov_year'>{movie.year}</h2>
                        </div>
                    ))}
                </div>
            </div>
            {/* Pagination Component */}
            <div className='pag_mov'>
                <Paggination
                    totalPages={totalPages} 
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
};

export default Movie;
