import React, { useState } from 'react';
import { handleLogin } from './firebaseAuth'; // Import the handleLogin function you created earlier

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password); // Call the handleLogin function with the provided email and password
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default LoginPage;

