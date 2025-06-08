import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoItemTrendingBGContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 18px;

  @media screen and (max-width: 575px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 14px;
  }
`

export const ThumbnailImage = styled.img`
  width: 49%;

  @media screen and (max-width: 575px) {
    width: 100%;
  }
`

export const VideoDetailsContainerLGDevices = styled.div`
  width: 49%;
  @media screen and (max-width: 575px) {
    display: none;
  }
`

export const VideoDetailsContainerMobile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;

  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoTitle = styled.h1`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#0f0f0f')};
  font-family: Roboto;
  font-weight: 600;
  font-size: 20px;
  margin: 10px 0px;

  @media screen and (max-width: 991px) {
    font-size: 18px;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
    font-weight: 500;
    margin: 0px;
  }
`

export const ChannelName = styled.p`
  color: #64748b;
  font-family: Roboto;
  font-size: 18px;
  margin: 5px 0px;

  @media screen and (max-width: 991px) {
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

export const ChannelLogo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 14px;
`
