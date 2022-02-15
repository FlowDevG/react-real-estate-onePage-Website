import React from 'react';
import AOS from 'aos';
import {Container,Section,ImgWrapperOne,ImgWrapperTwo} from './SliderElements';

const Slider = () => {
    AOS.init({
        offset: 400,
        duration: 1000
    });
    return (
        <Container>
            <Section>
                <ImgWrapperOne data-aos="zoom-in-up">
                    <img src='./images/ImageSeven.jpg' alt='slide1' />
                    <h1>Most Trending now</h1>
                </ImgWrapperOne>
                <ImgWrapperTwo data-aos="zoom-in-up">
                    <h1>People Preffered</h1>
                    <img src='./images/ImageSix.jpg' alt='slide2' />
                </ImgWrapperTwo>
            </Section>
        </Container>
    )
}

export default Slider;
