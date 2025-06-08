import {IoMdClose} from 'react-icons/io'
import {IoSearchSharp} from 'react-icons/io5'
import styled from 'styled-components'

export const HomeBGContainer = styled.div`
    flex-grow: 1;
    background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
`

export const OutsideBGContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${props => (props.darkTheme ? '#383838' : '#ffffff')};
`

export const BannerBGContainer = styled.div`
    background-image: url(https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png);
    background-size: cover;
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 30px;
`

export const BannerLeftSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 35%;

    @media screen and (max-width: 1199px) {
        width: 55%;
    }

    @media screen and (max-width: 767px) {
        width: 75%;
    }
`

export const WebsiteLogoBanner = styled.img`
    width: 140px;
    @media screen and (max-width: 767px) {
        width: 100px;
    }
`

export const BannerText = styled.p`
    font-family: Roboto;
    font-size: 18px;

    @media screen and (max-width: 767px) {
        font-size: 16px;
    }
`

export const BannerButton = styled.button`
    background-color: #ffffff;
    color: #000000;
    font-family: Roboto;
    font-weight: 500;
    border: 2px solid #000000;
    padding: 10px 20px;
    font-size: 18px;

    @media screen and (max-width: 767px) {
        font-size: 14px;
        padding: 6px 14px;
    }
`

export const CloseButton = styled.button`
    background-color: transparent;
    border-width: 0px;
    height: 22px;
    width: 22px;
    padding: 0px;
`

export const CloseIcon = styled(IoMdClose)`
    color: #000000;
    font-size: 20px;
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
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 20px;
`

export const DownsideContentContainer = styled.div`
    padding: 20px;

    @media screen and (max-width: 1199px) {
        padding: 12px;
    }
`

export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 500px;
`

export const SearchInputElement = styled.input`
    flex-grow: 1;
    padding: 0px 16px;
    color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
    border: 1px solid #909090;
    font-family: Roboto;
    font-size: 18px;
    height: 38px;
    background-color: ${props => (props.darkTheme ? '#000000' : '#ffffff')};
`

export const SearchButton = styled.button`
    border: 1px solid #909090;
    background-color: ${props => (props.darkTheme ? '#424242' : '#cccccc')};
    width: 60px;
    height: 38px;
`

export const SearchIcon = styled(IoSearchSharp)`
    color: #909090;
    font-size: 20px;
`
