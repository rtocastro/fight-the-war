import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import {
  archiveCollections,
  archiveItems,
  archiveFilters,
} from '../data/archive'

function Archive() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') {
      return archiveItems
    }

    return archiveItems.filter(
      (item) => item.type === activeFilter
    )
  }, [activeFilter])

  const showCollections =
    activeFilter === 'all' ||
    activeFilter === 'recording'

  return (
    <section id="archive" className="archive-section">
      <div className="archive-header">
        <p className="section-eyebrow">
          RECOVERED MATERIAL
        </p>

        <h2>ARCHIVE</h2>

        <p className="archive-intro">
          Photos, artwork, recording sessions,
          press and assorted evidence from the
          Fight The War years.
        </p>
      </div>

      {/* FILTERS */}

      <div className="archive-filters">
        {archiveFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={
              activeFilter === filter.id
                ? 'archive-filter active'
                : 'archive-filter'
            }
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* COLLECTIONS */}

      {showCollections && (
        <div className="archive-collections">
          {archiveCollections.map((collection) => (
            <motion.article
              key={collection.id}
              className="archive-collection-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="archive-collection-image">
                <img
                  src={collection.cover}
                  alt={collection.title}
                />

                <div className="archive-collection-count">
                  {collection.items.length} PHOTOS
                </div>
              </div>

              <div className="archive-collection-info">
                <span className="archive-meta">
                  COLLECTION // {collection.dateLabel}
                </span>

                <h3>{collection.title}</h3>

                <p>{collection.description}</p>

                <button
                  type="button"
                  className="archive-open-button"
                >
                  VIEW COLLECTION →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      )}

      {/* ARCHIVE GRID */}

      <motion.div
        layout
        className="archive-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.article
              layout
              key={item.id}
              className="archive-item"
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <div className="archive-item-image">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <span className="archive-type">
                  {item.type.replace('-', ' ')}
                </span>
              </div>

              <div className="archive-item-info">
                {item.dateLabel && (
                  <span className="archive-meta">
                    {item.dateLabel}
                  </span>
                )}

                <h3>{item.title}</h3>

                {item.credit && (
                  <p className="archive-credit">
                    {item.type === 'fan-art'
                      ? 'ART BY '
                      : 'CREDIT // '}
                    {item.credit}
                  </p>
                )}

                {item.venue && (
                  <p className="archive-detail">
                    {item.venue}
                  </p>
                )}

                {item.location && (
                  <p className="archive-detail">
                    {item.location}
                  </p>
                )}

                {item.era && (
                  <p className="archive-detail">
                    {item.era}
                  </p>
                )}

                {item.publication && (
                  <p className="archive-detail">
                    {item.publication}
                  </p>
                )}

                {item.note && (
                  <p className="archive-note">
                    {item.note}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Archive