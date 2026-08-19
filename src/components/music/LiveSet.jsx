import TrackRow from '../music/TrackRow'

function LiveSet({
  liveSet,
  currentTrack,
  isPlaying,
  onSelectTrack,
}) {
  return (
    <article className="live-set-card">
      <div className="live-set-header">
        <div>
          <span className="archive-meta">
            LIVE RECORDING // {liveSet.year}
          </span>

          <h3>{liveSet.title}</h3>

          <p>
            {liveSet.venue} · {liveSet.city}
          </p>
        </div>

        <div className="live-set-count">
          {liveSet.trackCount} SONGS
          <span>
            {liveSet.itemCount} RECORDINGS
          </span>
        </div>
      </div>

      <div className="live-set-tracks">
        {liveSet.tracks.map((track, index) => {
          const id =
            `${liveSet.id}-${index}-${track.title}`

          const isCurrent =
            currentTrack?.id === id

          return (
            <TrackRow
              key={id}
              track={track}
              isPlaying={
                isCurrent && isPlaying
              }
              onPlay={() =>
                onSelectTrack({
                  ...track,
                  id,
                  sourceTitle: liveSet.title,
                })
              }
            />
          )
        })}
      </div>
    </article>
  )
}

export default LiveSet