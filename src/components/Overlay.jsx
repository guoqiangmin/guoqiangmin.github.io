import styled from 'styled-components'
import { LogoFull } from './Logo'

const TopLeft = styled.div`
  position: absolute;
  top: calc(2vw - 10px);
  left: 2vw;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: min(10vw, 3em);
  line-height: 0.9em;
`

const BottomLeft = styled.div`
  position: absolute;
  bottom: 2vw;
  left: 2vw;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: min(15vw, 4em);
  line-height: 0.7em;
`

const BottomRight = styled.div`
  position: absolute;
  bottom: 2vw;
  right: 2vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 12px;
  text-align: right;
`

const LeftMiddle = styled.div`
  position: absolute;
  bottom: 50%;
  right: 2vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 12px;
  transform: rotate(90deg) translate3d(50%, 0, 0);
  transform-origin: 100% 50%;
`

const Bar = styled.div`
  position: absolute;
  top: ${(props) => (props.vertical ? '0px' : '50%')};
  left: ${(props) => (props.vertical ? '50%' : '0px')};
  width: ${(props) => (props.vertical ? '2px' : '150px')};
  height: ${(props) => (props.vertical ? '150px' : '2px')};
  background: #252525;
`

const Hamburger = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 2vw;
  right: 2vw;
  & > div {
    position: relative;
    width: 24px;
    height: 2px;
    background: #fff;
    margin-bottom: 6px;
  }
`

export default function Overlay() {
  return (
    <>
      <TopLeft>
        {/*<i>Ingenious Vision</i>*/}
        <LogoFull />
      </TopLeft>
      <BottomLeft>GM</BottomLeft>
      <BottomRight>
        2023
        <br />
        Created by
        <br />
        Guoqiang Min
      </BottomRight>
      <LeftMiddle>A flight of stairs</LeftMiddle>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
      <Bar />
      {/*<Bar vertical />*/}
    </>
  )
}
