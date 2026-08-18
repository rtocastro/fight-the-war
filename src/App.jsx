import { motion } from 'framer-motion'
import './App.css'
import Music from './sections/Music'
import Videos from './sections/Videos'
import Band from './sections/Band'

function App() {
  const handleEnter = () => {
    document.getElementById('main-site')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <main className="ftw-site">
      {/* =========================
          HERO
      ========================= */}

      <section className="hero" id="home">
        <div className="hero-noise" />
        <div className="hero-vignette" />
        <div className="hero-red-glow" />

        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="hero-logo-wrapper"
            initial={{
              opacity: 0,
              scale: 0.92,
              filter: 'blur(10px)',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
            }}
            transition={{
              duration: 1.4,
              ease: 'easeOut',
            }}
          >
            <img
              src="/fight-the-war-logo.png"
              alt="Fight The War"
              className="hero-logo"
            />
          </motion.div>

          <motion.p
            className="hero-tagline"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
          >
            THE WAR IS EVERYDAY LIFE.
          </motion.p>

          <motion.button
            type="button"
            className="enter-button"
            onClick={handleEnter}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.5,
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            ENTER
          </motion.button>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 1,
          }}
        >
          <span />
        </motion.div>
      </section>

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">
        <button
          className="navbar-brand"
          onClick={() => scrollToSection('home')}
        >
          FTW
        </button>

        <div className="navbar-links">
          <button onClick={() => scrollToSection('music')}>
            MUSIC
          </button>

          <button onClick={() => scrollToSection('videos')}>
            VIDEOS
          </button>

          <button onClick={() => scrollToSection('shows')}>
            SHOWS
          </button>

          <button onClick={() => scrollToSection('band')}>
            BAND
          </button>

          <button onClick={() => scrollToSection('archive')}>
            ARCHIVE
          </button>
        </div>
      </nav>

      {/* =========================
          MAIN LANDING
      ========================= */}

      <section id="main-site" className="warpath-section">
        <div className="warpath-background-text">
          FTW
        </div>

        <motion.div
          className="warpath-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease: 'easeOut',
          }}
        >
          <p className="section-eyebrow">
            FIGHT THE WAR
          </p>

          <h1>
            THE
            <span> WAR PATH.</span>
          </h1>

          <div className="warpath-divider" />

          <p className="warpath-location">
            LOS ANGELES, CALIFORNIA
          </p>

          <p className="warpath-description">
            Heavy music built for loud rooms, restless crowds,
            and everything life throws at you.
          </p>

          <div className="warpath-actions">
            <button
              onClick={() => scrollToSection('music')}
              className="primary-action"
            >
              LISTEN
            </button>

            <button
              onClick={() => scrollToSection('videos')}
              className="secondary-action"
            >
              WATCH
            </button>

            <button
              onClick={() => scrollToSection('archive')}
              className="secondary-action"
            >
              ENTER THE ARCHIVE
            </button>
          </div>
        </motion.div>
      </section>

      {/* TEMPORARY SECTIONS */}

      <Music />

      <Videos />

      <section id="shows" className="placeholder-section">
        <span>SHOWS</span>
      </section>

      <Band />

      <section id="archive" className="placeholder-section">
        <span>ARCHIVE</span>
      </section>
    </main>
  )
}

export default App