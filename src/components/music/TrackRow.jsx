function TrackRow({
  track,
  isPlaying,
  onPlay,
}) {
  return (
    <button
      type="button"
      className={`music-track-row ${
        isPlaying ? 'playing' : ''
      }`}
      onClick={onPlay}
      disabled={!track.file}
    >
      <span className="music-track-number">
        {track.trackNumber
          ? String(track.trackNumber).padStart(2, '0')
          : '--'}
      </span>

      <span className="music-track-play">
        {track.file
          ? isPlaying
            ? '❚❚'
            : '▶'
          : '—'}
      </span>

      <span className="music-track-title">
        {track.displayTitle || track.title}

        {track.type === 'interlude' && (
          <small>INTERLUDE</small>
        )}

        {track.type === 'improvisation' && (
          <small>IMPROVISATION</small>
        )}
      </span>

      <span className="music-track-duration">
        {track.durationLabel || ''}
      </span>
    </button>
  )
}

export default TrackRow