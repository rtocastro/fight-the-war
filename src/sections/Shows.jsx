import { motion } from 'framer-motion'
import { shows } from '../data/shows'

function Shows() {
  return (
    <section id="shows" className="shows-section">
      <div className="shows-header">
        <p className="section-eyebrow">LIVE HISTORY</p>

        <h2>SHOWS</h2>

        <p className="shows-intro">
          Original flyers, documented lineups, and memories from the shows.
        </p>
      </div>

      <div className="shows-grid">
        {shows.map((show, index) => (
          <motion.article
            key={show.id}
            className="show-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: (index % 2) * 0.08,
            }}
          >
            <div className="show-flyer-wrap">
              <img
                src={show.flyer}
                alt={`${show.title} show flyer`}
                className="show-flyer"
              />

              <div className="show-flyer-overlay">
                <span>ORIGINAL FLYER</span>
              </div>
            </div>

            <div className="show-info">
              <span className="show-date">
                {show.displayDate}
              </span>

              <h3>{show.title}</h3>

              <div className="show-location">
                <span>{show.venue}</span>
                <span>{show.city}</span>
              </div>

              <div className="show-lineup">
                <span className="show-small-label">
                  SELECTED BILL
                </span>

                <p>
                  {show.lineup.join(' · ')}
                </p>
              </div>

              {show.memory && (
                <div className="show-memory">
                  <span className="show-small-label">
                    MEMORY // {show.memory.author}
                  </span>

                  <blockquote>
                    “{show.memory.quote}”
                  </blockquote>
                </div>
              )}

              {show.archiveNote && (
                <div className="show-archive-note">
                  <span>ARCHIVE NOTE //</span>
                  <p>{show.archiveNote}</p>
                </div>
              )}

              {show.relatedVideoId && (
                <a
                  className="show-video-link"
                  href={`https://www.youtube.com/watch?v=${show.relatedVideoId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WATCH RELATED FOOTAGE →
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Shows