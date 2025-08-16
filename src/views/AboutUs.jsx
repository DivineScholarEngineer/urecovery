import React, { useState } from 'react';
import { faHome, faNewspaper, faComments, faBlog, faUserFriends, faInfoCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import png1 from '../assets/2147626341.png';
import mission from '../assets/33.png';
import vision from '../assets/30575.png';
import lead1 from '../assets/pexels-moose-photos-170195-1587009-removebg-preview.png';
import lead2 from '../assets/pexels-divinetechygirl-1181686-removebg-preview.png';
import lead3 from '../assets/pexels-spencer-selover-142259-775358-removebg-preview.png';
import contact from '../assets/contact.png';
import '../components/Footer.css';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';

import { FaLock, FaShieldAlt, FaUserShield, FaEye, FaKey, FaFingerprint } from 'react-icons/fa';

const iconStyle = { fontSize: '70px', color: '#34d399' }; // Adjust color and size as needed
const features = [
    { icon: <FaLock style={iconStyle} />, title: 'Confidentiality', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maiores fugit recusandae perferendis repellendus. Debitis aliquam ipsa, nemo sequi fugit ducimus sint repellat, recusandae natus, ullam corporis in est magnam?' },
    { icon: <FaShieldAlt style={iconStyle} />, title: 'Security', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maiores fugit recusandae perferendis repellendus. Debitis aliquam ipsa, nemo sequi fugit ducimus sint repellat, recusandae natus, ullam corporis in est magnam?' },
    { icon: <FaUserShield style={iconStyle} />, title: 'Privacy', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maiores fugit recusandae perferendis repellendus. Debitis aliquam ipsa, nemo sequi fugit ducimus sint repellat, recusandae natus, ullam corporis in est magnam?' },
    { icon: <FaEye style={iconStyle} />, title: 'Visibility', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maiores fugit recusandae perferendis repellendus. Debitis aliquam ipsa, nemo sequi fugit ducimus sint repellat, recusandae natus, ullam corporis in est magnam?' },
    { icon: <FaKey style={iconStyle} />, title: 'Access Control', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maiores fugit recusandae perferendis repellendus. Debitis aliquam ipsa, nemo sequi fugit ducimus sint repellat, recusandae natus, ullam corporis in est magnam?' },
    { icon: <FaFingerprint style={iconStyle} />, title: 'Authentication', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maiores fugit recusandae perferendis repellendus. Debitis aliquam ipsa, nemo sequi fugit ducimus sint repellat, recusandae natus, ullam corporis in est magnam?' },
];

function AboutUs() {
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
        <div style={{ height: '125vh' }}>
            {/* HEADER BAR */}
            <nav className="navbar w-full fixed top-0 right-5 bg-transparent z-20 shadow-md">
                <div className="navbar-logo flex items-center space-x-2 whitespace-nowrap">
                    <img src="../images/ucover.png" alt="Logo" className="w-8 h-8" />
                    <span className="text-lg font-semibold text-black">U-Recover</span>
                </div>
                <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} style={{ backgroundColor: `black` }} onClick={toggleMenu}>
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

            {/* Section with a background image */}
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
                    <h2 className="text-5xl font-bold text-white">About Us</h2>
                </div>
            </section>


            {/* PARAGRAPH */}
            <div
                className="mx-auto p-4 mt-4 grid grid-cols-1 text-left mb-6 text-lg"
                style={{
                    maxWidth: '90vw', // Adjust as needed
                    width: '90vw', // Ensure the width is set explicitly
                }}
            >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero porro
                maiores suscipit reiciendis cumque. Maxime ipsam, facilis atque delectus
                eligendi ea debitis tenetur ad distinctio provident, amet quibusdam nisi
                obcaecati. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Necessitatibus magni consequatur voluptate, labore ut, rem velit ullam
                corrupti facilis minus id praesentium sit? Cupiditate accusamus inventore
                quae distinctio unde fugit? Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Ipsa maiores maxime magni architecto quasi, qui at harum
                quod a officiis id recusandae omnis quae sit blanditiis ad iste pariatur.
                Veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                reprehenderit possimus provident ipsum nostrum ad voluptatem
                necessitatibus. Aut quidem illo voluptates, minima repudiandae placeat
                voluptatem libero, non numquam repellendus eligendi.
            </div>

            {/* MISSION */}
            <div className="container antiinitialised mx-auto mt-4 max-w-4xl grid md:grid-cols-2 gap-2">
                <div className="w-full md-1/2 min-h-36  text-left text-lg p-4 md:order-first order-last  ">
                    <div>
                        <h1 className="text-green-600 font-bold text-2xl mb-2 "> Our Mission</h1>
                    </div>
                    <div className='text-black'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quia
                        animi incidunt sed corporis eveniet culpa recusandae et obcaecati
                        ducimus, sit accusamus nemo perferendis atque iure repellendus
                        sapiente reiciendis quidem? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Soluta libero placeat alias ipsa quas modi ducimus,
                        sequi nostrum quisquam sed eum possimus consequatur odio deleniti
                        quasi aliquid nobis. Excepturi, asperiores.
                    </div>
                </div>
                <div className="w-full md-1/2 min-h-36 ">
                    <img src={mission} alt="img" className="w-full h-full max-h-[300px]" />
                </div>

            </div>


            {/* VISION */}
            <div className="container antiinitialised mx-auto  mt-6 max-w-4xl grid md:grid-cols-2 gap-2 mb-4">
                <div className="w-full md-1/2 min-h-36 ">
                    <img src={vision} alt="img" className="w-full h-full max-h-[300px]" />
                </div>
                <div className="w-full md-1/2 min-h-36 text-left text-lg p-4 ">
                    <div>
                        <h1 className="text-green-600 font-bold text-2xl mb-2"> Our Vision</h1>
                    </div>
                    <div className='text-black'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quia
                        animi incidunt sed corporis eveniet culpa recusandae et obcaecati
                        ducimus, sit accusamus nemo perferendis atque iure repellendus
                        sapiente reiciendis quidem? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Soluta libero placeat alias ipsa quas modi ducimus,
                        sequi nostrum quisquam sed eum possimus consequatur odio deleniti
                        quasi aliquid nobis. Excepturi, asperiores.
                    </div>
                </div>
            </div>


            {/* COREVALUES */}
            <div className="container mx-auto antiinitialised max-w-4xl mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {features.map((feature, index) => (
                    <div key={index} className="w-full min-h-36 rounded-md shadow-md flex flex-col items-center justify-center p-2">
                        <div className="flex flex-col items-center justify-center space-y-4">
                            {feature.icon}
                            <h2 className="font-bold text-black">{feature.title}</h2>
                        </div>
                        <div className="text-sm text-center font-semibold mt-4 text-black">
                            {feature.description}
                        </div>
                    </div>
                ))}
            </div>


            {/* LEADER */}

            <div className="antiinitialised bg-gray-200 min-h-[55vh] p-6 relative w-full mt-4 mb-4 ">
                <div className="container mx-auto max-w-2xl flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold text-green-600">
                        {" "}
                        Our Leadership Team{" "}
                    </h1>
                    <p className="text-center font-semibold text-sm text-black">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
                        eligendi saepe voluptatem.
                    </p>
                </div>

                <div className="container mx-auto max-w-2xl mt-10 grid gap-2 grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                    <div className="relative min-h-36 shadow-sm flex items-center justify-center ">
                        <div className="bg-yellow-500 w-full h-full"></div>
                        <img
                            src={lead1}
                            alt="img"
                            className="max-h-[200px] w-[200px] absolute transform -translate-y-[28px] z-10"
                        />
                        <div className=" text-sm  text-center max-h-[200px] w-[200px] absolute transform translate-y-[100px] z-10">
                            {" "}
                            <h1 className="font-bold "> George Freeman </h1>{" "}
                            <span> Founder </span>
                        </div>
                    </div>

                    <div className="relative min-h-36 shadow-sm flex items-center justify-center ">
                        <div className="bg-blue-500 w-full h-full"></div>
                        <img
                            src={lead2}
                            alt="img"
                            className="max-h-[200px] w-[200px] absolute transform -translate-y-[28px] z-10"
                        />
                        <div className=" text-sm  text-center max-h-[200px] w-[200px] absolute transform translate-y-[100px] z-10">
                            {" "}
                            <h1 className="font-bold "> Esther Godswill </h1> <span> CEO</span>
                        </div>
                    </div>
                    <div className="relative min-h-36 shadow-sm flex items-center justify-center ">
                        <div className="bg-yellow-500 w-full h-full"></div>
                        <img
                            src={lead3}
                            alt="img"
                            className="max-h-[200px] w-[200px] absolute transform -translate-y-[28px] z-10"
                        />
                        <div className=" text-sm  text-center max-h-[200px] w-[200px] absolute transform translate-y-[100px] z-10">
                            {" "}
                            <h1 className="font-bold "> James Maxwell </h1>
                            <span> Product Manager </span>
                        </div>
                    </div>
                </div>
            </div>


            {/* CONTACT US */}
            <div className="container antiinitialised mx-auto mb-4 max-w-4xl grid md:grid-cols-2 gap-2">
                <div className="w-full md-1/2 min-h-36 ">
                    <img src={contact} alt="img" className="w-full h-full max-h-[420px]" />
                </div>
                <div className="w-full md-1/2 min-h-36 text-left text-lg p-4 ">
                    <div className="mb-4">
                        <h1 className="text-green-600 font-bold text-2xl mb-2"> Contact Us</h1>
                        <h3 className="text-black font-bold"> Do you have any questions ? </h3>
                    </div>
                    <div>
                        <form method="POST">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border border-green-600 p-2 rounded-lg placeholder-black placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Name" required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full border border-green-600 p-2 rounded-lg placeholder-black placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Email" required
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="resize-none w-full border border-green-600 p-2 rounded-lg placeholder-black placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
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
    )
}

export default AboutUs