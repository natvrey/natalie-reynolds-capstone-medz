"use client"

import { useState, useRef, useEffect } from "react"
import { ActionButton } from "./action-button"

export function AlarmButton() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio("/sounds/alarm-audio.mp3")
    audioRef.current.loop = true

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [isPlaying])

  return (
    <ActionButton
      variant="alarm"
      isPlaying={isPlaying}
      onClick={() => setIsPlaying(!isPlaying)}
    />
  )
}
