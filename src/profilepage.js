import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
const Profile = () => {
    const [displayName, setDisplayName] = useState('');
    const [profilePhotoURL, setProfilePhotoURL] = useState('');
    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    // Function to handle file input change
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    // Function to handle photo upload
    const handleUpload = () => {
        if (file) {
            const storageRef = firebase.storage().ref();
            const photoRef = storageRef.child(`profile-photos/${file.name}`);

            const uploadTask = photoRef.put(file);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // Track upload progress
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setUploadProgress(progress);
                },
                (error) => {
                    // Handle upload error
                    console.error(error);
                },
                () => {
                    // Upload completed successfully
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        setProfilePhotoURL(downloadURL);
                    });
                }
            );
        }
    };

    // Function to update user profile in Firebase Auth
    const handleUpdateProfile = () => {
        const user = firebase.auth().currentUser;
        if (user) {
            user.updateProfile({
                displayName: displayName,
                photoURL: profilePhotoURL,
            })
                .then(() => {
                    // Profile updated successfully
                    console.log('Profile updated successfully.');
                })
                .catch((error) => {
                    // Handle profile update error
                    console.error(error);
                });
        }
    };

    // Fetch current user's display name and photo URL on component mount
    useEffect(() => {
        const user = firebase.auth().currentUser;
        if (user) {
            setDisplayName(user.displayName || '');
            setProfilePhotoURL(user.photoURL || '');
        }
    }, []);

    return (
        <div>
            <h2>User Profile</h2>
            <label>
                Display Name:
                <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />
            </label>

            <div>
                <img src={profilePhotoURL} alt="Profile" style={{ width: '100px' }} />
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload Photo</button>
                {uploadProgress > 0 && <progress value={uploadProgress} max="100" />}
            </div>

            <button onClick={handleUpdateProfile}>Save Profile</button>
        </div>
    );
};

export default Profile;
