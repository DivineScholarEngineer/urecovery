import React, { useState } from 'react';
import png1 from '../assets/pexels-linkedin-1251832.png';
import png2 from '../assets/pexels-vlada-karpovich-4050347.png';
import png3 from '../assets/Deeper-life-logo-final-outlines-.png';
import billyGrahamImage from '../../src/imgs/rBGEA.png';
import uRecoverImage from '../../src/imgs/ucover.png';
import { FiChevronDown } from 'react-icons/fi';
import { faHome, faNewspaper, faBlog, faUserFriends, faInfoCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../components/Footer.css';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';

function ArticlesWriteup() {


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
    }; */

    const articles = [
        { title: 'Article Title 1', author: 'Author 1', image: png1, msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales mi nec mauris tincidunt, sit amet viverra augue malesuada.' },
        { title: 'Article Title 2', author: 'Author 2', image: png1, msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales mi nec mauris tincidunt, sit amet viverra augue malesuada.' },
        { title: 'Article Title 3', author: 'Author 3', image: png1, msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales mi nec mauris tincidunt, sit amet viverra augue malesuada.' },
        { title: 'Article Title 4', author: 'Author 4', image: png1, msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales mi nec mauris tincidunt, sit amet viverra augue malesuada.' },
        { title: 'Article Title 5', author: 'Author 5', image: png1, msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales mi nec mauris tincidunt, sit amet viverra augue malesuada.' },
        { title: 'Article Title 6', author: 'Author 6', image: png1, msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales mi nec mauris tincidunt, sit amet viverra augue malesuada.' },
        { title: 'Article Title 7', author: 'Author 7', image: png1, msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales mi nec mauris tincidunt, sit amet viverra augue malesuada.' },
        { title: 'Article Title 8', author: 'Author 8', image: png1, msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales mi nec mauris tincidunt, sit amet viverra augue malesuada.' },
        { title: 'Article Title 9', author: 'Author 9', image: png1, msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales mi nec mauris tincidunt, sit amet viverra augue malesuada.' },

    ];

    return (
        <div style={{ height: `125vh`, overflowX: '' }}>


            {/* HEADER BAR */}
            <nav className="navbar w-full fixed top-0 bg-transparent z-20 shadow-md">
                <div className="navbar-logo">
                    <img src="../images/ucover.png" alt="Logo" />
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

                    <Link to="/counsellors-profile">
                        <FontAwesomeIcon icon={faUserFriends} className="icon" />
                        Book Session
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

            {/* MAIN-PAGE */}
            <div className="container mx-auto flex flex-col p-4 mt-4">
                <div className="w-full">
                    <h2> Holiness </h2>
                    <h1 className='text-3xl font-bold mt-2'>Embracing a Lifestyle of holiness in a persevere world</h1>
                </div>
                <div className="w-full mt-2">
                    <img src={png1} alt="img" />
                </div>
                <div className="w-full mt-2">
                    <p className='text-xl'>
                        The standard Lorem Ipsum passage, used since the 1500s Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </p>
                </div>
            </div>


            <div className='container mx-auto flex flex-col md:flex-row p-4 mt-4'>
                <div className='w-full md:w-1/2 flex flex-col text-lg font-semibold p-4'>

                    <h2 className="font-bold text-2xl"> Talk to Counsellor </h2>
                    <p className="mt-2 mb-2">
                        Lorem Ipsum dolor sit amet Arcu lacus habitaste
                        pellentesque mi. Sclerisquw alit volutpat elit psuere
                        justo non tincidunt tincidunt. In ay proin sed consectetur convallis sit imperdiet
                    </p>
                    <button className="text-left rounded-md text-white px-4 py-2 bg-green-700 w-[150px] hover:bg-green-600"> Book Session </button>

                </div>

                <div className="w-full md:w-1/2 rounded-md flex items-center justify-center ">
                    <img src={png2} alt='img' className="max-w-full" />

                </div>

            </div>


            {/* RELATED ARTICLES */}
            <>
                <section className="container mx-auto p-4">
                    <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {articles.map((article, index) => (
                            <div key={index} className="bg-white p-4 shadow-md rounded-lg">
                                <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded-md mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                                <p className="text-3xl font-bold text-blue-600 text-sm" style={{ color: 'black' }}> {article.msg}</p>
                                <p className="text-5xl font-bold text-blue-600 text-sm" style={{ color: 'black' }}>Written by : {article.author}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <div className="flex items-center rounded-full justify-center mt-8 ">
                        <hr className="flex-grow border-t border-gray-300 mr-4 " />
                        <a href="/articles" className="flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded-md text-sm hover:bg-green-700 transition duration-300">
                            View All Articles <FiChevronDown className="ml-2" />
                        </a>
                        <hr className="flex-grow border-t border-gray-300 ml-4" />
                    </div>
                </section>

            </>

            {/* RESOURCES */}
            <div className='bg-gray-100 flex flex-col justify-center items-center mt-4'>
                <div>
                    <h1> Resources </h1>
                </div>
                <div className='container mx-auto p-4 flex flex-col md:flex-row w-full  '>
                    <div className="w-full md:w-1/4 p-2 m-2">
                        <div className='h-64 bg-green-600  m-2 flex items-center justify-center rounded-md shadow-md'> <img src={png3} alt='PIC' className="w-[100px] h-[100px] px-4 py-2 rounded-md shadow-md" /></div>
                        <div className="flex items-center justify-center"> <h3 className="text-sm text-center font-bold" style={{ color: 'black' }}> Deeper Christian Life Ministry </h3></div>
                    </div>
                    <div className="w-full md:w-1/4 p-2 m-2">
                        <div className='h-64 bg-green-600 m-2 flex items-center justify-center rounded-md shadow-md'> <img src={billyGrahamImage} alt='PIC' className="w-[100px] h-[100px] px-4 py-2 rounded-md shadow-md" /></div>
                        <div className="flex items-center justify-center"> <h3 className="text-sm text-center font-bold" style={{ color: 'black' }}> Billy Graham Evangelical Association</h3></div>
                    </div>
                    <div className="w-full md:w-1/4 p-2 m-2">
                        <div className='h-64 bg-green-600 m-2 flex items-center justify-center rounded-md shadow-md'> <img src={uRecoverImage} alt='PIC' className="w-[100px] h-[100px] px-4 py-2 rounded-md shadow-md" style={{ borderRadius: 80 }} /></div>
                        <div className="flex items-center justify-center"> <h3 className="text-sm text-center font-bold" style={{ color: 'black' }}> U-Recover </h3></div>
                    </div>
                    <div className="w-full md:w-1/4 p-2 m-2">
                        <div className='h-64 bg-green-600 m-2 flex items-center justify-center rounded-md shadow-md'> <img src={uRecoverImage} alt='PIC' className="w-[100px] h-[100px] px-4 py-2 rounded-md shadow-md" style={{ borderRadius: 80 }} /></div>
                        <div className="flex items-center justify-center"> <h3 className="text-sm text-center font-bold" style={{ color: 'black' }}> U - Recover </h3></div>
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

export default ArticlesWriteup