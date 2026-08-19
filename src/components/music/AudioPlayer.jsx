import { useEffect, useRef, useState } from 'react'

function AudioPlayer({
  track,
  isPlaying,
  onPlayingChange,
}) {
  const audioRef = useRef(null)

  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current

    if (!audio || !track?.file) return

    audio.src = track.file
    audio.load()

    setCurrentTime(0)
  }, [track])

  useEffect(() => {
    const audio = audioRef.current

    if (!audio || !track?.file) return

    if (isPlaying) {
      audio.play().catch(() => {
        onPlayingChange(false)
      })
    } else {
      audio.pause()
    }
  }, [isPlaying, track, onPlayingChange])

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds)) return '0:00'

    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0')

    return `${mins}:${secs}`
  }

  const handleSeek = (event) => {
    const audio = audioRef.current

    if (!audio) return

    const nextTime = Number(event.target.value)

    audio.currentTime = nextTime
    setCurrentTime(nextTime)
  }

  if (!track?.file) {
    return null
  }

  return (
    <div className="ftw-audio-player">
      <audio
        ref={audioRef}
        onTimeUpdate={(event) =>
          setCurrentTime(event.currentTarget.currentTime)
        }
        onLoadedMetadata={(event) =>
          setDuration(event.currentTarget.duration)
        }
        onEnded={() => onPlayingChange(false)}
      />

      <div className="ftw-player-top">
        <button
          type="button"
          className="ftw-player-toggle"
          onClick={() =>
            onPlayingChange(!isPlaying)
          }
        >
          {isPlaying ? '❚❚' : '▶'}
        </button>

        <div className="ftw-player-track">
          <span>NOW PLAYING</span>

          <strong>
            {track.displayTitle || track.title}
          </strong>
        </div>

        <div className="ftw-player-time">
          {formatTime(currentTime)}
          {' / '}
          {formatTime(duration)}
        </div>
      </div>

      <input
        className="ftw-player-progress"
        type="range"
        min="0"
        max={duration || 0}
        step="0.1"
        value={currentTime}
        onChange={handleSeek}
      />
    </div>
  )
}

export default AudioPlayer