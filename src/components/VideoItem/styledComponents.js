import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoItemContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 18px;
  width: 280px;

  @media screen and (max-width: 1199px) {
    width: 240px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

export const ChannelLogo = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 10px;
  margin-right: 10px;
`

export const VideoTitle = styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  font-family: Roboto;
  font-size: 18px;
  margin: 10px 0px;
`

export const ChannelName = styled.p`
  color: ${props => (props.darkTheme ? '#94a3b8' : '#606060')};
  font-family: Roboto;
  font-size: 16px;
  margin: 10px 0px;
`

export const ViewsAndPostedDate = styled.p`
  color: ${props => (props.darkTheme ? '#94a3b8' : '#606060')};
  font-family: Roboto;
  font-size: 17px;
  margin: 10px 0px;
`
