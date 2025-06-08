import {HiFire} from 'react-icons/hi'
import styled from 'styled-components'

export const TrendingBGContainer = styled.div`
    flex-grow: 1;
    background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const OutsideBGContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${props => (props.darkTheme ? '#383838' : '#ffffff')};
`

export const LoaderContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FailureViewContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    width: 100%

    @media screen and (max-width: 767px) {
        padding: 18px;
    }
`

export const FailureImage = styled.img`
    width: 75%;
    max-width: 540px;
    
`

export const FailureMsg = styled.h1`
    color: ${props => (props.darkTheme ? '#f8fafc' : '#00306e')};
    font-family: Roboto;
    font-size: 26px;
    margin: 10px;
    font-weight: 600;

    @media screen and (max-width: 767px) {
        font-size: 22px;
    }
`

export const FailureMsgDescription = styled.p`
    color: ${props => (props.darkTheme ? '#94a3b8' : '#7e858e')};
    font-family: Roboto;
    font-size: 18px;
    margin: 10px;
    font-weight: 500;

    @media screen and (max-width: 767px) {
        font-size: 16px;
    }
`

export const RetryBtn = styled.button`
    background-color: #4f46e5;
    border-width: 0px;
    border-radius: 10px;
    padding: 14px 24px;
    font-size: 16px;
    color: #f1f1f1;
    font-weight: 500;
    margin: 10px;
    font-family: Roboto;

    @media screen and (max-width: 767px) {
        padding: 8px 18px;
    }
`

export const SuccessViewContainer = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;

    @media screen and (max-width: 575px) {
        padding: 0px;
    }
`

export const TrendingTitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px 34px;
    background-color: ${props => (props.darkTheme ? '#313131' : '#f4f4f4')};

    @media screen and (max-width: 767px) {
        padding: 10px 26px;
    }
`

export const TrendingIconTitle = styled(HiFire)`
    color: #ff0b37;
    font-size: 46px;
    padding: 10px;
    border-radius: 18px;
    margin-right: 16px;
    background-color: ${props => (props.darkTheme ? '#606060' : '#cbd5e1')};

    @media screen and (max-width: 767px) {
        font-size: 36px;
        padding: 5px;
        border-radius: 12px;
        margin-right: 12px;
    }
`

export const TrendingTitle = styled.h1`
    color: ${props => (props.darkTheme ? '#f9f9f9' : '#0f0f0f')};
    font-family: Roboto;
    font-weight: 700;
    font-size: 30px;
`
