import React from 'react'
import GrainIcon from '@material-ui/icons/Grain';
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import Logoimage from '../../assets/img/logo.png'

const Header = () => {
  return (
    <Wrapper>
      <Menuitem>
        <Img src={Logoimage} />
      </Menuitem>
      <Menuitem>
        <Button variant="contained" color="primary">Новинки</Button>
        <Button variant="contained" color="primary">lorem</Button>
        <Button variant="contained" color="primary">lorem</Button>
      </Menuitem>
    </Wrapper>
  )
}

export default Header


const Wrapper = styled.div`

height:100px;
background-color: burlywood;
display:flex;
`
const Menuitem = styled.div`
`
const Logo = styled.span`
display: block;
margin-left:15px;
font-size:30px;
text-transform:uppercase;
`
const Img = styled.img`
width:100px;
height:100px;
`;