import styled from 'styled-components';
import kitchen from '../../../assets/images/main.png';

export const Container = styled.div`
    width: 100vw;
    height: 90vh;
    position: relative;
`

export const MainBcg = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${kitchen});
    background-color: black;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    overflow: hidden;
`

export const Logo = styled.img`
    position: absolute;
    bottom: 10%;
    left: 10%;

    @media screen and (max-width: 300px) {
        width: 80%;
    }
`