import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const NewMovie = () => {
    const [movieTitle, setMovieTitle] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null); // Create a ref for the file input
    const navigate = useNavigate(); // Initialize navigate

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = {
            title: movieTitle,
            year: releaseYear,
            image: file ? URL.createObjectURL(file) : null,
        };
        const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
        const updatedMovies = [...storedMovies, newMovie];
        localStorage.setItem('movies', JSON.stringify(updatedMovies));
        setMovieTitle('');
        setReleaseYear('');
        setFile(null);
        navigate('/Movie');

    };

    const handleIconClick = () => {
        fileInputRef.current.click(); // Trigger click on hidden file input
    };

    const handleCancel = () => {
        // Reset the form or handle cancel logic
        setMovieTitle('');
        setReleaseYear('');
        setFile(null);
    };

    return (
        <div>
        <div className="new-movie-container">

            <div className="upload-section">
                <h2 className='crev_header'>Create a new movie</h2>


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
                        <button className='sub_btnn' type="submit">Submit</button>
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

export default NewMovie;
