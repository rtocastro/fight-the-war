import { useState } from 'react'
import { motion } from 'framer-motion'

import {
  releases,
  liveSets,
} from '../data/music'

import AudioPlayer from '../components/music/AudioPlayer'
import LiveSet from '../components/music/LiveSet'

function Music() {
  const [currentTrack, setCurrentTrack] =
    useState(null)

  const [isPlaying, setIsPlaying] =
    useState(false)

  const handleSelectTrack = (track) => {
    if (!track.file) return

    if (currentTrack?.id === track.id) {
      setIsPlaying((current) => !current)
      return
    }

    setCurrentTrack(track)
    setIsPlaying(true)
  }

  return (
    <section id="music" className="music-section">
      <div className="music-header">
        <p className="section-eyebrow">
          DISCOGRAPHY
        </p>

        <h2>MUSIC</h2>

        <p className="music-intro">
          Three EPs, live recordings, and recovered
          material from Fight The War.
        </p>
      </div>

      <div className="release-grid">
        {releases.map((release, index) => (
          <motion.article
            key={release.id}
            className="release-card"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
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
              <img
                src={release.artwork}
                alt={`${release.title} artwork`}
              />
            </div>

            <div className="release-info">
              <div className="release-meta">
                <span>{release.type}</span>

                <span className="release-dot">
                  •
                </span>

                <span>{release.year}</span>
              </div>

              <h3>{release.title}</h3>

              <div className="release-track-list">
                {release.tracks.map((track) => (
                  <div
                    key={`${release.id}-${track.trackNumber}-${track.title}`}
                    className="release-track-row"
                  >
                    <span>
                      {String(
                        track.trackNumber
                      ).padStart(2, '0')}
                    </span>

                    <strong>
                      {track.displayTitle ||
                        track.title}
                    </strong>
                  </div>
                ))}
              </div>

              <div className="release-production">
                <span>PRODUCTION</span>

                <p>
                  {release.production.engineer.join(
                    ' & '
                  )}
                </p>

                <small>
                  {release.production.studio}
                </small>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="live-recordings-section">
        <div className="live-recordings-header">
          <p className="section-eyebrow">
            RECOVERED AUDIO
          </p>

          <h3>LIVE RECORDINGS</h3>

          <p>
            Original Fight The War live recordings
            preserved from the archive.
          </p>
        </div>

        {liveSets.map((liveSet) => (
          <LiveSet
            key={liveSet.id}
            liveSet={liveSet}
            currentTrack={currentTrack}
            isPlaying={isPlaying}
            onSelectTrack={
              handleSelectTrack
            }
          />
        ))}
      </div>

      <AudioPlayer
        track={currentTrack}
        isPlaying={isPlaying}
        onPlayingChange={setIsPlaying}
      />
    </section>
  )
}

export default Music