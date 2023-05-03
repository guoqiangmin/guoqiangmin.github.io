import React, { useCallback, useRef } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { Line, useAspect } from '@react-three/drei'
import * as THREE from 'three'
import state from '../store/state'
import { Box, Flex } from '@react-three/flex'
import { Page } from './Page'
import Text from './Text'
import { Layercard } from './Layercard'
import Geo from './Geo'
import { useTheme } from '../hooks/useTheme'

export function Content({ onReflow }) {
  const theme = useTheme()
  const group = useRef()
  const { viewport, size } = useThree()
  const [bW, bH] = useAspect(1920, 1920, 0.5)
  const texture = useLoader(THREE.TextureLoader, state.depthbox[0].image)
  const vec = new THREE.Vector3()
  const pageLerp = useRef(state.top / size.height)
  useFrame(() => {
    const page = (pageLerp.current = THREE.MathUtils.lerp(pageLerp.current, state.top / size.height, 0.15))
    const y = (page - state.threshold) * viewport.height
    const sticky = 0 //state.threshold * viewport.height
    console.log('page:', page)
    group.current.position.lerp(vec.set(0, page < state.threshold ? sticky : y, page < state.threshold ? page * 1.25 : 0), 0.15)
  })
  const handleReflow = useCallback((w, h) => onReflow((state.pages = h / viewport.height + 4)), [onReflow, viewport.height])
  const sizesRef = useRef([])
  const scale = Math.min(1, viewport.width / 16)
  return (
    <group ref={group}>
      <Flex dir="column" position={[-viewport.width / 2, viewport.height / 2, 0]} size={[viewport.width, viewport.height, 0]} onReflow={handleReflow}>
        <Box dir="row" width="100%" height="100%" align="center" justify="center">
          <Box>
            <Layercard {...state.depthbox[0]} text={state.depthbox[1].text} boxWidth={bW} boxHeight={bH} map={texture} textScaleFactor={scale} />
            <Geo position={[bW / 2, -bH / 2, 2]} />
          </Box>
        </Box>
        {state.content.map((props, index) => (
          <Page
            key={index}
            left={!(index % 2)}
            textScaleFactor={scale}
            onReflow={(w, h) => {
              sizesRef.current[index] = h
              state.threshold = Math.max(4, (4 / (15.8 * 3)) * sizesRef.current.reduce((acc, e) => acc + e, 0))
            }}
            {...props}
          />
        ))}
        <Box dir="row" width="100%" height="100%" align="center" justify="center">
          <Box centerAnchor>
            {state.lines.map((props, index) => (
              <Line key={index} color={theme.palette.text.secondary} {...props} />
            ))}
            <Text
              bold
              position-z={0.5}
              anchorX="center"
              anchorY="middle"
              fontSize={1.5 * scale}
              lineHeight={1}
              letterSpacing={-0.05}
              color={theme.palette.text.secondary}
              maxWidth={(viewport.width / 4) * 3}>
              {state.depthbox[0].text}
            </Text>
          </Box>
        </Box>
      </Flex>
    </group>
  )
}
