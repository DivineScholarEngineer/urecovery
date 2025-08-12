import React, { useState } from 'react';
import { faHome, faComments, faNewspaper, faBlog, faUserFriends, faInfoCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import png1 from '../assets/testi.png';
import '../components/Footer.css';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';

function Testimonies() {
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

    const handleTestimonies = () => {
        navigate('/testimonies'); // Replace with your target route
    };
    const handleTestimoniesDetails = () => {
        navigate('/testimonies-details'); // Replace with your target route
    };
    const handleBookSession = () => {
        navigate('/talk-to-counsellor'); // Replace with your target route
    };

    return (
        <div style={{ height: '125vh', backgroundColor: `white` }}>
            {/* HEADER BAR */}
            <nav className="navbar w-full fixed top-0 bg-transparent z-20 shadow-md">

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
                        <FontAwesomeIcon icon={faUserFriends} className="icon" />
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
                <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-900 opacity-80"></div>
                <div className="relative z-10 flex flex-col justify-center items-center text-white h-full">
                    <h2 className="text-4xl font-bold ">Testimonies</h2>
                    <p className="text-lg text-center"> And they overcame him by the blood of the Lamb, and by the word of their testimony </p>
                </div>
            </section>

            {/* TAGS */}
            <div className="container mx-auto p-4 mt-4 flex space-x-2 uppercase  text-bold">
                <span className="w-3 h-10 bg-green-600"></span><span className="leading-relaxed text-green-600 top-2 ">Testimonies </span>
            </div>

            <div className="container mx-auto p-4 mt-4 ">
                <h1 className="font-semibold text-3xl text-black">Stories of transformed people </h1>
                <span className="text-lg text-black"> get inspired by the stories of others </span>
            </div>


            {/* Testimonies */}
            <div className="container mx-auto p-4 mt-4 ">
                {/* Image Div */}
                <div className="float-left">
                    <img
                        src="../images/cou1.png"
                        alt="Counsellor"
                        className="w-full md:w-64 h-auto object-cover rounded-lg border-4 border-white shadow-lg"
                    />
                </div>
                {/* Text Div */}
                <div className="text-lg text-left mb-4 ">
                    <p className='text-black'>
                        <span className="font-bold text-black"> <span className="text-3xl">W</span>ale Warren</span> Dolor sit
                        amet consectetur adipisicing elit. Omnis error, voluptatum officia
                        mollitia ea tempore nihil dolorum nostrum fugit sapiente sequi, illo
                        explicabo deleniti eaque! Sapiente voluptatibus molestiae quae error.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ut
                        perspiciatis illo tempora iste, commodi nesciunt natus eveniet debitis
                        unde hic nostrum ex sapiente, dolor sequi maxime. Consequatur, harum
                        ducimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                        atque naus modi voluptatibus accusamus mollitia. Perferendis
                        accusantium deleniti laborum provident consequatur quos dignissimos
                        voluptatum similique, quo aliquam impedit explicabo consectetur?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                        quibusdam? Eius magni, eaque porro sapiente iure minus sint cumque
                        quas eligendi quasi soluta, asperiores nemo iste expedita consequuntur
                        fugit. Est. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt quaerat quos cumque asperiores, aut voluptatem, voluptate
                        autem, blanditiis similique accusantium consequuntur esse! Temporibus
                        ratione vitae nulla dicta perspiciatis in fugiat.

                    </p>
                    <button className="text-white font-semibold px-4 py-2 bg-green-700 rounded-md float-right" onClick={handleTestimoniesDetails}>  Read More ...</button>
                </div>
            </div>


            <div className="container mx-auto p-4 mt-4  ">
                {/* Image Div */}
                <div className="float-right">
                    <img
                        src="../images/cou2.png"
                        alt="Counsellor"
                        className="w-full md:w-64 h-auto object-cover rounded-lg border-4 border-white shadow-lg"
                    />
                </div>
                {/* Text Div */}
                <div className="text-lg text-left mb-4">
                    <p className='text-black'>
                        <span className="font-bold text-black"> <span className="text-3xl">J</span>enny Wilson</span> Dolor sit
                        amet consectetur adipisicing elit. Omnis error, voluptatum officia
                        mollitia ea tempore nihil dolorum nostrum fugit sapiente sequi, illo
                        explicabo deleniti eaque! Sapiente voluptatibus molestiae quae error.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ut
                        perspiciatis illo tempora iste, commodi nesciunt natus eveniet debitis
                        unde hic nostrum ex sapiente, dolor sequi maxime. Consequatur, harum
                        ducimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                        atque naus modi voluptatibus accusamus mollitia. Perferendis
                        accusantium deleniti laborum provident consequatur quos dignissimos
                        voluptatum similique, quo aliquam impedit explicabo consectetur?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                        quibusdam? Eius magni, eaque porro sapiente iure minus sint cumque
                        quas eligendi quasi soluta, asperiores nemo iste expedita consequuntur
                        fugit. Est. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt quaerat quos cumque asperiores, aut voluptatem, voluptate
                        autem, blanditiis similique accusantium consequuntur esse! Temporibus
                        ratione vitae nulla dicta perspiciatis in fugiat.
                    </p>
                    <button className="text-white font-semibold px-4 py-2 bg-green-700 rounded-md float-left" onClick={handleTestimoniesDetails}>  Read More ...</button>
                </div>
            </div>



            <div className="container mx-auto p-4 mt-4  ">
                {/* Image Div */}
                <div className="float-left">
                    <img
                        src="../images/cou3.png"
                        alt="Counsellor"
                        className="w-full md:w-64 h-auto object-cover rounded-lg border-4 border-white shadow-lg"
                    />
                </div>
                {/* Text Div */}
                <div className="text-lg text-left mb-4 ">
                    <p className='text-black'>
                        <span className="font-bold text-black"> <span className="text-3xl">A</span>lbert Flores</span> Dolor sit
                        amet consectetur adipisicing elit. Omnis error, voluptatum officia
                        mollitia ea tempore nihil dolorum nostrum fugit sapiente sequi, illo
                        explicabo deleniti eaque! Sapiente voluptatibus molestiae quae error.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ut
                        perspiciatis illo tempora iste, commodi nesciunt natus eveniet debitis
                        unde hic nostrum ex sapiente, dolor sequi maxime. Consequatur, harum
                        ducimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                        atque naus modi voluptatibus accusamus mollitia. Perferendis
                        accusantium deleniti laborum provident consequatur quos dignissimos
                        voluptatum similique, quo aliquam impedit explicabo consectetur?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                        quibusdam? Eius magni, eaque porro sapiente iure minus sint cumque
                        quas eligendi quasi soluta, asperiores nemo iste expedita consequuntur
                        fugit. Est. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt quaerat quos cumque asperiores, aut voluptatem, voluptate
                        autem, blanditiis similique accusantium consequuntur esse! Temporibus
                        ratione vitae nulla dicta perspiciatis in fugiat.
                    </p>
                    <button className="text-white font-semibold px-4 py-2 bg-green-700 rounded-md float-right" onClick={handleTestimoniesDetails}>  Read More ...</button>
                </div>
            </div>


            {/* Counselling */}
            <div className="container mx-auto p-4 mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6">
                {/* Text Div */}
                <div className="flex flex-col justify-between">
                    <p className="mb-4 text-lg text-left text-black">
                        <h2 className="font-semibold text-2xl mb-4 text-black"> Talk to Counsellor </h2>
                        fugit. Est. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt quaerat quos cumque asperiores, aut voluptatem, voluptate
                        autem, blanditiis similique accusantium consequuntur esse! Temporibus
                        ratione vitae nulla dicta perspiciatis in fugiat.
                        Nesciunt quaerat quos cumque asperiores, aut voluptatem, voluptate
                        autem, blanditiis similique accusantium consequuntur esse! Temporibus
                        ratione vitae nulla dicta perspiciatis in fugiat.
                        explicabo deleniti eaque! Sapiente voluptatibus molestiae quae error.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ut
                        perspiciatis illo tempora iste, commodi nesciunt natus eveniet debitis
                        unde hic nostrum ex sapiente, dolor sequi maxime.
                    </p>
                    <button className="text-white font-semibold px-4 py-2 bg-green-700 rounded-md self-start" onClick={handleBookSession}>
                        Book session
                    </button>
                </div>

                {/* Image Div */}
                <div className="w-full flex justify-center">
                    <img
                        src="../images/book_session.png"
                        alt="Counsellor"
                        className="w-full h-full md:w-full h-54 object-cover rounded-lg border-4 border-white shadow-lg"
                    />
                </div>
            </div>

            <div className="container mx-auto p-4 mt-8">

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

export default Testimonies