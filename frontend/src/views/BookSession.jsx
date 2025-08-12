import React, { useState } from 'react';
import { faHome, faNewspaper, faComments, faBlog, faUserFriends, faInfoCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import png1 from '../assets/pexels-linkedin-1251832.png';
import '../components/Footer.css';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';

// Import icons and Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function BookSession() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = () => {
        navigate('/login');
    };
    const handleClickArticle = () => {
        navigate('/articles');
    };
    const handleClickBlogs = () => {
        navigate('/blogs');
    };
    /* const handleClickArticlesWriteup = () => {
        navigate('/articles-writeup');
    };
    const handleClickBlogssWriteup = () => {
        navigate('/blogs-writeup');
    };
    const handleClickCounsellorProfile = () => {
        navigate('/counsellors-profile');
    }; */

    const handleBookSession = () => {
        navigate('/talk-to-counsellor'); // Replace with your target route
    };
    const handleTestimonies = () => {
        navigate('/testimonies'); // Replace with your target route
    };

    return (
        <div style={{ height: '125vh', backgroundColor: `white` }}>
            {/* HEADER BAR */}
            <nav className="navbar w-full fixed top-0  bg-transparent z-20 shadow-md">
                <div className="navbar-logo flex items-center space-x-2 whitespace-nowrap">
                    <img src="../images/ucover.png" alt="Logo" className="w-8 h-8" />
                    <span className="text-lg font-semibold text-black">U-Recover</span>
                </div>
                <div
                    className={`navbar-toggle ${isOpen ? 'open' : ''}`}
                    style={{ backgroundColor: 'black', marginRight: '10px' }}
                    onClick={toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className={`navbar-dialog ${isOpen ? 'open' : ''}`}>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} className="icon" />
                        Home
                    </Link>
                    <Link to="/articles" onClick={handleClickArticle}>
                        <FontAwesomeIcon icon={faNewspaper} className="icon" />
                        Articles
                    </Link>
                    {/* <Link to="/articles-writeup" onClick={handleClickArticlesWriteup}>
                        <FontAwesomeIcon icon={faPen} className="icon" />
                        Articles Write-Up
                    </Link> */}
                    <Link to="/blogs" onClick={handleClickBlogs}>
                        <FontAwesomeIcon icon={faBlog} className="icon" />
                        Blogs
                    </Link>
                    {/*<Link to="/blogs-writeup" onClick={handleClickBlogssWriteup}>
                        <FontAwesomeIcon icon={faPenFancy} className="icon" />
                        Blogs Write-Up
                    </Link> */}

                    <Link to="/talk-to-counsellor">
                        <FontAwesomeIcon icon={faUserFriends} className="icon" onClick={handleBookSession} />
                        Book Session
                    </Link>
                    <Link to="/aboutus">
                        <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                        About Us
                    </Link>
                    <Link to="/testimonies" onClick={handleTestimonies}>
                        <FontAwesomeIcon icon={faComments} className="icon" /> {/* Updated icon */}
                        Testimonies
                    </Link>
                    <Link to="/login" onClick={handleClick}>
                        <FontAwesomeIcon icon={faSignInAlt} className="icon" />
                        Log in
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center opacity-90 pt-20 mt-80"
                style={{
                    backgroundImage: `url(${png1})`,
                    height: '60vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw', // Full viewport width
                    maxWidth: '100vw', // Ensure no overflow
                    margin: '0', // Remove any margin
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-900 opacity-75"></div>
                <div className="relative z-10 flex flex-col justify-center items-center text-white h-full">
                    <h2 className="text-5xl font-bold text-white">Talk to a Counsellor</h2>
                    <p className="text-3xl text-center mt-2 text-white">In the multitude of counsellors, there is safety</p>
                </div>
            </section>

            {/* Counsellor Profiles */}
            <div className="container mx-auto p-4 mt-8">

                <section className="container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card shadow p-4">
                                <h2 className="card-title text-center mb-4">Get in Touch With a Counsellor Today</h2>
                                <p className="text-center text-muted mb-4">Fill the form below to get assigned to a counsellor</p>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="firstName" className="form-label">First Name <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control custom-input-height" id="firstName" placeholder="Lorem" required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="surname" className="form-label">Surname <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control custom-input-height" id="surname" placeholder="Ipsum" required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="gender" className="form-label">Gender <span className="text-danger">*</span></label>
                                            <select className="form-select custom-input-height" id="gender" required>
                                                <option>Select your gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="country" className="form-label">Country <span className="text-danger">*</span></label>
                                            <select className="form-select custom-input-height" id="country" required>
                                                <option>Select your country</option>
                                                <option>Afghanistan</option>
                                                <option>Belgium</option>
                                                <option>Columbia</option>
                                                <option>Egypt</option>
                                                <option>Nigeria</option>
                                                <option>South Africa</option>
                                                <option>Ukraine</option>
                                                <option>Zambia</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="phoneNumber" className="form-label">WhatsApp No. <span className="text-danger">*</span></label>
                                            <input type="tel" className="form-control custom-input-height" id="phoneNumber" placeholder="0123456789" required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="email" className="form-label">E-mail <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control custom-input-height" id="email" placeholder="loremipsum@gmail.com" required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="counsellingArea" className="form-label">Counselling Area <span className="text-danger">*</span></label>
                                            <select className="form-select custom-input-height" id="counsellingArea" required>
                                                <option>Select an area you want to be counselled on</option>
                                                <option>Holy living</option>
                                                <option>Relationship</option>
                                                <option>Marriage</option>
                                                <option>Depression</option>
                                                <option>Prayer Life</option>
                                                <option>Evangelism</option>
                                                <option>Others</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="counsellingArea" className="form-label">How should we contact you? Pick as applicable <span className="text-danger">*</span></label>
                                            <select className="form-select custom-input-height" id="counsellingArea" required>
                                                <option>Select</option>
                                                <option>Contact me via WhatsApp</option>
                                                <option>Contact me via E-mail</option>
                                                <option>Contact me via both platforms</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="description" className="form-label">Leave a note for your counsellor</label>
                                            <textarea className="form-control custom-input-height" id="description" rows="4"></textarea>
                                        </div>

                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <button type="submit" className="btn btn-success w-100" style={{ height: '50px' }}>Submit</button>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>
                </section>



                {/* FOOTER */}
                <footer className="footer mt-5 mb-4">
                    <div className="footer-content">
                        <div className="footer-section about">
                            <h1 className="logo-text">U-RECOVER</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Sapien sit fermentum risus varius orci nibh.
                                Suspendisse nascetur purus tempus turpis mattis fermentum curabitur cursus aliquet.
                                Maecenas sagittis. Suspendisse nascetur purus tempus turpis mattis fermentum curabitu.
                            </p>
                        </div>
                        <div className="footer-section links">
                            <h2>Useful Links</h2>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/talk-to-counsellor">Talk to a Counsellor</a></li>
                                <li><a href="/resources">Resources</a></li>
                                <li><a href="/testimonies">Testimonies</a></li>
                                <li><a href="/about-us">About Us</a></li>
                            </ul>
                        </div>
                        <div className="footer-section social">
                            <h2>Follow Us</h2>
                            <div className="social-icons">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            </div>
                        </div>
                    </div>
                    <hr className="footer-divider" />
                    <div className="footer-bottom">
                        &copy; U-Recover 2024
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default BookSession;
