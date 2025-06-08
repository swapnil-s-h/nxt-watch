import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'

import styled from 'styled-components'

export const VideoItemDetailsBGContainer = styled.div`
    flex-grow: 1;
    min-height: 100vh;
    background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};

    @media screen and (max-width: 767px) {
        flex-grow: 0;
    }
`

export const OutsideBGContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${props => (props.darkTheme ? '#383838' : '#ffffff')};
`

export const SuccessViewBGContainer = styled.div`
    width: 100%;
    padding: 14px;
`

export const VideoTitle = styled.p`
    font-size: 20px;
    font-family: Roboto;
    margin-bottom: 0px;
    color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`

export const VideoDetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 10px;
    }
`

export const ViewsCountAndPublishedAt = styled.p`
    font-family: Roboto;
    font-size: 16px;
    color: ${props => (props.darkTheme ? '#cbd5e1' : '#94a3b8')};
`

export const LikeDislikeAndSave = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const LikeBtn = styled.button`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 12px;
    background-color: transparent;
    border-width: 0px;
`

export const LikeIcon = styled(BiLike)`
    color: ${props => (props.liked ? '#2563eb' : '#64748b')};
    font-size: 20px;
    margin-right: 8px;
`

export const DislikeIcon = styled(BiDislike)`
    color: ${props => (props.liked ? '#2563eb' : '#64748b')};
    font-size: 20px;
    margin-right: 8px;
`

export const SaveIcon = styled(CgPlayListAdd)`
    color: ${props => (props.liked ? '#2563eb' : '#64748b')};
    font-size: 20px;
    margin-right: 8px;
`

export const LikeText = styled.p`
    font-family: Roboto;
    font-size: 18px;
    color: ${props => (props.liked ? '#2563eb' : '#64748b')};
    margin: 0px;
`

export const DislikeText = styled(LikeText)`
    color: ${props => (props.disliked ? '#4f46e5' : '#94a3b8')};
`

export const SaveText = styled(LikeText)`
    color: ${props => (props.saved ? '#4f46e5' : '#94a3b8')};
`

export const HorizontalLine = styled.hr`
    border: 2px solid ${props => (props.darkTheme ? '#cbd5e1' : '#cccccc')};
    width: 100%;
    margin-bottom: 16px;

    @media screen and (max-width: 767px) {
        margin-bottom: 10px;
    }
`

export const BelowContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`

export const ChannelLogo = styled.img`
    height: 50px;
    width: 50px;
    margin-right: 12px;

    @media screen and (max-width: 767px) {
        display: none;
    }
`

export const ChannelNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 767px) {
        flex-direction: row;
    }
`

export const ChannelLogoMobile = styled.img`
    height: 40px;
    width: 40px;
    margin-right: 12px;

    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const ChannelName = styled.p`
    font-family: Roboto;
    font-size: 20px;
    margin: 0px;
    color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`

export const Subscribers = styled.p`
    font-size: 16px;
    font-family: Roboto;
    color: ${props => (props.darkTheme ? '#cbd5e1' : '#94a3b8')};
    margin: 0px;
`

export const DescriptionLargeDevices = styled.p`
    color: ${props => (props.darkTheme ? '#cbd5e1' : '#64748b')};
    font-family: Roboto;
    font-size: 16px;

    @media screen and (max-width: 767px) {
        display: none;
    }
`

export const DescriptionMobiles = styled.p`
    color: ${props => (props.darkTheme ? '#cbd5e1' : '#64748b')};
    font-family: Roboto;
    font-size: 16px;

    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const PlayerContainer = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
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

export const LoaderContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
