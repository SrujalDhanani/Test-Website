import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const MovieApp = () => {
    const navigate = useNavigate(); // Initialize navigate

    const handleadd = () => {
        navigate('/Newmovie');
    }
    return (
        <div>
        <div className='empty'>
            <h1 className='emp_head'>
                Your Movie List Is Empty
            </h1>
            <div className='new_aad'>
                <button className='sub_mob' onClick={handleadd}>
                    Add a Movie
                </button>
            </div>
            
        </div>
        <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        </div>
    </div>
    );
};

export default MovieApp;
