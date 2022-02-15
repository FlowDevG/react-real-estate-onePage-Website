import React from 'react';
import {Button} from './Button';
import AOS from 'aos';
import {Section,Container,ColumnLeft,ColumnRight} from './InfoSectionElements';



const InfoSection = ({heading,paragraphOne,paragraphTwo,buttonLabel,reverse,image}) => {
    
    AOS.init({
        offset: 400,
        duration: 1500
    });

    return (
        
        <Section>
            <Container reverse={reverse}>
                <ColumnLeft data-aos="fade-right">
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to="/homes" primary='true'>{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight data-aos="zoom-out-left" data-aos-duration="1750">
                    <img src={image} alt="home" />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection;
