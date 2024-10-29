import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate(); // Initialize navigate


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }
        localStorage.setItem('isLoggedIn', 'true');

        // Store email and password in localStorage
        if (rememberMe) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password); // Note: Storing passwords in localStorage is not recommended for security reasons
        } else {
            localStorage.removeItem('email');
            localStorage.removeItem('password');

        }

        console.log({ email, password, rememberMe });
        navigate('/MovieApp');

    };

    return (
        <div>
            <div className='Container_sign'>
                <h1 className='Sign_head'>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className='Contain_em'>
                        <input
                            className='Inp_em'
                            type="email"
                            value={email}
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='Contain_pass'>
                        <input
                            className='Inp_pass'

                            type="password"
                            value={password}
                            placeholder='Password'

                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='mar_rem'>
                        <label className="Rem_me">
                            <input
                                className='Span_re'
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            Remember Me
                        </label>
                    </div>
                    <button className='sign_btn' type="submit">Login</button>
                </form>
            </div>
            {/* Wave Effect */}
            <div className="wave-container">
                <div className="wave"></div>
                <div className="wave"></div>

            </div>
        </div>
    );
};

export default Signup;
