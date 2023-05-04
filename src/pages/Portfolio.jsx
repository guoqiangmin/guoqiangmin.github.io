import { useThree } from '@react-three/fiber'
import { Box } from '@react-three/flex'
import { HeightReporter } from '../components/HeightReporter'
import Text from '../components/Text'
import React from 'react'
import { useTheme } from '../hooks/useTheme'
import { FadingImage } from '../components/FadingImage'

const portfolioData = {
  tag: '01',
  text: `Portfolio`,
  // images: ['/images/BH41NVu.jpg', '/images/fBoIJLX.jpg', '/images/04zTfWB.jpg'],
  images: [
    {
      front: '/images/BH41NVu.jpg',
      back: '/images/BH41NVu.jpg',
    },
    {
      front: '/images/fBoIJLX.jpg',
      back: '/images/fBoIJLX.jpg',
    },
    {
      front: '/images/04zTfWB.jpg',
      back: '/images/04zTfWB.jpg',
    },
  ],
}
export function Portfolio({ onReflow }) {
  const theme = useTheme()
  const { viewport } = useThree()
  const boxProps = {
    centerAnchor: true,
    grow: 1,
    marginTop: 1,
    marginLeft: 0.5,
    marginRight: 0,
    width: 'auto',
    height: 'auto',
    minWidth: 3,
    minHeight: 6.5, // 3
    maxWidth: 6,
    maxHeight: 7, // 6
  }
  const scale = Math.min(1, viewport.width / 16)

  return (
    <Box dir="column" align={'center'} justify="flex-start" marginLeft={2} marginRight={2} marginTop={2} height="auto">
      <HeightReporter onReflow={onReflow} />
      {/*<Box marginLeft={1.5} marginRight={1.5} marginTop={0}>*/}
      {/*  <Text position={[1, 0.5, 1]} fontSize={scale} lineHeight={1} letterSpacing={-0.05} maxWidth={(viewport.width / 4) * 3}>*/}
      {/*    {portfolioData.tag}*/}
      {/*    <meshBasicMaterial color={theme.palette.text.neutral} toneMapped={false} />*/}
      {/*  </Text>*/}
      {/*</Box>*/}
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
      <Box dir="row" width="100%" height="auto" justify={'center'} grow={1} wrap="wrap">
        {portfolioData.images.map((image, index) => (
          <Box key={index} {...boxProps}>
            {(width, height) => <FadingImage image={image} width={width} height={height} />}
          </Box>
        ))}
      </Box>
    </Box>
  )
}
