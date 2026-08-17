import { motion } from 'framer-motion'
import './App.css'

function App() {
  const handleEnter = () => {
    document.getElementById('main-site')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <main className="ftw-site">
      <section className="hero">
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
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
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

      <section id="main-site" className="main-site-placeholder">
        <p className="section-eyebrow">FIGHT THE WAR</p>

        <h1>BACK ON THE WAR PATH.</h1>

        <p>
          Music. Shows. Videos. History.
        </p>
      </section>
    </main>
  )
}

export default App