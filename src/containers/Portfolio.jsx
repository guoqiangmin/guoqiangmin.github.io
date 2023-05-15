import { useThree } from '@react-three/fiber'
import { Box } from '@react-three/flex'
import { HeightReporter } from '../components/HeightReporter'
import Text from '../components/Text'
import React, { useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { SliderImage } from '../components/SliderImage'
import { Html } from '@react-three/drei'

const portfolioData = {
  tag: '01',
  text: `Portfolio`,
  description: 'A Collection of Stunning Projects in Diverse Industry',
  images: ['/images/BH41NVu.jpg', '/images/fBoIJLX.jpg', '/images/04zTfWB.jpg', '/images/gwuZrgo.jpg', '/images/gZOmLNU.jpg'],
}

export function SlideControl({ width, height, onNext }) {
  const theme = useTheme()
  // const { progress } = useProgress()
  // const { gl } = useThree()

  return (
    <group>
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial transparent opacity={1} color={theme.palette.background.card.secondary} linear={true} toneMapped={false} />
      </mesh>
      <Html transform>
        <div>
          <button>Prev</button>
          <button onClick={onNext}>Next</button>
        </div>
      </Html>
    </group>
  )
}

export function Portfolio({ onReflow }) {
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
    minWidth: 7.07,
    minHeight: 9.25, // 3
    maxWidth: 11.43,
    maxHeight: 11.43, // 6
  }
  const scale = Math.min(1, viewport.width / 16)
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <Box dir="column" align={'center'} justify="flex-start" marginLeft={2} marginRight={2} marginTop={2} height="auto">
      <HeightReporter onReflow={onReflow} />
      <Box marginLeft={1.5} marginRight={1.5}>
        <Text
          bold
          position-z={0.5}
          textAlign={'center'}
          fontSize={1.5 * scale}
          lineHeight={1}
          letterSpacing={-0.05}
          color={theme.palette.text.primary}
          maxWidth={(viewport.width / 4) * 3}>
          {portfolioData.text}
        </Text>
      </Box>
      <Box marginLeft={1.5} marginRight={1.5} marginTop={0.25}>
        <Text
          italic
          position-z={0.5}
          fontSize={scale * 0.418}
          lineHeight={1}
          letterSpacing={0}
          color={theme.palette.text.neutral}
          maxWidth={(viewport.width / 4) * 3}>
          {portfolioData.description.toUpperCase()}
        </Text>
      </Box>
      <Box dir="row" width="100%" height="auto" justify={'center'} grow={1} wrap="wrap">
        <Box {...{ ...boxProps, minWidth: 11.43, maxWidth: 13.5 }}>
          {(width, height) => <SliderImage images={portfolioData.images} activeIndex={currentIndex} width={width} height={height} />}
        </Box>
        <Box {...{ ...boxProps, minWidth: 7.07, maxWidth: 8.2 }}>
          {(width, height) => <SlideControl width={width} height={height} onNext={() => setCurrentIndex((prev) => prev + 1)} />}
        </Box>
      </Box>
    </Box>
  )
}
