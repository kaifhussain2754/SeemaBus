import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import styles from './AboutPage.module.css'; // Import your CSS module
import { statsAtom } from './StatsAtom';
import { FaBus, FaShieldAlt, FaClock, FaUserFriends } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';
import TestimonialSlider from './Testimonial';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const AboutUs = () => {
    const stats = useRecoilValue(statsAtom); // Access the stats atom

    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);

    const handleCallNow = () => {
        window.location.href = 'tel:+919166185546'; // Replace with your contact number
    };

    const handleEnquireNow = () => {
        alert("Enquiry form will open!"); // Placeholder for enquiry logic
    };

    return (
        <div>
            <div className={`container my-5 ${styles.aboutContainer}`}>
                <div className={`row align-items-center`}>
                    <div className={`col-md-6 ${styles.description}`} data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                        <h1 className="mb-4" style={{ textAlign: 'left' }}>About Seema Bus Service</h1>
                        <p>
                            Welcome to Seema Bus Service, your trusted partner for premium travel solutions. We specialize in
                            providing safe, comfortable, and reliable bus services across various routes. Our fleet includes a
                            range of well-maintained buses designed to ensure your journey is enjoyable, whether you're traveling
                            for leisure or business.
                        </p>
                        <p>
                            At Seema Bus Service, we believe in creating exceptional travel experiences that cater to the needs
                            of our passengers. Our dedicated team of professionals is committed to offering you the best
                            services, from booking to arrival. With a focus on customer satisfaction, we aim to exceed your
                            expectations and help you create lasting memories on every journey.
                        </p>
                        <p>
                            Experience the difference with Seema Bus Service, where quality meets affordability. Join us as we
                            take you to your next adventure with comfort and style!
                        </p>
                        <div className="mt-4">
                            <button onClick={handleCallNow} className={`btn ${styles.callButton}`} style={{ marginRight: '10px' }}>
                                Call Now
                            </button>
                            <button onClick={handleEnquireNow} className={`btn ${styles.enquireButton}`}>
                                Enquire Now
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                        <img src="/aboutimage.jpeg" alt="About Seema Bus Service" className={`${styles.aboutImage} img-fluid`} />
                    </div>
                </div>

                {/* Our Mission and Our Story Section */}
                <div className="row mt-5">
                    <div className="col-md-6" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                        <h2 className="mb-4" style={{ textAlign: 'left' }}>Our Mission</h2>
                        <p>
                            Our mission is to provide safe, reliable, and comfortable travel experiences for all our passengers. 
                            We strive to exceed expectations by continuously improving our services and ensuring customer satisfaction. 
                            At Seema Bus Service, we aim to be the leading choice for travelers seeking quality transport solutions.
                        </p>
                    </div>
                    <div className="col-md-6" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
                        <h2 className="mb-4" style={{ textAlign: 'left' }}>Our Story</h2>
                        <p>
                            Founded on the principles of quality and customer service, Seema Bus Service began as a small 
                            transport company with a vision to revolutionize the travel experience. Over the years, we have 
                            expanded our fleet and services while maintaining our commitment to safety and comfort. 
                            Our journey is defined by the memories we create for our passengers and the communities we serve.
                        </p>
                    </div>
                </div>

                {/* Statistics Section with White Background */}
                <div className={`${styles.statsContainer} mt-5`}>
                    <div className="row">
                        <div className="col-md-3 text-center" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
                            <h2>
                                <CountUp start={0} end={stats.yearsOfService} duration={2.75} />+
                            </h2>
                            <p>Years of Service</p>
                        </div>
                        <div className="col-md-3 text-center" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000">
                            <h2>
                                <CountUp start={0} end={stats.successfulTrips} duration={2.75} />+
                            </h2>
                            <p>Successful Trips</p>
                        </div>
                        <div className="col-md-3 text-center" data-aos="zoom-in" data-aos-delay="700" data-aos-duration="1000">
                            <h2>
                                <CountUp start={0} end={stats.numberOfVehicles} duration={2.75} />+
                            </h2>
                            <p>Number of Vehicles</p>
                        </div>
                        <div className="col-md-3 text-center" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1000">
                            <h2>
                                <CountUp start={0} end={stats.happyCustomers} duration={2.75} />+
                            </h2>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className={`mt-5 ${styles.whyChooseContainer}`}>
                    <h2 className="text-center mb-4">Why Choose Us?</h2>
                    <div className="row">
                        <div className="col-md-3" data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000">
                            <div className={`${styles.card} text-center`}>
                                <FaBus size={40} className={styles.cardIcon} />
                                <h3>Comfortable Buses</h3>
                                <p>Enjoy a smooth and comfortable ride with our well-maintained fleet.</p>
                            </div>
                        </div>
                        <div className="col-md-3" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
                            <div className={`${styles.card} text-center`}>
                                <FaShieldAlt size={40} className={styles.cardIcon} />
                                <h3>Safety First</h3>
                                <p>Your safety is our top priority with rigorous maintenance protocols.</p>
                            </div>
                        </div>
                        <div className="col-md-3" data-aos="fade-up" data-aos-delay="1100" data-aos-duration="1000">
                            <div className={`${styles.card} text-center`}>
                                <FaClock size={40} className={styles.cardIcon} />
                                <h3>Punctual Service</h3>
                                <p>Count on us for timely departures and arrivals.</p>
                            </div>
                        </div>
                        <div className="col-md-3" data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1000">
                            <div className={`${styles.card} text-center`}>
                                <FaUserFriends size={40} className={styles.cardIcon} />
                                <h3>Customer Satisfaction</h3>
                                <p>Our dedicated team is here to ensure you have the best experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <TestimonialSlider />
            </div>
        </div>
    );
};

export default AboutUs;
