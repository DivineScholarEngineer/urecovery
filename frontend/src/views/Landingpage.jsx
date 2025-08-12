// frontend/src/views/Landingpage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/Navbar.css';
import '../components/Landing.css';
import LogoutButton from '../components/LogoutButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faComments, faBlog, faUserFriends, faInfoCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../components/Homepage.css';
import '../components/Booksession.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import '../components/Quotepage.css';
import '../components/Articles.css';
import '../components/Latestblog.css';
import '../components/Meetup.css';
import '../components/Testimony.css';
import '../components/Resources.css';
import deeperLifeImage from '../../src/imgs/logo.png';
import billyGrahamImage from '../../src/imgs/rBGEA.png';
import uRecoverImage from '../../src/imgs/ucover.png';
import bg_deeperLifeImage from '../../src/imgs/rDLBC.png';
import bg_billyGrahamImage from '../../src/imgs/rBilly.png';
import bg_uRecoverImage from '../../src/imgs/rimg.png';
import '../components/Footer.css';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';

const articles = [
    {
        title: "Overcoming Suicidal Thoughts",
        content: "Lorem ipsum dolor sit amet Arcu lacus habitasse pellentesque mi. Scelerisque elit volutpat fhh posuere justo non tincidunt tincidunt.",
        image: "../images/Frame.png"
    },
    {
        title: "Overcoming Suicidal Thoughts",
        content: "Lorem ipsum dolor sit amet Arcu lacus habitasse pellentesque mi. Scelerisque elit volutpat fhh posuere justo non tincidunt tincidunt.",
        image: "../images/Frame.png"
    },
    {
        title: "Overcoming Suicidal Thoughts",
        content: "Lorem ipsum dolor sit amet Arcu lacus habitasse pellentesque mi. Scelerisque elit volutpat fhh posuere justo non tincidunt tincidunt.",
        image: "../images/Frame.png"
    },
    {
        title: "Overcoming Suicidal Thoughts",
        content: "Lorem ipsum dolor sit amet Arcu lacus habitasse pellentesque mi. Scelerisque elit volutpat fhh posuere justo non tincidunt tincidunt.",
        image: "../images/Frame.png"
    }
];

const blogs = [
    {
        title: "My Depression Experience in 2020",
        author: "Hannah Linus",
        image: "../images/Thubnail.png"
    },
    {
        title: "My Depression Experience in 2020",
        author: "Hannah Linus",
        image: "../images/Thubnail.png"
    },
    {
        title: "My Depression Experience in 2020",
        author: "Hannah Linus",
        image: "../images/Thubnail.png"
    },
    {
        title: "My Depression Experience in 2020",
        author: "Hannah Linus",
        image: "../images/Thubnail.png"
    },
    {
        title: "My Depression Experience in 2020",
        author: "Hannah Linus",
        image: "../images/Thubnail.png"
    },
    {
        title: "My Depression Experience in 2020",
        author: "Hannah Linus",
        image: "../images/Thubnail.png"
    },
    {
        title: "My Depression Experience in 2020",
        author: "Hannah Linus",
        image: "../images/Thubnail.png"
    },
    {
        title: "My Depression Experience in 2020",
        author: "Hannah Linus",
        image: "../images/Thubnail.png"
    }
];

const counselors = [
    {
        name: "Wade Warren",
        title: "Therapist",
        image: "../images/cou1.png"
    },
    {
        name: "Jenny Wilson",
        title: "Human Right Activist",
        image: "../images/cou2.png"
    },
    {
        name: "Albert Flores",
        title: "Marriage Coach",
        image: "../images/cou3.png"
    },
    {
        name: "Hannah Linus",
        title: "Motivational Speaker",
        image: "../images/cou4.png"
    }
];

const testimonies = [
    {
        id: 1,
        name: 'Hannah Linus',
        text: 'is lorem ipsum dolor sit amet consectetur. Augue neque non vitae ullamcorper dis fermentum urna. Turpis blandit id at elit. Consectetur ultrices purus cras commodo volutpat eget sagittis amet. Mattis rutrum et et aenean. Condimentum lectus aenean ut velit sit convallis. Egestas eget elit porta dolor scelerisque arcu eget. Egestas eget elit porta dolor scelerisque arcu eget.Egestas eget elit porta dolor scelerisque arcu. Egestas eget elit porta dolor scelerisque arcu eget.Egestas eget elit porta dolor scelerisque arcu. Massa in eget odio faucibus nibh. Integer in tellus in pellentesque at viverra. Interdum gravida amet.',
        image: '../images/cou3.png',
    },
    {
        id: 2,
        name: 'Hannah Linus',
        text: 'is lorem ipsum dolor sit amet consectetur. Augue neque non vitae ullamcorper dis fermentum urna. Turpis blandit id at elit. Consectetur ultrices purus cras commodo volutpat eget sagittis amet. Mattis rutrum et et aenean. Condimentum lectus aenean ut velit sit convallis. Egestas eget elit porta dolor scelerisque arcu eget. Egestas eget elit porta dolor scelerisque arcu eget.Egestas eget elit porta dolor scelerisque arcu. Egestas eget elit porta dolor scelerisque arcu eget. Egestas eget elit porta dolor scelerisque arcu eget.Egestas eget elit porta dolor scelerisque arcu. Massa in eget odio faucibus nibh. Integer in tellus in pellentesque at viverra. Interdum gravida amet.',
        image: '../images/cou4.png',
    },
];

const LandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { isAuthed } = useAuth();

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
    const handleBookSession = () => {
        navigate('/talk-to-counsellor');
    };
    const handleTestimonies = () => {
        navigate('/testimonies');
    };

    return (
        /* NAV BAR */

        <div className="Landing">

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
                    <Link to="/blogs" onClick={handleClickBlogs}>
                        <FontAwesomeIcon icon={faBlog} className="icon" />
                        Blogs
                    </Link>
                    <Link to="/talk-to-counsellor">
                        <FontAwesomeIcon icon={faUserFriends} className="icon" />
                        Book Session
                    </Link>
                    <Link to="/aboutus">
                        <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                        About Us
                    </Link>
                    <Link to="/testimonies" onClick={handleTestimonies}>
                        <FontAwesomeIcon icon={faComments} className="icon" />
                        Testimonies
                    </Link>
                    {/* AUTH section */}
                    {isAuthed ? (
                      <>
                        <Link to="/dashboard">
                          <FontAwesomeIcon icon={faUserFriends} className="icon" />
                          Account
                        </Link>
                        <LogoutButton to="/logged-out" />
                      </>
                    ) : (
                      <Link to="/login" onClick={handleClick}>
                        <FontAwesomeIcon icon={faSignInAlt} className="icon" />
                        Log in
                      </Link>
                    )}
                </div>
            </nav>

            {/* HOME-PAGE */}

            <div className="home-page">
                <Carousel showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    useKeyboardArrows
                    autoPlay
                    interval={3000}>
                    <div className="image-container">
                        <div className="image-overlay"></div>
                        <img src="../images/gp.png" alt="Main" />
                        <div className="text-columns">
                            <div className="container no-background">
                                <h2>THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE</h2>
                                <p>Romans 8:38-39 - "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."</p>
                            </div>
                            <div className="container no-background">
                                <h2>THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE</h2>
                                <p>Romans 8:38-39 - "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."</p>
                            </div>
                            <div className="container no-background">
                                <h2>THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE</h2>
                                <p>Romans 8:38-39 - "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."</p>
                            </div>
                        </div>
                    </div>
                    <div className="image-container">
                        <div className="image-overlay"></div>
                        <img src="../images/gp.png" alt="Main" />
                        <div className="text-columns">
                            <div className="container no-background">
                                <h2>THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE</h2>
                                <p>Matthew 11:28-30 - "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light."</p>
                            </div>
                            <div className="container no-background">
                                <h2>THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE</h2>
                                <p>Matthew 11:28-30 - "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light."</p>
                            </div>
                            <div className="container no-background">
                                <h2>THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE</h2>
                                <p>Matthew 11:28-30 - "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light."</p>
                            </div>
                        </div>
                    </div>
                    <div className="image-container">
                        <div className="image-overlay"></div>
                        <img src="../images/gp.png" alt="Main" />
                        <div className="text-columns">
                            <div className="container no-background">
                                <h2>THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE</h2>
                                <p>Isaiah 41:10 - "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."</p>
                            </div>
                            <div className="container no-background">
                                <h2>THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE</h2>
                                <p>Isaiah 41:10 - "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."</p>
                            </div>
                            <div className="container no-background">
                                <h2>THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE</h2>
                                <p>Isaiah 41:10 - "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."</p>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>

            {/* BOOKSESSION */}
            <div className="container-book">
                <div className="text-column">
                    <h2>Talk to a Counsellor</h2>
                    <p>
                        Life can sometimes feel overwhelmingly difficult, and when you're facing such intense emotions, it can be hard to see a way out. But I want you to know that there is hope and there are people who care deeply about you, including our Heavenly Father. Jeremiah 29:11 tells us, "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future."
                    </p>
                    <button className="book-button" onClick={handleBookSession}>Book Session</button>
                </div>
                <div className="image-column">
                    <img src="../images/book_session.png" alt="Booking Session" className="image" />
                </div>
            </div>


            {/* Quotepage */}
            <div className="quote-container">
                <div className="quote-content">
                    <FaQuoteLeft className="quote-open" />
                    <p className="quote-text">
                        The greatest glory in living lies not in never falling, but in rising every time we fall. It's not about being perfect, it's about being resilient. Every setback is an opportunity to learn and grow, to come back stronger and wiser than before
                    </p>
                    <div className="quote-author">
                        <img src="../images/quote.png" alt="Author" className="author-image" />
                        <div className="author-name">John Lennon</div>
                    </div>
                    <FaQuoteRight className="quote-close" />
                </div>
            </div>


            {/* Articles  */}
            <div className="articles-container">
                <h1>Our Latest Articles</h1>
                <p>Read our articles that covers diverse spheres of life</p>
                <div className="articles">
                    {articles.map((article, index) => (
                        <div className="article" key={index}>
                            <img src={article.image} alt={article.title} />
                            <h2>{article.title}</h2>
                            <p>{article.content}</p>
                        </div>
                    ))}
                </div>
                <button className="view-more" onClick={handleClickArticle}>View More</button>
            </div>

            {/* LatestBlog */}
            <div className="latest-blog-container">
                <h1>Latest Blog</h1>
                <p>Keep yourself motivated with our inspiring blogs</p>
                <div className="blogs">
                    {blogs.map((blog, index) => (
                        <div className="blog" key={index}>
                            <img src={blog.image} alt={blog.title} />
                            <h2>{blog.title}</h2>
                            <p>By {blog.author}</p>
                        </div>
                    ))}
                </div>
                <button className="view-more" onClick={handleClickBlogs}>View More</button>
            </div>

            {/* Meetup */}
            <div className="meetup-container">
                <h1>Meet Our Counsellors</h1>
                <div className="underline"></div>
                <div className="counselors">
                    {counselors.map((counselor, index) => (
                        <div className="counselor" key={index}>
                            <img src={counselor.image} alt={counselor.name} />
                            <h2>{counselor.name}</h2>
                            <p>{counselor.title}</p>
                        </div>
                    ))}
                </div>
                <button className="view-more">View More</button>
            </div>

            {/* Testimony */}

            <div className="testimonies">
                <h2 className="testimonies-title">Testimonies</h2>
                {testimonies.map((testimony, index) => (
                    <div key={testimony.id} className={`testimony ${index % 2 === 0 ? 'even' : 'odd'}`}>
                        <img src={testimony.image} alt={testimony.name} className="testimony-image" />
                        <div className="testimony-content">
                            <h3>{testimony.name}</h3>
                            <p>{testimony.text}</p>
                            <button className="read-more-button">Read More</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Resources */}
            <div className="resources-container">
                <h2 className="resources-title">Resources</h2>
                <div className="resources-content">
                    <div className="resource-item">
                        <div className="resource-card" style={{ backgroundImage: `url(${bg_deeperLifeImage})` }}>
                            <img src={deeperLifeImage} alt="Deeper Christian Life Ministry" className="resource-image" />
                        </div>
                        <div className="resource-caption">Deeper Christian Life Ministry</div>
                    </div>
                    <div className="resource-item">
                        <div className="resource-card" style={{ backgroundImage: `url(${bg_billyGrahamImage})` }}>
                            <img src={billyGrahamImage} alt="Billy Graham Evangelical Association" className="resource-image" />
                        </div>
                        <div className="resource-caption">Billy Graham Evangelical Association</div>
                    </div>
                    <div className="resource-item">
                        <div className="resource-card" style={{ backgroundImage: `url(${bg_uRecoverImage})` }}>
                            <img src={uRecoverImage} alt="U - Recover" className="resource-image" />
                        </div>
                        <div className="resource-caption">U - Recover</div>
                    </div>
                </div>
            </div>

            {/* Footer */}

            <footer className="footer">
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

    );
};

export default LandingPage;
