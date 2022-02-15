import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
`
export const Section = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    background: #fff;
    margin-bottom: 2rem;
    border-radius: 50px;

    h1{
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
    img{
        height: 400px;
        border-radius: 20px;
        object-fit: cover;
    }
    
`
export const ImgWrapperOne = styled.div`
    img {
        width: 100%;
        overflow: hidden;
        
        &:hover {
            filter: brightness(90%);
            filter:contrast(135%);
        }
    }
`
export const ImgWrapperTwo = styled.div`
    img {
        width: 100%;
        overflow: hidden;

        &:hover {
            filter: brightness(90%);
            filter:contrast(135%);
        }
    }
`
