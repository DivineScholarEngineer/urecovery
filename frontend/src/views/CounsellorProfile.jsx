import React, { useState } from 'react';
import { faHome, faNewspaper,  faBlog, faUserFriends, faInfoCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import png1 from '../assets/pexels-linkedin-1251832.png';
import counsellor1 from '../assets/cou1.png';
import counsellor2 from '../assets/cou2.png';
import counsellor3 from '../assets/cou3.png';
import counsellor4 from '../assets/cou4.png';
import '../components/Footer.css';
import '../components/booked.css';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';

function CounsellorProfile() {
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
   /*  const handleClickArticlesWriteup = () => {
        navigate('/articles-writeup');
    };
    const handleClickBlogssWriteup = () => {
        navigate('/blogs-writeup');
    }; */
    const handleClickCounsellorProfile = () => {
        navigate('/counsellors-profile');
    };

    return (
        <div style={{ height: '125vh' }}>
            {/* HEADER BAR */}
            <nav className="navbar w-full fixed top-0 bg-transparent z-20 shadow-md">
                <div className="navbar-logo">
                    <img src="../images/ucover.png" alt="Logo" />
                </div>
                <div
                    className={`navbar-toggle ${isOpen ? 'open' : ''}`}
                    style={{ backgroundColor: 'black', marginRight: '30px' }}
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

                    <Link to="/counsellors-profile" onClick={handleClickCounsellorProfile}>
                        <FontAwesomeIcon icon={faUserFriends} className="icon" />
                        Counsellors Profile
                    </Link>
                    <Link to="/aboutus">
                        <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                        About Us
                    </Link>
                    <Link to="/login" onClick={handleClick}>
                        <FontAwesomeIcon icon={faSignInAlt} className="icon" />
                        Log in
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative bg-cover bg-center opacity-90 pt-45 mt-10"
                style={{ backgroundImage: `url(${png1})`, height: '60vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-900 opacity-75"></div>
                <div className="relative z-10 flex flex-col justify-center items-center text-white h-full">
                    <h2 className="text-5xl font-bold text-white">Meet our Counsellors</h2>
                    <p className="text-3xl text-center mt-2 text-white">Check out the profile of our seasoned Counsellors</p>
                </div>
            </section>

            {/* Counsellor Profiles */}
            <div className="container mx-auto p-4 mt-8">
                {/* Counsellor 1 */}
                <div className="flex flex-col md:flex-row items-center mb-8">
                    <img
                        src={counsellor1}
                        alt="Counsellor"
                        className="w-full md:w-1/4 max-h-[300px] h-auto object-cover rounded-lg border-4 border-white shadow-lg md:mr-6 mb-4 md:mb-0"
                    />

                    <div className="md:w-3/4">
                        <h3 className="text-2xl font-bold text-black mb-2">Wale Warren</h3>
                        <p className="text-lg text-gray-700">
                            Dolor sit
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
                    </div>
                </div>

                {/* Counsellor 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center mb-8">
                    <img
                        src={counsellor2}
                        alt="Counsellor"
                        className="w-full md:w-1/4 max-h-[300px] h-auto object-cover rounded-lg border-4 border-white shadow-lg md:mr-6 mb-4 md:mb-0"
                    />
                    <div className="md:w-3/4">
                        <h3 className="text-2xl font-bold text-black mb-2">Jenny Wilson</h3>
                        <p className="text-lg text-gray-700">
                            Dolor sit
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
                    </div>
                </div>

                {/* Counsellor 3 */}
                <div className="flex flex-col md:flex-row items-center mb-8">
                    <img
                        src={counsellor3}
                        alt="Counsellor"
                        className="w-full md:w-1/4 max-h-[300px] h-auto object-cover rounded-lg border-4 border-white shadow-lg md:mr-6 mb-4 md:mb-0"
                    />
                    <div className="md:w-3/4">
                        <h3 className="text-2xl font-bold text-black mb-2">Albert Flores</h3>
                        <p className="text-lg text-gray-700">
                            Dolor sit
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
                    </div>
                </div>


                {/* Counsellor 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center mb-8">
                    <img
                        src={counsellor4}
                        alt="Counsellor"
                        className="w-full md:w-1/4 max-h-[300px] h-auto object-cover rounded-lg border-4 border-white shadow-lg md:mr-6 mb-4 md:mb-0"
                    />
                    <div className="md:w-3/4">
                        <h3 className="text-2xl font-bold text-black mb-2">Jenny Wilson</h3>
                        <p className="text-lg text-gray-700">
                            Dolor sit
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
                    </div>
                </div>


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

export default CounsellorProfile;
