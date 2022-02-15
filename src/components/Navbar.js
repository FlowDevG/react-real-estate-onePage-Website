import React, {useState, useEffect} from 'react';
import {Nav,Logo,MenuBars,NavMenu,NavMenuLinks,NavBtn,SocialIcon} from './NavbarElements'
import {menuData} from '../data/MenuData';
import {Button}  from './Button';
import {IconContext} from 'react-icons/lib';

function Navbar({toggle}) {

    const [scrollNav, setScrollNav] = useState(false);
    
    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    return (
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav ={scrollNav}>
            <Logo to='/'> <SocialIcon/> FLOWG</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary="true">Contact Us</Button>
            </NavBtn>
        </Nav>
        </IconContext.Provider>
    )
}

export default Navbar;
