import { motion } from 'framer-motion'
import { history } from '../data/history'

function BandHistory() {
  return (
    <div className="band-history">
      <div className="history-heading">
        <p className="section-eyebrow">THE STORY</p>

        <h3>FIGHT THE WAR</h3>

        <p>
          The known history so far.
        </p>
      </div>

      <div className="history-timeline">
        <div className="history-line" />

        {history.map((chapter, index) => (
          <motion.article
            key={chapter.id}
            className={`history-chapter ${
              index % 2 === 0 ? 'history-left' : 'history-right'
            } ${chapter.status ? 'history-status-chapter' : ''}`}
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
          >
            <div className="history-dot" />

            <div className="history-content">
              <span className="history-marker">
                {chapter.marker}
              </span>

              <h4>{chapter.title}</h4>

              <div className="history-red-rule" />

              {chapter.text.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>
                  {paragraph}
                </p>
              ))}

              {chapter.quote && (
                <blockquote>
                  “{chapter.quote}”
                </blockquote>
              )}

              {chapter.status && (
                <div className="history-unknown-status">
                  WAR STATUS: UNKNOWN
                </div>
              )}
            </div>

            {chapter.marker.match(/^\d{4}/) && (
              <span className="history-ghost-year">
                {chapter.marker.substring(0, 4)}
              </span>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default BandHistory