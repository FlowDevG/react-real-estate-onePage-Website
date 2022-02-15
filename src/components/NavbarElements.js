import styled, {css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
import {GoThreeBars} from 'react-icons/go';
import {AiFillAliwangwang} from 'react-icons/ai';
import {FaMagento} from 'react-icons/fa';


export const Nav = styled.div`
    background: ${({scrollNav}) => (scrollNav ? '#101522' : 'transparent')};
    height: 60px;
    justify-content: space-around;
    display: flex;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
`
const NavLink = css`
    color: white;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`
// export const SocialIcon1 = styled(AiFillAliwangwang)`
//     margin-right: 10px;
//     font-size: 1.5rem;
// `
export const SocialIcon = styled(FaMagento)`
    margin-right: 10px;
    font-size: 1.5rem;
`
export const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`
export const MenuBars = styled(GoThreeBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        background-size: contain;
        height: 40px;
        width: 40px;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavMenuLinks = styled(Link)`
    ${NavLink}
`
export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 50px;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        display: none;
    }
`
