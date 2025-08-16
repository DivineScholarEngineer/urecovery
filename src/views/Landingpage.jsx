// Path: frontend/src/views/Landingpage.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/Navbar.css';
import '../components/Landing.css';
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
import heroBackgrounds from '../data/heroBackgrounds.json';

// ---------- DATA: Articles, Blogs, Counselors, Testimonies ----------
const articles = [
  { title: 'Overcoming Suicidal Thoughts', content: 'Lorem ipsum dolor sit amet Arcu lacus habitasse pellentesque mi. Scelerisque elit volutpat fhh posuere justo non tincidunt tincidunt.', image: '../images/Frame.png' },
  { title: 'Overcoming Suicidal Thoughts', content: 'Lorem ipsum dolor sit amet Arcu lacus habitasse pellentesque mi. Scelerisque elit volutpat fhh posuere justo non tincidunt tincidunt.', image: '../images/Frame.png' },
  { title: 'Overcoming Suicidal Thoughts', content: 'Lorem ipsum dolor sit amet Arcu lacus habitasse pellentesque mi. Scelerisque elit volutpat fhh posuere justo non tincidunt tincidunt.', image: '../images/Frame.png' },
  { title: 'Overcoming Suicidal Thoughts', content: 'Lorem ipsum dolor sit amet Arcu lacus habitasse pellentesque mi. Scelerisque elit volutpat fhh posuere justo non tincidunt tincidunt.', image: '../images/Frame.png' }
];

const blogs = [
  { title: 'My Depression Experience in 2020', author: 'Hannah Linus', image: '../images/Thubnail.png' },
  { title: 'My Depression Experience in 2020', author: 'Hannah Linus', image: '../images/Thubnail.png' },
  { title: 'My Depression Experience in 2020', author: 'Hannah Linus', image: '../images/Thubnail.png' },
  { title: 'My Depression Experience in 2020', author: 'Hannah Linus', image: '../images/Thubnail.png' },
  { title: 'My Depression Experience in 2020', author: 'Hannah Linus', image: '../images/Thubnail.png' },
  { title: 'My Depression Experience in 2020', author: 'Hannah Linus', image: '../images/Thubnail.png' },
  { title: 'My Depression Experience in 2020', author: 'Hannah Linus', image: '../images/Thubnail.png' },
  { title: 'My Depression Experience in 2020', author: 'Hannah Linus', image: '../images/Thubnail.png' }
];

const counselors = [
  { name: 'Wade Warren', title: 'Therapist', image: '../images/cou1.png' },
  { name: 'Jenny Wilson', title: 'Human Right Activist', image: '../images/cou2.png' },
  { name: 'Albert Flores', title: 'Marriage Coach', image: '../images/cou3.png' },
  { name: 'Hannah Linus', title: 'Motivational Speaker', image: '../images/cou4.png' }
];

const testimonies = [
  {
    id: 1,
    name: 'Hannah Linus',
    text:
      'is lorem ipsum dolor sit amet consectetur. Augue neque non vitae ullamcorper dis fermentum urna. Turpis blandit id at elit. Consectetur ultrices purus cras commodo volutpat eget sagittis amet. Mattis rutrum et et aenean. Condimentum lectus aenean ut velit sit convallis. Egestas eget elit porta dolor scelerisque arcu eget. Egestas eget elit porta dolor scelerisque arcu eget.Egestas eget elit porta dolor scelerisque arcu. Egestas eget elit porta dolor scelerisque arcu eget.Egestas eget elit porta dolor scelerisque arcu. Massa in eget odio faucibus nibh. Integer in tellus in pellentesque at viverra. Interdum gravida amet.',
    image: '../images/cou3.png'
  },
  {
    id: 2,
    name: 'Hannah Linus',
    text:
      'is lorem ipsum dolor sit amet consectetur. Augue neque non vitae ullamcorper dis fermentum urna. Turpis blandit id at elit. Consectetur ultrices purus cras commodo volutpat eget sagittis amet. Mattis rutrum et et aenean. Condimentum lectus aenean ut velit sit convallis. Egestas eget elit porta dolor scelerisque arcu eget. Egestas eget elit porta dolor scelerisque arcu eget.Egestas eget elit porta dolor scelerisque arcu. Egestas eget elit porta dolor scelerisque arcu eget. Egestas eget elit porta dolor scelerisque arcu eget.Egestas eget elit porta dolor scelerisque arcu. Massa in eget odio faucibus nibh. Integer in tellus in pellentesque at viverra. Interdum gravida amet.',
    image: '../images/cou4.png'
  }
];

// ---------- Utilities to resolve heroBackgrounds.json and preload images ----------
function resolveBgListFromJson(json) {
  // Accepts several shapes; prioritizes object with PERS1, PERS2, PERS3 keys
  if (json && typeof json === 'object' && !Array.isArray(json)) {
    const poss = [
      json.PERS1 || json.pers1 || json.PERS_1 || json['PERS-1'],
      json.PERS2 || json.pers2 || json.PERS_2 || json['PERS-2'],
      json.PERS3 || json.pers3 || json.PERS_3 || json['PERS-3']
    ].filter(Boolean);
    if (poss.length) return poss;
    if (Array.isArray(json.images)) return json.images.map((x) => (typeof x === 'string' ? x : x?.url || x?.image)).filter(Boolean);
    if (Array.isArray(json.backgrounds)) return json.backgrounds.map((x) => (typeof x === 'string' ? x : x?.url || x?.image)).filter(Boolean);
  }
  if (Array.isArray(json)) {
    return json.map((x) => (typeof x === 'string' ? x : x?.url || x?.image)).filter(Boolean);
  }
  return [];
}

const fallbackHeroImgs = [
  '../images/gp.png',
  bg_uRecoverImage,
  '../images/hero1.jpg',
  '../images/hero2.jpg',
  '../images/hero3.jpg',
  bg_billyGrahamImage,
  bg_deeperLifeImage
];

const bgListResolved = (() => {
  const list = resolveBgListFromJson(heroBackgrounds);
  return list.length ? list : fallbackHeroImgs;
})();

function usePreloadImages(urls = []) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let isMounted = true;
    let loaded = 0;
    if (!urls.length) {
      setReady(true);
      return;
    }
    const imgs = urls.map((src) => {
      const im = new Image();
      im.onload = () => {
        loaded += 1;
        if (isMounted && loaded >= urls.length) setReady(true);
      };
      im.onerror = () => {
        loaded += 1;
        if (isMounted && loaded >= urls.length) setReady(true);
      };
      im.src = src;
      return im;
    });
    return () => {
      isMounted = false;
      imgs.splice(0, imgs.length);
    };
  }, [urls]);
  return ready;
}

// ---------- HERO / VERSE SLIDES (One-at-a-time, centered) ----------
const verseSlides = [
  {
    id: 1,
    title: 'THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE',
    ref: 'Romans 8:38–39',
    text:
      '“For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, ' +
      'neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.”'
  },
  {
    id: 2,
    title: 'THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE',
    ref: 'Matthew 11:28–30',
    text:
      '“Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, ' +
      'for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light.”'
  },
  {
    id: 3,
    title: 'THE LAST WORDS THAT IS ALWAYS BEFORE A DEPRESSED STATE',
    ref: 'Isaiah 41:10',
    text:
      '“So do not fear, for I am with you; do not be dismayed, for I am your God. ' +
      'I will strengthen you and help you; I will uphold you with my righteous right hand.”'
  }
];

function combineSlidesWithBackgrounds(slides, backgrounds) {
  if (!slides.length) return [];
  const imgs = backgrounds.length ? backgrounds : fallbackHeroImgs;
  return slides.map((s, i) => ({
    ...s,
    image: imgs[i % imgs.length]
  }));
}

function useInterval(callback, delay, active = true) {
  const saved = useRef(callback);
  useEffect(() => {
    saved.current = callback;
  }, [callback]);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => saved.current(), delay);
    return () => clearInterval(id);
  }, [delay, active]);
}

function SlideProgress({ progress }) {
  return (
    <div className="hero-progress" aria-hidden>
      <div className="hero-progress-track">
        <div className="hero-progress-bar" style={{ width: `${Math.min(100, Math.max(0, progress))}%` }} />
      </div>
    </div>
  );
}

function DotIndicators({ total, current, onJump }) {
  return (
    <div className="hero-dots" role="tablist" aria-label="Slide indicators">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={current === i}
          aria-label={`Go to slide ${i + 1}`}
          className={`hero-dot ${current === i ? 'active' : ''}`}
          onClick={() => onJump(i)}
        />
      ))}
    </div>
  );
}

function HeroCard({ slide }) {
  return (
    <div className="hero-card" role="group" aria-roledescription="slide" aria-label={`${slide.ref}`}>
      <div className="hero-card-heading">{slide.title}</div>
      <div className="hero-card-ref">{slide.ref}</div>
      <div className="hero-card-text">{slide.text}</div>
    </div>
  );
}

function HeroBackdrop({ image, noTint }) {
  return (
    <div className="hero-backdrop">
      <img src={image} alt="" className="hero-backdrop-img" />
      {/* More transparent overlay so image shines through; can disable with #debugHero */}
      <div className="hero-backdrop-tint" style={noTint ? { background: 'transparent' } : undefined} />
      <div className="hero-backdrop-vignette" />
    </div>
  );
}

function CenterBadgeNumber({ index, total }) {
  // Only the counter "1 of 3" — no PERS text
  return (
    <div className="hero-center-badge" aria-live="polite">
      <span className="hero-center-badge-mid">{index + 1}</span>
      <span className="hero-center-badge-sub">of {total}</span>
    </div>
  );
}

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();

  const slides = useMemo(() => combineSlidesWithBackgrounds(verseSlides, bgListResolved), []);
  const imagesReady = usePreloadImages(slides.map((s) => s.image));

  const autoPlayMs = 3800;
  const progressTickMs = 60;

  // debug flag to temporarily remove tint: add #debugHero to URL
  const debugNoTint = typeof window !== 'undefined' && window.location.hash.includes('debugHero');

  useInterval(
    () => {
      setProgress((p) => {
        const n = p + (progressTickMs / autoPlayMs) * 100;
        if (n >= 100) {
          setCurrent((c) => (c + 1) % slides.length);
          return 0;
        }
        return n;
      });
    },
    progressTickMs,
    !paused && imagesReady
  );

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % slides.length);
      if (e.key === 'ArrowLeft') setCurrent((c) => (c - 1 + slides.length) % slides.length);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [slides.length]);

  useEffect(() => {
    setProgress(0);
  }, [current]);

  const toggleMenu = () => setIsOpen((v) => !v);
  const handleClick = () => navigate('/login');
  const handleClickArticle = () => navigate('/articles');
  const handleClickBlogs = () => navigate('/blogs');
  const handleBookSession = () => navigate('/talk-to-counsellor');
  const handleTestimonies = () => navigate('/testimonies');
  const jumpTo = (i) => {
    setCurrent(i);
    setProgress(0);
  };

  return (
    <div className="Landing">
      {/* NAV BAR */}
      <nav className="navbar w-full fixed top-0 bg-transparent z-20 shadow-md">
        <div className="navbar-logo flex items-center space-x-2 whitespace-nowrap">
          <img src="../images/ucover.png" alt="Logo" className="w-8 h-8" />
          <span className="text-lg font-semibold text-black">U-Recover</span>
        </div>

        <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} style={{ backgroundColor: 'black', marginRight: '10px' }} onClick={toggleMenu}>
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
          <Link to="/login" onClick={handleClick}>
            <FontAwesomeIcon icon={faSignInAlt} className="icon" />
            Log in
          </Link>
        </div>
      </nav>

      {/* HOME-PAGE HERO (One-at-a-time, centered, smooth, with PERS label removed) */}
      <div
        className="home-page"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <Carousel
          selectedItem={current}
          onChange={(i) => setCurrent(i)}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          emulateTouch
          useKeyboardArrows
          swipeable
          centerMode
          centerSlidePercentage={100}
          autoPlay={false}
          interval={autoPlayMs}
          transitionTime={520}
          stopOnHover={false}
          dynamicHeight={false}
        >
          {slides.map((s, idx) => (
            <div className="hero-slide-single" key={s.id || idx} role="group" aria-roledescription="slide" aria-label={`Slide ${idx + 1} of ${slides.length}`}>
              <HeroBackdrop image={s.image} noTint={debugNoTint} />
              <div className="hero-foreground">
                {/* Number indicator only */}
                <CenterBadgeNumber index={idx} total={slides.length} />
                {/* The scripture card */}
                <HeroCard slide={s} />
                <div className="hero-cta-row">
                  <button className="hero-cta primary" onClick={handleBookSession}>Book Session</button>
                  <button className="hero-cta ghost" onClick={handleClickArticle}>Read Articles</button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <SlideProgress progress={progress} />
        <DotIndicators total={slides.length} current={current} onJump={jumpTo} />
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

      {/* QUOTEPAGE */}
{/* QUOTEPAGE */}
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


      {/* ARTICLES */}
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

      {/* LATEST BLOG */}
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

      {/* MEETUP */}
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

      {/* TESTIMONY */}
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

      {/* RESOURCES */}
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

      {/* FOOTER */}
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

      {/* Inline, functional styles (class hooks used by your CSS) */}
      <style>{`
        .hero-slide-single { position: relative; height: 72vh; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .hero-backdrop { position: absolute; inset: 0; }
        .hero-backdrop-img { width: 100%; height: 100%; object-fit: cover; filter: saturate(0.98) contrast(1.02) brightness(1.03); }
        /* More transparent green tint so the image shines through like your screenshot */
        .hero-backdrop-tint { position: absolute; inset: 0; background: radial-gradient(60% 60% at 50% 50%, rgba(13,97,34,0.18), rgba(0,0,0,0.22)); pointer-events: none; }
        .hero-backdrop-vignette { position: absolute; inset: 0; box-shadow: inset 0 0 120px 40px rgba(0,0,0,0.42); pointer-events: none; }
        .hero-foreground { position: relative; z-index: 2; width: min(1024px, 92%); margin-inline: auto; display: grid; gap: 16px; place-items: center; }
        .hero-center-badge { display: grid; place-items: center; text-align: center; transform: translateY(-6px); }
        /* Removed the PERS label entirely — we only keep the numeric counter */
        .hero-center-badge-mid { display: block; font-weight: 800; font-size: 56px; line-height: 1; color: #ffffff; text-shadow: 0 10px 24px rgba(0,0,0,0.35); margin-top: 6px; }
        .hero-center-badge-sub { font-size: 13px; color: #e7ffeF; opacity: 0.95; margin-top: -2px; }
        .hero-card { backdrop-filter: blur(6px); background: linear-gradient(180deg, rgba(11,45,22,0.40), rgba(7,24,12,0.36)); border: 1px solid rgba(255,255,255,0.14); border-radius: 16px; padding: 22px 22px 20px; width: min(880px, 92%); box-shadow: 0 12px 48px rgba(0,0,0,0.35); }
        .hero-card-heading { color: #f3fff8; font-weight: 700; font-size: clamp(16px, 2.2vw, 22px); margin-bottom: 8px; letter-spacing: 0.03em; text-align: center; }
        .hero-card-ref { color: #c2ffd6; font-weight: 600; text-align: center; margin-bottom: 8px; }
        .hero-card-text { color: #eafff2; font-size: clamp(14px, 1.8vw, 17px); line-height: 1.55; text-align: center; }
        .hero-cta-row { display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 10px; }
        .hero-cta { border-radius: 999px; padding: 10px 16px; font-weight: 600; border: 1px solid rgba(255,255,255,0.22); cursor: pointer; }
        .hero-cta.primary { background: #16a34a; color: #fff; }
        .hero-cta.ghost { background: rgba(0,0,0,0.28); color: #e8fff2; }
        .hero-progress { position: absolute; left: 50%; transform: translateX(-50%); bottom: 18px; width: min(520px, 72%); z-index: 3; }
        .hero-progress-track { height: 4px; background: rgba(255,255,255,0.22); border-radius: 999px; overflow: hidden; }
        .hero-progress-bar { height: 100%; background: linear-gradient(90deg, #86efac, #22c55e); transition: width 60ms linear; }
        .hero-dots { position: absolute; right: 18px; bottom: 14px; display: flex; gap: 8px; z-index: 3; }
        .hero-dot { width: 9px; height: 9px; border-radius: 999px; border: none; background: rgba(255,255,255,0.35); cursor: pointer; }
        .hero-dot.active { background: #86efac; }
        @media (max-width: 640px) {
          .hero-slide-single { height: 64vh; }
          .hero-center-badge-mid { font-size: 42px; }
          .hero-card { padding: 18px; }
          .hero-progress { width: 86%; }
          .hero-dots { right: 12px; bottom: 12px; }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
