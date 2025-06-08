import styled from 'styled-components'

export const NoSavedVideosContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const NoSavedVideosImage = styled.img`
    width: 100%;
    max-width: 430px;
`

export const NoSavedVideosHeading = styled.h1`
    color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
    font-family: Roboto;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 0px;

    @media screen and (max-width: 767px) {
        font-size: 26px;
    }
`

export const NoSavedVideosParagraph = styled.p`
    color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
    font-family: Roboto;
    font-weight: 500;
    font-size: 20px;
    margin-top: 10px;

    @media screen and (max-width: 767px) {
        font-size: 16px;
    }
`
