import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 10px;
  min-height: 100%;
`

export const RoseburnLogo = styled.img.attrs({
  src: '/images/roseburn-logo.png',
  alt: 'roseburn-logo'
})`
  width: 170px;
`
export const RoseburnTitle = styled.h1`
  font-size: 18px;
  color: #222;
`

export const StartButton = styled(Link)`
  display: block;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  text-align: center;
  appearance: none;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 20px;
  width: 90%;
  margin-top: 20px;
`

export const Blurb = styled.p`
`
