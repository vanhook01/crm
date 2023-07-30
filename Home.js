import React from 'react';

function Home() {
    return (
        <section className="home">
            <h1 className="home-title">Welcome to My Alumni CRM</h1>
            <p className="home-text">Connect and stay in touch with your alumni network!</p>
            <div className="home-buttons">
                <button className="button-primary">Sign Up</button>
                <button className="button-secondary">Learn More</button>
            </div>
        </section>
    );
}

export default Home;

