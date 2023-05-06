import styled from 'styled-components'
import { LogoFull } from './Logo'
import { useTheme } from '../hooks/useTheme'
import { IconLinkedIn } from './icons/LinkedIn'
import { IconGithub } from './icons/Github'
import { IconWhatsApp } from './icons/WhatsApp'
import { IconMail } from './icons/Mail'

const TopLeft = styled.div`
  position: absolute;
  top: calc(1.5vw - 10px);
  left: 1.5vw;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: min(10vw, 3em);
  line-height: 0.9em;
`

const BottomLeft = styled.div`
  position: absolute;
  bottom: 1.5vw;
  left: 1.5vw;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: min(15vw, 4em);
  line-height: 0.7em;
  color: ${(props) => props.color || '#fff'};
`

const BottomRight = styled.div`
  position: absolute;
  bottom: 1.5vw;
  right: 1.5vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  //letter-spacing: -0.01em;
  font-size: 12px;
  //text-align: right;
  color: ${(props) => props.color || '#fff'};
`

const LeftMiddle = styled.div`
  position: absolute;
  bottom: 50%;
  right: 1.5vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 12px;
  transform: rotate(90deg) translate3d(50%, 0, 0);
  transform-origin: 100% 50%;
  color: ${(props) => props.color || '#fff'};
`

// const Bar = styled.div`
//   position: absolute;
//   top: ${(props) => (props.vertical ? '0px' : '50%')};
//   left: ${(props) => (props.vertical ? '50%' : '0px')};
//   width: ${(props) => (props.vertical ? '2px' : '150px')};
//   height: ${(props) => (props.vertical ? '150px' : '2px')};
//   background: #252525;
// `

// const Hamburger = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   top: 1.5vw;
//   right: 1.5vw;
//   & > div {
//     position: relative;
//     width: 24px;
//     height: 2px;
//     background: ${(props) => props.color || '#fff'};
//     margin-bottom: 6px;
//   }
// `

const TopRight = styled.div`
  font-family: 'Roboto';
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 1.5vw;
  right: 1.5vw;
  // & > div {
  //   position: relative;
  //   width: 24px;
  //   height: 2px;
  //   background: ${(props) => props.color || '#fff'};
  //   margin-bottom: 6px;
  // }

  & .nav__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    //height: 100%;
    & > .nav__item {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      //height: 100%;
      &:not(:first-child) {
        margin-left: 18px;
      }
      & > .nav__link {
        color: ${(props) => props.color || '#fff'};
        text-decoration: none;
        background-color: transparent;
        position: relative;
        display: inline-block;
        height: 1.7em;
        font-size: 16px;
        line-height: 1.7em;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          //background-color: #fff;
          -webkit-transform: scale(0, 1);
          transform: scale(0, 1);
          -webkit-transform-origin: right top;
          transform-origin: right top;
          -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          transition: -webkit-transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          background-color: ${(props) => props.backgroundColor || '#fff'};
        }
        &:hover:before,
        &:focus:before {
          -webkit-transform-origin: left top;
          transform-origin: left top;
          -webkit-transform: scale(1, 1);
          transform: scale(1, 1);
        }
      }
    }
  }
`

export default function Overlay() {
  const theme = useTheme()
  return (
    <>
      <TopLeft>
        {/*<i>Ingenious Vision</i>*/}
        <LogoFull color={theme.palette.text.secondary} />
      </TopLeft>
      <BottomLeft>
        <a target="_blank" href="https://www.linkedin.com/in/guoqiang-min" rel="noreferrer">
          <IconLinkedIn width={32} height={32} color={theme.palette.text.secondary} />
        </a>
        <a target="_blank" href="https://github.com/guoqiangmin" rel="noreferrer" style={{ marginLeft: '10px' }}>
          <IconGithub width={32} height={32} color={theme.palette.text.secondary} />
        </a>
      </BottomLeft>
      <BottomRight>
        <a href="mailto:minguoqiang88@gmail.com" rel="noreferrer">
          <IconMail width={32} height={32} color={theme.palette.text.secondary} />
        </a>
        <a target="_blank" href="https://wa.me/89684412430" rel="noreferrer" style={{ marginLeft: '10px' }}>
          <IconWhatsApp width={32} height={32} color={theme.palette.text.secondary} />
        </a>
      </BottomRight>
      <LeftMiddle color={theme.palette.text.secondary}>A Personal Portfolio</LeftMiddle>
      <TopRight color={theme.palette.text.secondary} backgroundColor={theme.palette.text.secondary}>
        <nav className="header__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#work" className="nav__link">
                WORK
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                ABOUT
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                EXPERTISE
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </TopRight>
      {/*<Hamburger color={theme.palette.text.secondary}>*/}
      {/*  <div />*/}
      {/*  <div />*/}
      {/*  <div />*/}
      {/*</Hamburger>*/}
      {/*<Bar />*/}
      {/*<Bar vertical />*/}
    </>
  )
}
