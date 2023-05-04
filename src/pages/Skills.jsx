import { useThree } from '@react-three/fiber'
import { Box } from '@react-three/flex'
import { HeightReporter } from '../components/HeightReporter'
import Text from '../components/Text'
import React from 'react'
import { useTheme } from '../hooks/useTheme'
import { FadingImage } from '../components/FadingImage'

const aboutData = {
  tag: '02',
  text: `Expertise`,
  // images: ['/images/c4cA8UN.jpg', '/images/ajQ73ol.jpg', '/images/gZOmLNU.jpg']
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

export function Skills({ onReflow }) {
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
      {/*<Box marginLeft={1.5} marginRight={1.5}>*/}
      {/*  <Text position={[-1, 0.5, 1]} fontSize={scale} lineHeight={1} letterSpacing={-0.05} maxWidth={(viewport.width / 4) * 3}>*/}
      {/*    {aboutData.tag}*/}
      {/*    <meshBasicMaterial color={theme.palette.text.neutral} toneMapped={false} />*/}
      {/*  </Text>*/}
      {/*</Box>*/}
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
      <Box dir="row" width="100%" height="auto" justify={'center'} grow={1} wrap="wrap">
        {aboutData.images.map((image, index) => (
          <Box key={index} {...boxProps}>
            {(width, height) => <FadingImage image={image} width={width} height={height} />}
          </Box>
        ))}
      </Box>
    </Box>
  )
}
