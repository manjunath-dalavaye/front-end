import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './Login.css'; 

const Login: React.FC = () => { 
    // useState hook to manage the username and password state. 
    // Initial values are fetched from localStorage or set to an empty string.
    const [username, setUsername] = useState<string>(() => localStorage.getItem('username') || ''); 
    const [password, setPassword] = useState<string>(() => localStorage.getItem('password') || ''); 
    const navigate = useNavigate(); // Hook to programmatically navigate to another route.

    // Function to handle form submission.
    const handleSubmit = (e: React.FormEvent) => { 
        e.preventDefault(); // Prevents the default form submission behavior (page reload).
        if (username && password) { // Check if both fields are filled.
            // Save the username and password to localStorage.
            localStorage.setItem('username', username); 
            localStorage.setItem('password', password); 

            alert('Login successful!'); // Display a success message.
            navigate('/todos'); // Navigate to the '/todos' route.
        } else { 
            alert('Please enter both username and password'); // Prompt the user to fill both fields.
        } 
    }; 

    // useEffect hook that runs once when the component mounts.
    useEffect(() => { 
        // Optionally clears the username and password from localStorage when the component mounts.
        localStorage.removeItem('username'); 
        localStorage.removeItem('password'); 
    }, []); // The empty array ensures this runs only once after the initial render.

    return ( 
        <div className="container"> 
            <div className="form login-form"> 
                <h2>Login</h2> 
                <form onSubmit={handleSubmit}> 
                    <div className="form-group"> 
                        <label htmlFor="username">Username</label> 
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} // Updates the username state when the input changes.
                            required // Makes this field mandatory.
                        />
                    </div> 
                    <div className="form-group"> 
                        <label htmlFor="password">Password</label> 
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Updates the password state when the input changes.
                            required // Makes this field mandatory.
                        />
                    </div> 
                    <button type="submit" className="btn">Login</button> 
                </form> 
            </div> 
        </div> 
    ); 
};

export default Login;
