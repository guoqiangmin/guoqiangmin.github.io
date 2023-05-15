import React from 'react'
import { useReflow } from '@react-three/flex'
import { Text as TextImpl } from '@react-three/drei'

export default function Text({ bold = false, italic = false, anchorX = 'left', anchorY = 'top', textAlign = 'left', ...props }) {
  const reflow = useReflow()
  const font = bold ? '/Roboto-Bold.ttf' : italic ? '/Roboto-LightItalic.ttf' : '/Roboto-Light.ttf' //'/Inter-Bold.woff' : '/Inter-Regular.woff'
  return <TextImpl anchorX={anchorX} anchorY={anchorY} textAlign={textAlign} font={font} onSync={reflow} {...props} />
}
