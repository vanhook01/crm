import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const handleSignup = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User successfully registered
      const user = userCredential.user;
      console.log("User registered:", user);
      // Add any additional logic you need after successful registration
    })
    .catch((error) => {
      // Handle registration errors
      console.error("Error registering user:", error.message);
    });
};

export const handleLogin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User successfully logged in
      const user = userCredential.user;
      console.log("User logged in:", user);
      // Add any additional logic you need after successful login
    })
    .catch((error) => {
      // Handle login errors
      console.error("Error logging in:", error.message);
    });
};

