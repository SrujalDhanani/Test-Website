import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Updatemovie = () => {
    const [movieTitle, setMovieTitle] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [file, setFile] = useState(null);
    const [existingImage, setExistingImage] = useState(null); // Track existing image

    const location = useLocation();
    const movie = location.state?.movie;
    const navigate = useNavigate();
    const fileInputRef = useRef(null); // Create a ref for the file input

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    useEffect(() => {
        if (movie) {
            setMovieTitle(movie.title);
            setReleaseYear(movie.year);
            // File handling logic ko aap yahan update kar sakte hain agar aap file upload kar rahe hain
            setFile(movie.image);
        }
    }, [movie]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newMovie = {
            title: movieTitle,
            year: releaseYear,
            image: file ? URL.createObjectURL(file) : null,
        };
    
        const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
        
        // Find index of the existing movie to update
        const movieIndex = storedMovies.findIndex((m) => m.title === movie.title);
    
        if (movieIndex !== -1) {
            // Update the existing movie
            storedMovies[movieIndex] = newMovie;
        } else {
            // If movie doesn't exist, add it as a new entry
            storedMovies.push(newMovie);
        }
    
        localStorage.setItem('movies', JSON.stringify(storedMovies));
    
        console.log({ movieTitle, releaseYear, file });
        navigate('/Movie'); // Redirect to the New Movie page or another desired page
    };

    const handleCancel = () => {
        // Navigate to the New Movie page
        navigate('/Newmovie');
    };
    const handleIconClick = () => {
        fileInputRef.current.click(); // Trigger click on hidden file input
    };

    return (
        <div>
            <div className="new-movie-container">

                <div className="upload-section">
                    <h2 className='crev_header'>Update a movie</h2>


                    <div
                        className='inp_file'
                        onClick={handleIconClick}


                    >
                        {file ? (
                            <p >{file.name}</p>
                        ) : (
                            <>
                                <div className='file_div'>
                                    <i className="fa-solid fa-cloud-arrow-down prag_class" ></i>
                                    <p className="pra_class">Drop an image here</p>
                                </div>
                            </>
                        )}
                    </div>
                    <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: 'none' }} // Hide the file input
                />
                </div>
                <div className="details-section">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                className='name_mov'
                                placeholder='Title'
                                type="text"
                                value={movieTitle}
                                onChange={(e) => setMovieTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                className='pub_yer'
                                placeholder='Publishing year'
                                type="number"
                                value={releaseYear}
                                onChange={(e) => setReleaseYear(e.target.value)}
                                required
                            />
                        </div>
                        <div className="button-group">
                            <button className='canc_btn' type="button" onClick={handleCancel}>Cancel</button>
                            <button className='sub_btnn' type="submit">Update</button>
                        </div>
                    </form>
                </div>
                {/* Wave Effect */}

            </div>
            <div className="wave-container">
                <div className="wave"></div>
                <div className="wave"></div>
            </div>

        </div>
    );
};

export default Updatemovie;
