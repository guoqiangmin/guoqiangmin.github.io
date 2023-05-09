import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'

export const LoadingScreen = () => {
  const { progress } = useProgress()
  const [hidden, setHidden] = useState('')

  useEffect(() => {
    const t = setTimeout(() => {
      if (progress >= 100) setHidden('hidden')
    }, 2000)
    return () => {
      clearTimeout(t)
    }
  }, [progress])

  return (
    <div className={`loading ${progress < 100 ? '' : 'loaded'} ${hidden}`}>
      <div className={`loading-data`}>{Math.round(progress)}</div>
      <div className="loading-bar-container">
        <div
          className="loading-bar"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  )
}
