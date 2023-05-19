import { useProgress } from '@react-three/drei'
import { useEffect } from 'react'

export const LoadingScreen = () => {
  const { progress } = useProgress()

  useEffect(() => {
    let t
    if (progress >= 100) {
      document.body.classList.add('loaded')
      t = setTimeout(() => {
        document.body.classList.add('enable-html')
      }, 2000)
    }
    return () => {
      document.body.classList.remove('loaded')
      if (t) {
        clearTimeout(t)
        document.body.classList.remove('enable-html')
      }
    }
  }, [progress])

  return (
    <div className={`loading loading-container`}>
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
