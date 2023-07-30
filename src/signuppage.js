import React, { useState } from 'react';
import { handleSignup } from './firebaseAuth'; // Import the handleSignup function you created earlier

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSignup(email, password); // Call the handleSignup function with the provided email and password
    };

    return (
        <div>
            <h1>Signup Page</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupPage;

