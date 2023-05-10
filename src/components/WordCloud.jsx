import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'
import randomWord from 'random-words'

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = { font: '/Inter-Bold.woff', fontSize: 0.5, letterSpacing: -0.05, lineHeight: 2, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // const { mouse } = useThree()

  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])

  // Tie component to the render-loop
  // console.log('position:', position.z)
  useFrame(({ camera, pointer }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(color.set(hovered ? '#dbef52' : 'white'), 0.1)
    ref.current.material.opacity = 0.12 * Math.pow(props.position.z, 3)

    // const vec = new THREE.Vector3()
    // ref.current.position.lerp(vec.set(pointer.x * 2, pointer.y * 1, ref.current.position.z), 0.02)
    // camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1, camera.position.z), 0.02)
    // camera.position.lerp(vec.set(pointer.x, camera.position.y, camera.position.z), 0.01)
    // camera.lookAt(0, 0, 0)
  })
  return (
    <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} {...fontProps} children={children} />
  )
}

export function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  // const definedWords = ['react', 'javascript', 'typescript', 'css', 'html', 'nextjs', 'vue', 'nuxtjs', 'github', 'amazon', 'azure']
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), randomWord()])
    return temp
  }, [count, radius])
  return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}
