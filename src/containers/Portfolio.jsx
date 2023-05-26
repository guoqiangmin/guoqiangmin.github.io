import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { Box } from '@react-three/flex'
import { HeightReporter } from '../components/HeightReporter'
import Text from '../components/Text'
import React, { useRef, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { CustomSlider } from '../components/CustomSlider'
import { Html, useGLTF } from '@react-three/drei'
import styled from 'styled-components'

const portfolioData = {
  tag: '01',
  text: `Portfolio`,
  description: 'A Collection of Stunning Projects in Diverse Industry',
  items: [
    {
      image: '/images/portfolio/1.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/2.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/3.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/4.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/5.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/6.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/7.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/8.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/9.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/10.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/11.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/12.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/13.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/14.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/15.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/16.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/17.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/18.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/19.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/20.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/21.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/22.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/23.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/24.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/25.png',
      title: 'Shopify Website',
      description: '',
    },
    {
      image: '/images/portfolio/26.png',
      title: 'Shopify Website',
      description: '',
    },
  ],
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
  //margin-bottom: 1rem;
  max-width: 15rem;
  line-height: 1.5rem;
  user-select: none;
  color: ${(props) => props.color};
`

const color = new THREE.Color()
const scale = new THREE.Vector3()

const ArrowButton = (props) => {
  const { nodes } = useGLTF('/models/cursor.glb')
  const theme = useTheme()
  const ref = useRef(null)

  let hovered = false
  let down = false

  useFrame((state, delta) => {
    ref.current.material.color.lerp(color.set(hovered || down ? theme.palette.text.hover : theme.palette.text.primary), hovered || down ? 0.1 : 0.05)

    if (down) {
      ref.current.scale.lerp(scale.set(0.0375, 0.6, 0.375), 0.1)
    } else {
      ref.current.scale.lerp(scale.set(0.025, 0.4, 0.25), 0.05)
    }
  })

  const handleOnPointerOver = (e) => {
    hovered = true
  }

  const handleOnPointerOut = (e) => {
    hovered = false
  }

  const handlePointerDown = (e) => {
    down = true
  }

  const handlePointerUp = (e) => {
    down = false
  }

  return (
    <mesh
      {...props}
      ref={ref}
      geometry={nodes.Cube.geometry}
      // scale={[0.05, 0.7, 0.35]}
      onPointerOver={handleOnPointerOver}
      onPointerOut={handleOnPointerOut}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}>
      <meshStandardMaterial color={theme.palette.text.primary} roughness={0} envMapIntensity={1} toneMapped={false} />
    </mesh>
  )
}

export function SlideControl({ width, height, onNext, onPrev }) {
  const theme = useTheme()
  const { gl, viewport } = useThree()
  const scale = Math.min(1, viewport.width / 16)

  return (
    <group>
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial transparent opacity={1} color={theme.palette.background.card.primary} linear={true} toneMapped={false} />
        <ArrowButton rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[-width / 2 + 1.45, height / 2 - 1.5, 0.1]} onClick={onPrev} />
        <ArrowButton rotation={[Math.PI / 2, Math.PI, Math.PI / 2]} position={[-width / 2 + 4.15, height / 2 - 1.5, 0.1]} onClick={onNext} />
        <Text
          italic
          position={[-width / 2 + 2.25, height / 2 - 1.35, 0.1]}
          fontSize={scale * 0.418}
          lineHeight={1}
          letterSpacing={0}
          color={theme.palette.text.primary}
          maxWidth={(viewport.width / 4) * 3}>
          {'01/20'}
        </Text>
      </mesh>
      <Html transform portal={{ current: gl.domElement.parentNode }} pointerEvents={'none'}>
        <FormWrapper className={'form-wrapper'}>
          <Description color={theme.palette.text.primary}>
            Developed a responsive e-commerce website for a global fashion brand, implementing a sleek UI/UX design, seamless checkout process, and
            integrated payment gateway for enhanced customer experience and increased conversions. increased conversions. increased conversions.
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
  const [isClicked, setIsClicked] = useState(false)

  const itemCount = portfolioData.items.length

  const [currentIndex, setCurrentIndex] = useState(1)
  const [prevIndex, setPrevIndex] = useState(0)
  const isFirstClick = useRef(true)

  const onNext = () => {
    setIsClicked(true)
    if (!isFirstClick.current) {
      setPrevIndex(currentIndex)
      setCurrentIndex((prev) => (prev === itemCount - 1 ? 0 : prev + 1))
    }
    isFirstClick.current = false
  }

  const onPrev = () => {
    setIsClicked(true)
    if (!isFirstClick.current) {
      setPrevIndex(currentIndex)
      setCurrentIndex((prev) => (prev === 0 ? itemCount - 1 : prev - 1))
    }
    isFirstClick.current = false
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
            <CustomSlider
              items={portfolioData.items}
              prevIndex={prevIndex}
              activeIndex={currentIndex}
              width={width}
              height={height}
              isClicked={isClicked}
            />
          )}
        </Box>
        <Box {...{ ...boxProps, maxWidth: 8.2 }}>
          {(width, height) => <SlideControl width={width} height={height} onNext={onNext} onPrev={onPrev} />}
        </Box>
      </Box>
    </Box>
  )
}
