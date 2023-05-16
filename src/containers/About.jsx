import { useThree } from '@react-three/fiber'
import { Box } from '@react-three/flex'
import { HeightReporter } from '../components/HeightReporter'
import Text from '../components/Text'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { FadingImage } from '../components/FadingImage'
import styled from 'styled-components'
import { Html, useProgress } from '@react-three/drei'

const aboutData = {
  tag: '02',
  text: `About Me`,
  description: 'The Life and Career of a Senior Frontend Developer',
  detail:
    "I am a highly productive senior frontend engineer/developer with 8+ years of diverse industry experience. My expertise lies in building stunning UI/UX, optimizing performance, and solving complex problems. As a strong team player, I'm always up-to-date with the latest technologies and best practices in software development.",
  image: {
    front: '/images/about/1.jpg',
    back: '/images/about/2.jpg',
  },
}

const FormWrapper = styled.div`
  padding: 5px;
  display: none;
  &.show {
    display: block;
  }
`

const Description = styled.div`
  font-size: 0.9em;
  font-weight: 200;
  margin-bottom: 1rem;
  max-width: 20rem;
  line-height: 1.5rem;
  user-select: none;
  color: ${(props) => props.color};
`

export function Career({ width, height }) {
  const theme = useTheme()
  const { progress } = useProgress()
  const { gl, viewport } = useThree()
  const [show, setShow] = useState('')
  // const scale = Math.min(1, viewport.width / 16)
  console.log('viewport width', viewport.width, width)
  useEffect(() => {
    const t = setTimeout(() => {
      if (progress >= 100) setShow('show')
    }, 2000)
    return () => {
      clearTimeout(t)
    }
  }, [progress])

  return (
    <group>
      <mesh>
        {/*<shapeGeometry args={[RoundedRect(width, height, 0.15)]} />*/}
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial transparent opacity={1} color={theme.palette.background.card.primary} linear={true} toneMapped={false} />
      </mesh>
      <Html transform portal={{ current: gl.domElement.parentNode }}>
        <FormWrapper className={`${show}`}>
          <Description color={theme.palette.text.primary}>
            I am a highly productive senior frontend engineer/developer with 8+ years of diverse industry experience. My expertise lies in building
            stunning UI/UX, optimizing performance, and solving complex problems. As a strong team player, I'm always up-to-date with the latest
            technologies and best practices in software development.
          </Description>
        </FormWrapper>
      </Html>
    </group>
  )
}

export function About({ onReflow }) {
  const theme = useTheme()
  const { viewport } = useThree()
  const boxProps = {
    centerAnchor: true,
    grow: 1,
    marginTop: 0.75,
    marginLeft: 0.25,
    marginRight: 0.25,
    width: 'auto',
    height: 'auto',
    minWidth: 6,
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
          italic
          position-z={0.5}
          fontSize={scale * 0.418}
          lineHeight={1}
          letterSpacing={0}
          color={theme.palette.text.neutral}
          maxWidth={(viewport.width / 4) * 3}>
          {aboutData.description.toUpperCase()}
        </Text>
      </Box>
      <Box dir="row" width="100%" height="auto" justify={'center'} grow={1} wrap="wrap">
        <Box {...{ ...boxProps, maxWidth: 7.07 }}>{(width, height) => <FadingImage image={aboutData.image} width={width} height={height} />}</Box>
        <Box {...{ ...boxProps, maxWidth: 11.43 }}>{(width, height) => <Career width={width} height={height} />}</Box>
      </Box>
    </Box>
  )
}
