import React, { useState } from 'react';
import { faHome, faNewspaper, faBlog, faUserFriends, faInfoCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import png1 from '../assets/pexels-vlada-karpovich-4050347.png';
import png2 from '../assets/Deeper-life-logo-final-outlines-.png'
import { FiChevronDown } from 'react-icons/fi';
import '../components/Footer.css';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';



const articles = [
    { title: 'My Depression Experience in 2020', author: 'Author 1', image: png1 },
    { title: 'My Depression Experience in 2020', author: 'Author 2', image: png1 },
    { title: 'My Depression Experience in 2020', author: 'Author 3', image: png1 },
    { title: 'My Depression Experience in 2020', author: 'Author 4', image: png1 },
    { title: 'My Depression Experience in 2020', author: 'Author 5', image: png1 },
    { title: 'My Depression Experience in 2020', author: 'Author 6', image: png1 },
    { title: 'My Depression Experience in 2020', author: 'Author 7', image: png1 },
    { title: 'My Depression Experience in 2020', author: 'Author 8', image: png1 },
    { title: 'My Depression Experience in 2020', author: 'Author 9', image: png1 },

];


function BlogsWriteup(props) {
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

            {/* BLOGS TREND */}
            <div className="container mx-auto p-4 mt-4 flex flex-col md:flex-row space-x-4 ">

                <div className="w-full md:w-1/2 mr-2 flex flex-col">

                    <div className=''>
                        <img src={png1} alt='img' className="w-full " />
                        <strong className="text-sm font-sm"> Holiness </strong>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold"> Living a Life of Holiness </h2>
                        <p className="text-sm"> Lorem Ipsum dolor sit amet Consecteur . faucibis id oursus
                            The Popliteal fossa is a transmitting neurovascular structure posterior to the knee
                            The Boundaries of the Popliteal fossa.
                            The superior lateral boder is the Biceps femoris
                            The superior medial border is are the semitendinosus and semimebranosus
                            The inferior lateral boarder is the lateral head of the gastrocnemius
                            The inferior medial border is the medial head of the gastrocnemius
                            The floor of the Popliteal fossa includes the Popliteus muscle
                            The roof of the popliteal fossa include the superficial and deep popliteal fasica, and the skin
                            The contents of the popliteal fossa include the saphenous vein, the popliteal arteries and vein...
                            <a href="/" className="text-green-600 hover:text-green-500 text-sm"> See More</a>
                        </p>

                    </div>

                </div>

                <div className="w-full md:w-1/2 ml-2 flex flex-col ">

                    <div className="mb-4">
                        <h2 className="font-bold text-green-800"> Trending Blogs </h2>
                    </div>

                    <div className="flex flex-row justify-center items-center p-4 space-x-2 rounded-md shadow-md">

                        <div className="w-1/2 "> <img src={png1} alt='img' /></div>
                        <div className="w-1/2 flex flex-col">
                            <h3 className="text-sm text-lg"> Health </h3>
                            <h2 className="font-semibold text-xl"> Living a Life of Holiness </h2>
                            <h3 className="text-sm"> By Hannah Linus </h3>
                        </div>

                    </div>
                    <div className="flex flex-row justify-center items-center p-4 space-x-2 rounded-md shadow-md">

                        <div className="w-1/2 "> <img src={png1} alt='img' /></div>
                        <div className="w-1/2 flex flex-col">
                            <h3 className="text-sm text-lg"> Health </h3>
                            <h2 className="font-semibold text-xl"> Living a Life of Holiness </h2>
                            <h3 className="text-sm"> By Hannah Linus </h3>
                        </div>

                    </div>
                    <div className="flex flex-row justify-center items-center p-4 space-x-2 rounded-md shadow-md">

                        <div className="w-1/2 "> <img src={png1} alt='img' /></div>
                        <div className="w-1/2 flex flex-col">
                            <h3 className="text-sm text-lg"> Health </h3>
                            <h2 className="font-semibold text-xl"> Living a Life of Holiness </h2>
                            <h3 className="text-sm"> By Hannah Linus </h3>
                        </div>
                    </div>
                </div>
            </div>


            {/* COUNSELLOR PAGE */}
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
                    <img src={png1} alt='img' className="max-w-full" />

                </div>
            </div>


            {/* BLOG LIST */}
            <>

                <section className="container mx-auto p-4">
                    <h2 className="text-2xl font-bold mb-4"> {props.title || 'Popular Blogs'} </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {articles.map((article, index) => (
                            <div key={index} className="bg-white p-4 shadow-md rounded-lg">
                                <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded-md mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>

                                <p className="text-gray-700 text-sm">By {article.author}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <div className="flex items-center rounded-full justify-center mt-8 ">
                        <hr className="flex-grow border-t border-gray-300 mr-4 " />
                        <a href="/articles" className="flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded-md text-sm hover:bg-green-700 transition duration-300">
                            See More <FiChevronDown className="ml-2" />
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
                        <div className='h-64 bg-green-600  m-2 flex items-center justify-center rounded-md shadow-md'> <img src={png2} alt='PIC' className="w-[100px] h-[100px] px-4 py-2 rounded-md shadow-md" /></div>
                        <div className="flex items-center justify-center"> <h4 style={{ color: 'black' }} className="text-sm text-center font-bold"> Deeper Christian Life Ministry </h4></div>

                    </div>
                    <div className="w-full md:w-1/4 p-2 m-2">
                        <div className='h-64 bg-green-600 m-2 flex items-center justify-center rounded-md shadow-md'> <img src={png2} alt='PIC' className="w-[100px] h-[100px] px-4 py-2 rounded-md shadow-md" /></div>
                        <div className="flex items-center justify-center"> <h4 style={{ color: 'black' }} className="text-sm text-center font-bold"> Billy Graham Evangelical Association</h4></div>

                    </div>
                    <div className="w-full md:w-1/4 p-2 m-2">
                        <div className='h-64 bg-green-600 m-2 flex items-center justify-center rounded-md shadow-md'> <img src={png2} alt='PIC' className="w-[100px] h-[100px] px-4 py-2 rounded-md shadow-md" /></div>
                        <div className="flex items-center justify-center"> <h4 style={{ color: 'black' }} className="text-sm text-center font-bold"> U-Recover </h4></div>

                    </div>
                    <div className="w-full md:w-1/4 p-2 m-2">
                        <div className='h-64 bg-green-600 m-2 flex items-center justify-center rounded-md shadow-md'> <img src={png2} alt='PIC' className="w-[100px] h-[100px] px-4 py-2 rounded-md shadow-md" /></div>
                        <div className="flex items-center justify-center"> <h4 style={{ color: 'black' }} className="text-sm text-center font-bold"> U - Recover </h4></div>

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

export default BlogsWriteup