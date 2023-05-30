import styled from 'styled-components'
import { LogoSimple } from './Logo'
import { useTheme } from '../hooks/useTheme'
import { IconLinkedIn } from './icons/LinkedIn'
import { IconGithub } from './icons/Github'
import state from '../store/state'
import React, { Fragment } from 'react'

const OverlayContainer = styled.div`
  transition: opacity 2s;
  opacity: 0;

  &.loaded {
    opacity: 1;
  }
`

const TopLeft = styled.div`
  position: absolute;
  //top: calc(1.5vw - 10px);
  //left: 1.5vw;
  top: 1rem;
  left: 1rem;
  font-family: LEMON MILK, sans-serif;
  font-weight: 300;
  font-size: min(10vw, 1.25em);
  line-height: 0.9em;
`

const BottomLeft = styled.div`
  position: absolute;
  //bottom: 1.5vw;
  //left: 1.5vw;
  bottom: 1rem;
  left: 1rem;
  & .header__arrow {
    display: block;
    //height: 2.7rem;
    height: 8.7rem;
    margin-top: 0rem;
    width: 1.7rem;
    transform: translate(0px, 0px);
    animation: bounce 1.5s infinite;

    & .header__arrow__text {
      color: ${(props) => props.color || '#fff'};
      writing-mode: tb-rl;
      //transform: rotate(90deg);
      white-space: nowrap;
      display: block;
      bottom: 0;
      margin-left: 0.35rem;
      font-family: 'Roboto';
      font-weight: 300;
    }
    }

    & .header__arrow__dash {
      border-right: 2px solid ${(props) => props.color || '#fff'};
      height: 2.5rem;
      left: 50%;
      position: absolute;
      //top: 0;
      top: 6rem;
      transform: translate(-50%, 0);
    }

    & .header__arrow__triangle {
      border-color: ${(props) => props.color || '#fff'};
      border-style: solid;
      border-width: 2px 2px 0 0;
      bottom: 1rem;
      height: 0.5rem;
      left: 50%;
      position: absolute;
      transform: rotate(135deg);
      transform-origin: 0px 100%;
      width: 0.5rem;
    }
  }
`

const BottomRight = styled.div`
  position: absolute;
  //bottom: 1.5vw;
  //right: 1.5vw;
  bottom: 1rem;
  right: 1rem;
  font-family: 'Roboto';
  font-weight: 400;
  line-height: 1em;
  //letter-spacing: -0.01em;
  font-size: 12px;
  //text-align: right;
  color: ${(props) => props.color || '#fff'};
`

const Hamburger = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  //top: 1.5vw;
  //right: 1.5vw;
  top: 1.25rem;
  right: 1rem;
  & > div {
    position: relative;
    width: 24px;
    height: 1.5px;
    background: ${(props) => props.color || '#fff'};
    margin-bottom: 6px;
  }

  & > div:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

const TopRight = styled.div`
  font-family: 'Roboto';
  font-weight: 300;
  position: absolute;
  display: flex;
  flex-direction: column;
  //top: 1.5vw;
  //right: 1.5vw;
  top: 1.25rem;
  right: 1rem;

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
        text-transform: uppercase;
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
          background-color: ${(props) => props.bgcolor || '#fff'};
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

  @media (max-width: 768px) {
    display: none;
  }
`

export default function Overlay() {
  const theme = useTheme()

  return (
    <OverlayContainer className={`overlay-container`}>
      <TopLeft>
        <LogoSimple color={theme.palette.text.secondary} />
      </TopLeft>
      <BottomLeft color={theme.palette.text.secondary}>
        <div className="header__arrow">
          <div className="header__arrow__text">scroll down</div>
          <div className="header__arrow__dash"></div>
          <div className="header__arrow__triangle"></div>
        </div>
      </BottomLeft>
      <BottomRight>
        <a target="_blank" href="https://www.linkedin.com/in/guoqiang-min" rel="noreferrer">
          <IconLinkedIn width={30} height={30} color={theme.palette.text.secondary} />
        </a>
        <a target="_blank" href="https://github.com/guoqiangmin" rel="noreferrer" style={{ marginLeft: '10px' }}>
          <IconGithub width={30} height={30} color={theme.palette.text.secondary} />
        </a>
      </BottomRight>
      <TopRight color={theme.palette.text.secondary} bgcolor={theme.palette.text.secondary}>
        <nav className="header__nav">
          <ul className="nav__list">
            {Object.keys(state.navs).map((keyName, index) => (
              <Fragment key={index}>
                {state.navs[keyName].display ? (
                  <li className="nav__item">
                    <a href={'#' + keyName} className="nav__link">
                      {keyName}
                    </a>
                  </li>
                ) : (
                  <></>
                )}
              </Fragment>
            ))}
          </ul>
        </nav>
      </TopRight>
      <Hamburger color={theme.palette.text.secondary}>
        <div />
        <div />
        <div />
      </Hamburger>
    </OverlayContainer>
  )
}
