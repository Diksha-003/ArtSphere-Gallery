import React from 'react';
import { Navigationbar } from './Navigationbar';
import Slider from 'react-slick';
import './ContactUs.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AboutImg from '../img_art/contactUs.jpg';
import { Hero } from './Hero';


export function ContactUs() {
    const [formStatus, setFormStatus] = React.useState('Send');

    const onSubmit = (e) => {
        e.preventDefault();
        setFormStatus('Submitting...');

        // Simulate a delay or asynchronous operation (replace with actual API request)
        setTimeout(() => {
            setFormStatus('Sent');

            // Reset to 'Send' after 2 seconds
            setTimeout(() => {
                setFormStatus('Send');
            }, 2000);
        }, 2000);
    };

    // Contact Information and Location data
    const contactInfoData = [
        {
            title: 'Get in Touch',
            content: (
                <>
                    <h3>Get in Touch</h3>
                    <p>Feel free to reach out to us anytime!</p>
                    <p>We are here to assist you with any inquiries or concerns you may have.</p>
                    <p>Your satisfaction is our priority.</p>
                </>
            ),
        },
        {
            title: 'Our Location',
            content: (
                <>
                    <h3>Our Location</h3>
                    <p>123 Main Street, Cityville, State, 12345, USA</p>
                    <p>Visit us at our physical location, and we would be delighted to welcome you!</p>
                    <p>Explore the vibrant surroundings and experience our commitment to excellence.</p>
                </>
            ),
        },
        {
            title: 'Customer Support',
            content: (
                <>
                    <h3>Customer Support</h3>
                    <p>Our dedicated customer support team is available 24/7 to assist you.</p>
                    <p>Contact us through email, phone, or live chat for prompt and friendly service.</p>
                    <p>Your satisfaction is our success!</p>
                </>
            ),
        },
        // Add more entries as needed
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <>
            <Navigationbar />

            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                // title="Home > Contact Us"

                btnClass="hide"
            />

            <div className="row justify-content-center mt-5 mb-5">
                <div className="col-md-8 contact-form">
                    <div className="text-center mb-4"></div>
                    <h2 className="mb-4 text-center">Get in Touch</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">
                                Name
                            </label>
                            <input className="form-control" type="text" id="name" name="name" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input className="form-control" type="email" id="email" name="email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="message">
                                Message
                            </label>
                            <textarea className="form-control" id="message" name="message" rows="4" required />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-success" type="submit" disabled={formStatus === 'Sent'}>
                                {formStatus}
                            </button>
                        </div>
                        <br />
                    </form>
                    {formStatus === 'Sent' && (
                        <div className="alert alert-success mt-3" role="alert" style={{ fontSize: '18px' }}>
                            Thank you for reaching out! We will get back to you soon.
                        </div>
                    )}
                </div>
            </div>

            <Slider {...sliderSettings}>
                {contactInfoData.map((item, index) => (
                    <div key={index} className="mt-5 additional-info">
                        {item.content}
                    </div>
                ))}
            </Slider>
        </>
    );
}
