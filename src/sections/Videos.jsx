import { motion } from 'framer-motion'
import { videos } from '../data/videos'

function Videos() {
  const featuredVideo = videos.find((video) => video.featured)
  const otherVideos = videos.filter((video) => !video.featured)

  return (
    <section id="videos" className="videos-section">
      <div className="videos-header">
        <p className="section-eyebrow">WATCH</p>

        <h2>VIDEOS</h2>

        <p className="videos-intro">
          Music videos, live footage, and pieces of Fight The War history.
        </p>
      </div>

      {featuredVideo && (
        <motion.article
          className="featured-video"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          <div className="video-embed featured-video-embed">
            <iframe
              src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}`}
              title={`Fight The War - ${featuredVideo.title}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="featured-video-info">
            <div className="video-meta">
              <span>{featuredVideo.type}</span>

              {featuredVideo.year && (
                <>
                  <span className="video-meta-divider">/</span>
                  <span>{featuredVideo.year}</span>
                </>
              )}
            </div>

            <h3>{featuredVideo.title}</h3>

            <div className="video-red-line" />
          </div>
        </motion.article>
      )}

      {otherVideos.length > 0 && (
        <div className="video-grid">
          {otherVideos.map((video, index) => (
            <motion.article
              key={video.id}
              className="video-card"
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
                duration: 0.65,
                delay: index * 0.1,
              }}
            >
              <div className="video-embed">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={`Fight The War - ${video.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <div className="video-card-info">
                <div className="video-meta">
                  <span>{video.type}</span>

                  {video.year && (
                    <>
                      <span className="video-meta-divider">/</span>
                      <span>{video.year}</span>
                    </>
                  )}
                </div>

                <h3>{video.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Videos