import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch events from Firestore database when the component mounts
        const fetchEvents = async () => {
            try {
                const eventsRef = firebase.firestore().collection('events');
                const snapshot = await eventsRef.get();
                const eventsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setEvents(eventsData);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <h2>Events</h2>
            {events.map((event) => (
                <div key={event.id}>
                    <h3>{event.title}</h3>
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                    <p>Description: {event.description}</p>
                    <p>Category: {event.category}</p>
                </div>
            ))}
        </div>
    );
};

export default Events;
