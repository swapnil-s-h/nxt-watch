import {Link} from 'react-router-dom'
import {TiHome} from 'react-icons/ti'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import styled from 'styled-components'

export const SidebarBGContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 95vh;
    width: 21vw;
    flex-shrink: 0;
    padding-left: 28px;
    background-color: ${props => (props.darkTheme ? '#383838' : '#ffffff')};

    @media screen and (max-width: 1199px) {
        width: 25vw;
    }

    @media screen and (max-width: 767px) {
        display: none;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 5px;
    background-color: ${props => {
      if (props.darkTheme) {
        return props.isActive ? '#606060' : '#383838'
      }
      return props.isActive ? '#d7dfe9' : '#ffffff'
    }};
`

export const HomeIcon = styled(TiHome)`
    color: ${props => (props.isActive ? '#ff0b37' : '#606060')};
    font-size: 22px;
    margin-right: 12px;
`

export const TrendingIcon = styled(HiFire)`
    color: ${props => (props.isActive ? '#ff0b37' : '#606060')};
    font-size: 22px;
    margin-right: 12px;
`

export const GamingIcon = styled(SiYoutubegaming)`
    color: ${props => (props.isActive ? '#ff0b37' : '#606060')};
    font-size: 22px;
    margin-right: 12px;
`

export const SavedVideoIcon = styled(CgPlayListAdd)`
    color: ${props => (props.isActive ? '#ff0b37' : '#606060')};
    font-size: 22px;
    margin-right: 12px;
`

export const NavigationLinkText = styled.p`
    font-family: Roboto;
    font-weight: ${props => (props.isActive ? 500 : 400)};
    font-size: 18px;
    color: #606060;
    color: ${props => (props.darkTheme ? '#ffffff' : '#606060')};
    margin: 10px 0px;
`

export const SidebarFooterSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
`

export const ContactUsHeading = styled.h1`
    font-family: Roboto;
    font-size: 17px;
    color: ${props => (props.darkTheme ? '#ffffff' : '#313131')};
    font-weight: 500;
`

export const ContactLogosContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 130px;
    margin: 5px 0px;
`

export const ContactLogo = styled.img`
    height: 35px;
    width: 35px;
`
export const ContactGreetingMessage = styled.p`
    font-family: Roboto;
    font-size: 16px;
    color: ${props => (props.darkTheme ? '#ffffff' : '#313131')};
`
