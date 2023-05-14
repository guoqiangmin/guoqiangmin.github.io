import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { Box } from '@react-three/flex'
import { HeightReporter } from '../components/HeightReporter'
import Text from '../components/Text'
import React, { useRef } from 'react'
import { useTheme } from '../hooks/useTheme'
// import { FadingImage } from '../components/FadingImage'
// import { RoundedRect } from '../components/RoundedRect'
// import { TrackballControls, useProgress } from '@react-three/drei'
import { Cloud } from '../components/WordCloud'

const skillsData = {
  tag: '02',
  text: `Expertise`,
  description: 'A Comprehensive Overview of My Expertise and Core Competencies',
  images: [
    {
      front: '/images/c4cA8UN.jpg',
      back: '/images/c4cA8UN.jpg',
    },
    {
      front: '/images/ajQ73ol.jpg',
      back: '/images/ajQ73ol.jpg',
    },
    {
      front: '/images/gZOmLNU.jpg',
      back: '/images/gZOmLNU.jpg',
    },
  ],
}

function Rig({ children }) {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.25)
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, (state.mouse.y * Math.PI) / 10, 0.25)
  })
  return (
    <group ref={ref} position={[0.6, 0.3, 0.5]}>
      {children}
    </group>
  )
}

export function Keywords({ width, height }) {
  const theme = useTheme()
  // const { progress } = useProgress()
  // const { gl } = useThree()

  return (
    <group>
      <mesh>
        {/*<shapeGeometry args={[RoundedRect(width, height, 0.15)]} />*/}
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial transparent opacity={1} color={theme.palette.background.card.primary} linear={true} toneMapped={false} />
      </mesh>
      <Rig>
        <Cloud count={7} radius={3} />
      </Rig>
      {/*<TrackballControls />*/}
    </group>
  )
}

export function Skills({ width, height }) {
  const theme = useTheme()
  // const { progress } = useProgress()
  // const { gl } = useThree()

  return (
    <group>
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial transparent opacity={1} color={theme.palette.background.card.secondary} linear={true} toneMapped={false} />
      </mesh>
    </group>
  )
}

export function Expertise({ onReflow }) {
  const theme = useTheme()
  const { viewport } = useThree()
  const boxProps = {
    centerAnchor: true,
    grow: 1,
    marginTop: 0.75,
    marginLeft: 0.5,
    marginRight: 0,
    width: 'auto',
    height: 'auto',
    minWidth: 3,
    minHeight: 9.25,
    maxWidth: 6,
    maxHeight: 11.43,
  }
  const scale = Math.min(1, viewport.width / 16)

  return (
    <Box dir="column" align={'center'} justify="flex-start" marginLeft={2} marginRight={2} marginTop={2} height="auto">
      <HeightReporter onReflow={onReflow} />
      <Box marginLeft={1.5} marginRight={1.5}>
        <Text
          bold
          position-z={0.5}
          textAlign={'right'}
          fontSize={1.5 * scale}
          lineHeight={1}
          letterSpacing={-0.05}
          color={theme.palette.text.primary}
          maxWidth={(viewport.width / 4) * 3}>
          {skillsData.text}
        </Text>
      </Box>
      <Box marginLeft={1.5} marginRight={1.5} marginTop={0.25}>
        <Text
          position-z={0.5}
          fontSize={scale * 0.518}
          lineHeight={1}
          letterSpacing={-0.05}
          color={theme.palette.text.neutral}
          maxWidth={(viewport.width / 4) * 3}>
          {skillsData.description}
        </Text>
      </Box>
      <Box dir="row" width="100%" height="auto" justify={'center'} grow={1} wrap="wrap">
        <Box {...{ ...boxProps, minWidth: 7.07, maxWidth: 11.43 }}>{(width, height) => <Keywords width={width} height={height} />}</Box>
        <Box {...{ ...boxProps, minWidth: 6, maxWidth: 7.07 }}>{(width, height) => <Skills width={width} height={height} />}</Box>
      </Box>
    </Box>
  )
}
