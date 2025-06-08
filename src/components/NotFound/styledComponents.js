import styled from 'styled-components'

export const NotFoundBGContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    min-height: 100vh;
    @media screen and (max-width: 767px) {
        padding: 20px;
    }
`

export const NotFoundImage = styled.img`
    width: 100%;
    max-width: 450px;
`

export const NotFoundHeading = styled.h1`
    color: #231f20;
    font-family: Roboto;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 0px;

    @media screen and (max-width: 767px) {
        font-size: 26px;
    }
`

export const NotFoundParagraph = styled.p`
    color: #424242;
    font-family: Roboto;
    font-weight: 500;
    font-size: 20px;
    margin-top: 10px;

    @media screen and (max-width: 767px) {
        font-size: 16px;
    }
`
