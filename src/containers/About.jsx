import { useThree } from '@react-three/fiber'
import { Box } from '@react-three/flex'
import { HeightReporter } from '../components/HeightReporter'
import Text from '../components/Text'
import React from 'react'
import { useTheme } from '../hooks/useTheme'
import { FadingImage } from '../components/FadingImage'

const aboutData = {
  tag: '02',
  text: `About Me`,
  description: 'The Life and Career of a Senior Frontend Developer',
  images: [
    {
      front: '/images/c4cA8UN.jpg',
      back: '/images/c4cA8UN.jpg',
    },
    {
      front: '/images/ajQ73ol.jpg',
      back: '/images/ajQ73ol.jpg',
    },
  ],
}

export function About({ onReflow }) {
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
          {aboutData.text}
        </Text>
      </Box>
      <Box marginLeft={1.5} marginRight={1.5} marginTop={0.25}>
        <Text
          position-z={0.5}
          fontSize={scale * 0.618}
          lineHeight={1}
          letterSpacing={-0.05}
          color={theme.palette.text.neutral}
          maxWidth={(viewport.width / 4) * 3}>
          {aboutData.description}
        </Text>
      </Box>
      <Box dir="row" width="100%" height="auto" justify={'center'} grow={1} wrap="wrap">
        <Box {...{ ...boxProps, minWidth: 6, maxWidth: 7.07 }}>
          {(width, height) => <FadingImage image={aboutData.images[0]} width={width} height={height} />}
        </Box>
        <Box {...{ ...boxProps, minWidth: 7.07, maxWidth: 11.43 }}>
          {(width, height) => <FadingImage image={aboutData.images[1]} width={width} height={height} />}
        </Box>
      </Box>
    </Box>
  )
}
