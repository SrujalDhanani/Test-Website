import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Logout = () => {
    const navigate = useNavigate(); // Initialize navigate

    
    useEffect(() => {
        // Remove user credentials and logged-in status from localStorage
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('isLoggedIn');
   // Log for debugging
   console.log('Logout clicked, clearing localStorage.');
    
   localStorage.clear();
        // Navigate back to the login or home page
        navigate('/'); // Adjust this path based on your route configuration
    }, [navigate]);

    return null;
};

export default Logout;
