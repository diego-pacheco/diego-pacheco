import React from 'react'
import styled from 'styled-components'
// eslint-disable-next-line import/no-webpack-loader-syntax
import logo from './logo2.svg'
const height = '30px'
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 150px;
  background-color: #DE3925;
  float: left;
`

const Img = styled.img`
  margin: auto;
`


// const LogoImage = props => <img alt="DKMS" {...props} src={logo} height={height} />
const LogoImage = (props) => {
  return (
    <Wrapper>
      <Img alt="Checo" {...props} src={logo} height={height} />
    </Wrapper>
  )
}


export default LogoImage