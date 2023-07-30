import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        graduatingClass: '',
        phoneNumber: '',
        interestedEvents: [],
    });

    const handleInputChange = (event) => {
        const { name, value, type } = event.target;
        if (type === 'checkbox') {
            if (event.target.checked) {
                setFormData((prevData) => ({
                    ...prevData,
                    interestedEvents: [...prevData.interestedEvents, value],
                }));
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    interestedEvents: prevData.interestedEvents.filter((item) => item !== value),
                }));
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Handle form submission
    };

    return (
        <section className="contact">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-text">We'd love to hear from you!</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Email Address:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Graduating Class:
                    <input
                        type="text"
                        name="graduatingClass"
                        value={formData.graduatingClass}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Phone Number:
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Interested Events:
                    <div>
                        <input
                            type="checkbox"
                            name="interestedEvents"
                            value="fundraising"
                            checked={formData.interestedEvents.includes('fundraising')}
                            onChange={handleInputChange}
                        />
                        Fundraising
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="interestedEvents"
                            value="athletics"
                            checked={formData.interestedEvents.includes('athletics')}
                            onChange={handleInputChange}
                        />
                        Athletics
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="interestedEvents"
                            value="reunions"
                            checked={formData.interestedEvents.includes('reunions')}
                            onChange={handleInputChange}
                        />
                        Reunions
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="interestedEvents"
                            value="selectAll"
                            checked={
                                formData.interestedEvents.length === 3 &&
                                formData.interestedEvents.includes('fundraising') &&
                                formData.interestedEvents.includes('athletics') &&
