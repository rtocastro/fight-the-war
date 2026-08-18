import { motion } from 'framer-motion'
import { members, timeline } from '../data/members'

function Band() {
  const years = Array.from(
    { length: timeline.endYear - timeline.startYear + 1 },
    (_, index) => timeline.startYear + index
  )

  const totalYears = timeline.endYear - timeline.startYear + 1

  const getBarPosition = (member) => {
    const start =
      ((member.joined - timeline.startYear) / totalYears) * 100

    const effectiveEnd = member.left ?? timeline.endYear + 1

    const width =
      ((effectiveEnd - member.joined + (member.left ? 1 : 0)) /
        totalYears) *
      100

    return {
      left: `${start}%`,
      width: `${Math.min(width, 100 - start)}%`,
    }
  }

  return (
    <section id="band" className="band-section">
      <div className="band-header">
        <p className="section-eyebrow">PERSONNEL</p>

        <h2>THE BAND</h2>

        <p className="band-intro">
          Different lineups. Different eras. One Fight The War.
        </p>
      </div>

      <motion.div
        className="lineup-panel"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <div className="timeline-title-row">
          <div>
            <span className="timeline-label">
              LINEUP HISTORY
            </span>

            <h3>2007—2014</h3>
          </div>

          <span className="timeline-status">
            WAR STATUS: UNKNOWN
          </span>
        </div>

        <div className="timeline-scroll">
          <div className="timeline">
            <div className="timeline-years">
              <div className="timeline-name-spacer" />

              <div className="timeline-year-grid">
                {years.map((year) => (
                  <div
                    key={year}
                    className="timeline-year"
                  >
                    {year}
                  </div>
                ))}
              </div>
            </div>

            <div className="timeline-members">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="timeline-member-row"
                >
                  <div className="timeline-member-name">
                    <strong>{member.displayName}</strong>

                    <span>
                      {member.roles.join(' / ')}
                    </span>
                  </div>

                  <div className="timeline-track">
                    {years.map((year) => (
                      <div
                        key={year}
                        className="timeline-grid-line"
                      />
                    ))}

                    <div
                      className={`timeline-bar ${
                        member.left === null
                          ? 'timeline-bar-unknown'
                          : ''
                      }`}
                      style={getBarPosition(member)}
                    >
                      <span className="timeline-bar-role">
                        {member.roles[0]}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="timeline-legend">
          <span>
            <i className="legend-solid" />
            Known
          </span>

          <span>
            <i className="legend-unknown" />
            End date unknown
          </span>
        </div>
      </motion.div>

      <div className="member-grid">
        {members.map((member, index) => (
          <motion.article
            key={member.id}
            className="member-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.55,
              delay: (index % 3) * 0.08,
            }}
          >
            <div className="member-card-top">
              <span className="member-years">
                {member.joined} — {member.left ?? '???'}
              </span>

              {member.founder && (
                <span className="founder-tag">
                  FOUNDER
                </span>
              )}
            </div>

            <h3>{member.displayName}</h3>

            <p className="member-role">
              {member.roles.join(' / ')}
            </p>

            <p className="member-notes">
              {member.notes}
            </p>

            {member.influences.length > 0 && (
              <div className="member-influences">
                <span>LISTENED TO</span>

                <p>
                  {member.influences.join(' · ')}
                </p>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Band