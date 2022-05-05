import React from 'react'
import { Container, MainBcg, Logo } from './Home.styles';
import logo from '../../../assets/images/logo.png';


const Home = () => {
  return (
    <Container>
        <MainBcg></MainBcg>
        <Logo src={logo}/>
    </Container> 
  )
}

export default Home