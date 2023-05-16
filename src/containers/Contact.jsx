import { useThree } from '@react-three/fiber'
import { Box } from '@react-three/flex'
import { HeightReporter } from '../components/HeightReporter'
import Text from '../components/Text'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { Html, useProgress } from '@react-three/drei'
// import { RoundedRect } from '../components/RoundedRect'
import styled from 'styled-components'

const contactData = {
  tag: '03',
  text: `Contact Me`,
  description: 'Get in Touch with a Senior Frontend Developer for Your Project',
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

const FormWrapper = styled.div`
  padding: 5px;
  display: none;
  &.show {
    display: block;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border: 0.5px solid var(--input-color);
  border-radius: 0;
  width: 300px;
  font-size: 0.9em;
  color: var(--input-color);
  background: transparent;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 200;

  &::placeholder {
    color: var(--input-placeholder-color);
    font-size: 0.9em;
    font-weight: 200;
  }
`

const TextArea = styled.textarea`
  padding: 10px;
  margin: 5px;
  border: 0.5px solid var(--input-color);
  border-radius: 0;
  width: 300px;
  height: 150px;
  font-size: 0.9em;
  color: var(--input-color);
  background: transparent;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 200;

  &::placeholder {
    color: var(--input-placeholder-color);
    font-size: 0.75rem;
    font-weight: 200;
  }
`

const Button = styled.button`
  background-color: var(--button-background-color);
  color: var(--button-color);
  border: none;
  padding: 7px 35px;
  margin: 10px 0 0;
  border-radius: 0;
  font-size: 0.9em;
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--button-hover-background-color);
    color: var(--button-hover-color);
  }
`

export function ContactForm({ width, height }) {
  const theme = useTheme()
  const { progress } = useProgress()
  const { gl } = useThree()

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)

  const [show, setShow] = useState('')

  useEffect(() => {
    const t = setTimeout(() => {
      if (progress >= 100) setShow('show')
    }, 2000)
    return () => {
      clearTimeout(t)
    }
  }, [progress])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    }
    console.log('form data:', formData)
    // onSubmit(formData);
  }

  return (
    <group>
      <mesh>
        {/*<shapeGeometry args={[RoundedRect(width, height, 0.15)]} />*/}
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial transparent opacity={1} color={theme.palette.background.card.primary} linear={true} toneMapped={false} />
      </mesh>
      <Html transform portal={{ current: gl.domElement.parentNode }}>
        <FormWrapper className={`${show}`}>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              ref={nameRef}
              style={{
                '--input-color': theme.palette.text.secondary,
                '--input-placeholder-color': theme.palette.text.disabled,
              }}
            />
            <Input
              type="email"
              id="email"
              placeholder="Email"
              ref={emailRef}
              style={{
                '--input-color': theme.palette.text.secondary,
                '--input-placeholder-color': theme.palette.text.disabled,
              }}
            />
            <TextArea
              ref={messageRef}
              placeholder="Message"
              style={{
                '--input-color': theme.palette.text.secondary,
                '--input-placeholder-color': theme.palette.text.disabled,
              }}
            />
            <Button
              type="submit"
              id="message"
              style={{
                '--button-background-color': theme.palette.text.secondary,
                '--button-color': theme.palette.background.default,
                '--button-hover-background-color': theme.palette.text.primary,
                '--button-hover-color': theme.palette.background.default,
              }}>
              Send
            </Button>
          </Form>
        </FormWrapper>
      </Html>
    </group>
  )
}

export function Contact({ onReflow }) {
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
    maxWidth: 11.43,
    maxHeight: 11.43,
  }
  const scale = Math.min(1, viewport.width / 16)

  return (
    <Box dir="column" align={'center'} justify="flex-start" marginLeft={2} marginRight={2} marginBottom={2} height="auto" minHeight={'70%'}>
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
          {contactData.text}
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
          {contactData.description.toUpperCase()}
        </Text>
      </Box>
      <Box dir="row" width="100%" height="auto" justify={'center'} grow={1} wrap="wrap">
        <Box {...{ ...boxProps, maxWidth: 19, marginBottom: 1 }}>{(width, height) => <ContactForm width={width} height={height} />}</Box>
      </Box>
    </Box>
  )
}
