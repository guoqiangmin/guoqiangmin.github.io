import { useThree } from '@react-three/fiber'
import { Box } from '@react-three/flex'
import { HeightReporter } from '../components/HeightReporter'
import Text from '../components/Text'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { SliderImage } from '../components/SliderImage'
import { Html, useProgress } from '@react-three/drei'
import styled from 'styled-components'
import { IconArrowBackCircle } from '../components/icons/ArrowBackCircle'
import { IconArrowForwardCircle } from '../components/icons/ArrowForwardCircle'

const portfolioData = {
  tag: '01',
  text: `Portfolio`,
  description: 'A Collection of Stunning Projects in Diverse Industry',
  images: ['/images/BH41NVu.jpg', '/images/fBoIJLX.jpg', '/images/04zTfWB.jpg', '/images/gwuZrgo.jpg', '/images/gZOmLNU.jpg'],
}

const FormWrapper = styled.div`
  padding: 5px;
  display: none;
  &.show {
    display: block;
  }
`

const NavigationControls = styled.div`
  font-size: 0.9em;
  font-weight: 200;
  margin-bottom: 1rem;
  max-width: 15rem;
  line-height: 1.5rem;
  user-select: none;
  color: ${(props) => props.color};
`

const ControlButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  box-shadow: none;
  padding: 5px;
  transition: all 0.3s ease-in-out;
  color: inherit;
  &:hover {
    color: ${(props) => props.hoverColor};
  }
`

const Description = styled.div`
  font-size: 0.9em;
  font-weight: 200;
  margin-bottom: 1rem;
  max-width: 15rem;
  line-height: 1.5rem;
  user-select: none;
  color: ${(props) => props.color};
`

export function SlideControl({ width, height, onNext, onPrev }) {
  const theme = useTheme()
  const { progress } = useProgress()
  const { gl } = useThree()
  const [show, setShow] = useState('')

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
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial transparent opacity={1} color={theme.palette.background.card.secondary} linear={true} toneMapped={false} />
      </mesh>
      <Html transform portal={{ current: gl.domElement.parentNode }}>
        <FormWrapper className={`${show}`}>
          <NavigationControls color={theme.palette.text.secondary}>
            <ControlButton style={{ marginLeft: '-7px' }} onClick={onPrev} hoverColor={theme.palette.text.hover}>
              <IconArrowBackCircle width={32} height={32} />
            </ControlButton>
            <ControlButton onClick={onNext} hoverColor={theme.palette.text.hover}>
              <IconArrowForwardCircle width={32} height={32} />
            </ControlButton>
          </NavigationControls>
          <Description color={theme.palette.text.primary}>
            Developed a responsive e-commerce website for a global fashion brand, implementing a sleek UI/UX design, seamless checkout process, and
            integrated payment gateway for enhanced customer experience and increased conversions.
          </Description>
        </FormWrapper>
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
    marginLeft: 0.25,
    marginRight: 0.25,
    width: 'auto',
    height: 'auto',
    minWidth: 6,
    minHeight: 9.25, // 3
    maxWidth: 11.43,
    maxHeight: 11.43, // 6
  }
  const scale = Math.min(1, viewport.width / 16)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isForward, setIsForward] = useState(true)

  const itemCount = portfolioData.images.length
  const onNext = () => {
    setIsForward(true)
    setCurrentIndex((prev) => (prev >= itemCount - 1 ? 0 : prev + 1))
  }
  const onPrev = () => {
    setIsForward(false)
    setCurrentIndex((prev) => (prev <= 0 ? itemCount - 1 : prev - 1))
  }

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
        <Box {...{ ...boxProps, maxWidth: 13.5 }}>
          {(width, height) => (
            <SliderImage images={portfolioData.images} activeIndex={currentIndex} width={width} height={height} isForward={isForward} />
          )}
        </Box>
        <Box {...{ ...boxProps, maxWidth: 8.2 }}>
          {(width, height) => <SlideControl width={width} height={height} onNext={onNext} onPrev={onPrev} />}
        </Box>
      </Box>
    </Box>
  )
}
