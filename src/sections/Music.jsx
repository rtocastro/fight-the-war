import { motion } from 'framer-motion'
import { releases } from '../data/music'

function Music() {
  return (
    <section id="music" className="music-section">
      <div className="music-header">
        <p className="section-eyebrow">DISCOGRAPHY</p>

        <h2>MUSIC</h2>

        <p className="music-intro">
          Three releases. Eleven tracks. Different chapters of the same war.
        </p>
      </div>

      <div className="release-grid">
        {releases.map((release, index) => (
          <motion.article
            key={release.id}
            className="release-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
          >
            <div className="release-artwork">
              <div className="release-artwork-placeholder">
                <span>FTW</span>
              </div>
            </div>

            <div className="release-info">
              <div className="release-meta">
                <span>{release.type}</span>

                {release.year && (
                  <>
                    <span className="release-dot">•</span>
                    <span>{release.year}</span>
                  </>
                )}
              </div>

              <h3>{release.title}</h3>

              <ol className="track-list">
                {release.tracks.map((track) => (
                  <li key={track}>
                    <span>{track}</span>
                  </li>
                ))}
              </ol>

              <button className="release-button">
                LISTEN
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Music