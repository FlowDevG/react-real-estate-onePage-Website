import React from 'react';
import {menuData} from '../data/MenuData';
import {Button} from './Button';
import {IconContext} from 'react-icons/lib';
import {BtnWrap,DropDownContainer,Icon,CloseIcon,DropDownWrapper,DropDownMenu,DropDownLink} from './DropDownElements'

const DropDown = ({isOpen, toggle}) => {
    return (
        <IconContext.Provider value={{color: '#fff'}}>
        <DropDownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropDownWrapper>
                <DropDownMenu>
                    {menuData.map((item, index) => 
                    ( <DropDownLink to={item.link} key={index}>
                    {item.title} 
                    </DropDownLink>
                    ))}
                </DropDownMenu>
                <BtnWrap>
                    <Button primary='true' round='true' big='true' to='/contact'>Contact Us</Button>
                </BtnWrap>
            </DropDownWrapper>
        </DropDownContainer>
        </IconContext.Provider>
    )
}

export default DropDown;
