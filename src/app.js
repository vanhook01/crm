import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TaskPanel from './TaskPanel';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyB8aTRLq3zAP0gvtzQ3fbhL-vXRVNNl6Ac",
        authDomain: "crm1-e474a.firebaseapp.com",
        projectId: "crm1-e474a",
        storageBucket: "crm1-e474a.appspot.com",
        messagingSenderId: "769362393541",
        appId: "1:769362393541:web:5679eebf41950ba7d1b3ac",
        measurementId: "G-L16ZT3QDCN"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Firebase authentication listener
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });

        // Cleanup the listener
        return () => unsubscribe();
    }, []);

    // Handle sign-up
    const handleSignUp = async () => {
        // Same as before
    };

    // Handle sign-in
    const handleSignIn = async () => {
        // Same as before
    };

    // Handle sign-out
    const handleSignOut = async () => {
        // Same as before
    };

    // Render the appropriate content based on the user's login status
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {currentUser ? (
                            <>
                                <li>
                                    <Link to="/events">Events</Link>
                                </li>
                                <li>
                                    <Link to="/myclass">My Class</Link>
                                </li>
                                <li>
                                    <Link to="/deardudleyhigh">#deardudleyhigh</Link>
                                </li>
                                <li>
                                    <Link to="/profile">Profile</Link>
                                </li>
                                <li>
                                    <button onClick={handleSignOut}>Sign Out</button>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        )}
                    </ul>
                </nav>

                <Switch>
                    <Route path="/" exact>
                        <Home currentUser={currentUser} />
                    </Route>
                    <Route path="/login">
                        <Login handleSignUp={handleSignUp} handleSignIn={handleSignIn} />
                    </Route>
                    <Route path="/events">
                        <Events currentUser={currentUser} />
                    </Route>
                    <Route path="/myclass">
                        <MyClass currentUser={currentUser} />
                    </Route>
                    <Route path="/deardudleyhigh">
                        <DearDudleyHigh currentUser={currentUser} />
                    </Route>
                    <Route path="/profile">
                        <Profile user={currentUser} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
return (
    <div>
        {/* Render the TaskPanel component */}
        <TaskPanel />

        {currentUser ? (
            <>
                <h2>Welcome, {currentUser.email}</h2>
                <button onClick={handleSignOut}>Sign Out</button>
            </>
        ) : (
            <>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleSignUp}>Sign Up</button>
                <button onClick={handleSignIn}>Sign In</button>
            </>
        )}
    </div>
);
};
// Other components and features are still to be added here.

export default App;
