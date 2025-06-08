import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoItemGamingBGContainer = styled(Link)`
  text-decoration: none;
  width: 30%;
  margin: 12px;

  @media screen and (max-width: 991px) {
    margin: 8px 0px;
  }

  @media screen and (max-width: 575px) {
    width: 47%;
    margin: 8px 0px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoTitleGaming = styled.h1`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#0f0f0f')};
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`

export const ViewsGaming = styled.p`
  color: #64748b;
  font-family: Roboto;
  font-size: 18px;
  margin: 0px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`
