import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, Loader, Scroll, ScrollControls } from '@react-three/drei'
import state from './store/state'
import { WaterEffects } from './components/WaterEffects'
import { useTheme } from './hooks/useTheme'
import { Content } from './components/Content'
import { useThemeSetting } from './contexts/theme'
import { CustomCursor } from './components/CustomCursor'

export default function App() {
  const theme = useTheme()
  const { applyTheme } = useThemeSetting()

  const scrollArea = useRef()
  const onScroll = (e) => (state.top = e.target ? e.target.scrollTop : 0)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  const [pages, setPages] = useState(0)
  console.log('pages:', pages)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const systemModeHandler = (event) => {
      const colorScheme = event.matches ? 'dark' : 'light'
      console.log(colorScheme) // "dark" or "light"
      // setMode(colorScheme);
      applyTheme(colorScheme)
    }

    if (mediaQuery.matches) {
      applyTheme('dark')
    } else {
      applyTheme('light')
    }
    mediaQuery.addEventListener('change', systemModeHandler)
    return () => {
      mediaQuery.removeEventListener('change', systemModeHandler)
    }
  }, [applyTheme])

  return (
    <>
      <CustomCursor />
      <Canvas
        shadows
        raycaster={{ enabled: false }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], far: 1000 }}
        gl={{ powerPreference: 'high-performance', alpha: false, antialias: false, stencil: false, depth: false }}
        // onCreated={({ gl }) => gl.setClearColor(theme.palette.background.default)}
        linear={true}>
        <color attach="background" args={[theme.palette.background.default]} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <ambientLight intensity={0.4} />
        <spotLight
          castShadow
          angle={0.3}
          penumbra={1}
          position={[0, 10, 20]}
          intensity={5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <fog attach="fog" args={['#202025', 0, 80]} />
        <Suspense fallback={null}>
          <ScrollControls>
            <Scroll>
              <Content onReflow={setPages} />
            </Scroll>
            <Scroll html>
              <div
                className="scrollArea"
                ref={scrollArea}
                onScroll={onScroll}
                onPointerMove={(e) => (state.mouse = [(e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1])}>
                {/*<div style={{ height: `${pages * 100}vh` }} />*/}
                {Object.keys(state.navs).map((keyName, index) => (
                  <div key={index} id={keyName} style={{ height: `${((state.navs[keyName].pageSize * pages) / state.sections) * 100}vh` }} />
                ))}
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
        <WaterEffects />
      </Canvas>
      <Loader />
    </>
  )
}
