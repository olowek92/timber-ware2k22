import styled from 'styled-components';

export const NavbarItems = styled.nav`
    background: ${({ theme }) => theme.colors.mainDark};
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.desktop.m};

    @media screen and (max-width: 960px) {
        position: relative;
    }
`

export const MenuIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: ${({ theme }) => theme.fontSize.desktop.m};
        cursor: pointer;
    }
`

export const NavbarList = styled.ul<{ active: boolean}>`
    display: grid;
    grid-template-columns: repeat(7, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 94vw;
    justify-content: center;
    margin-right: 2rem;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 700px;
        position: absolute;
        top: 64px;
        left: ${({ active }) => active ? '0' : "-100%"};
        background: ${({ active }) => active ? '#1A242B' : ''};
        z-index: ${({ active }) => active ? '1' : ''};
        opacity: 1;
        transition: all 0.5s ease;
        overflow: hidden;
    }
`

export const NavbarListItem = styled.li`

`

export const NavbarListItemAnchor = styled.a`
    color: ${({ theme }) => theme.colors.mainLight};
    text-decoration: none;
    padding: 0.5rem 1rem;
    font-family: 'Mulish', sans-serif;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.hover};
        border-radius: 4px;
        transition: all 0.2s ease-out;
    }

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            background-color: ${({ theme }) => theme.colors.hover};
            border-radius: 0;
        }
    }
`