import {Link} from 'react-router-dom'
import {TiHome} from 'react-icons/ti'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {IoMdClose} from 'react-icons/io'

import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 22px;
  background-color: ${props => (props.darkTheme ? '#383838' : '#ffffff')};

  @media screen and (max-width: 767px) {
    padding: 8px 12px;
  }
`

export const WebsiteLogo = styled.img`
  width: 120px;
  margin-left: 12px;

  @media screen and (max-width: 767px) {
    width: 90px;
  }

  @media screen and (max-width: 575px) {
    width: 75px;
    margin-left: 6px;
  }
`

export const RightsideNavigations = styled.div`
  display: flex;
  align-items: center;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  padding: 0px;
  height: 23px;
  width: 23px;
  font-size: 22px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  margin: 0px 12px;

  @media screen and (max-width: 767px) {
    height: 20px;
    padding: 4px;
    width: 20px;
    font-size: 14px;
    margin: 0px 6px;
  }
`

export const ProfileLogo = styled.img`
  height: 25px;
  width: 25px;
  margin: 0px 12px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => (props.darkTheme ? '#f4f4f4' : '#3b82f6')};
  border: 2px solid ${props => (props.darkTheme ? '#f4f4f4' : '#3b82f6')};
  border-radius: 6px;
  padding: 7px 17px;
  font-family: Roboto;
  font-weight: 600;
  font-size: 18px;
  margin: 0px 12px;
  
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavigationButtonsMobile = styled.button`
  background-color: transparent;
  border-width: 0px;
  padding: 0px;
  height: 20px;
  width: 20px;
  font-size: 19px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  margin: 0px 6px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0px;
`

export const LogoutPopup = styled.div`
  background-color: ${props => (props.darkTheme ? '#606060' : '#f1f5f9')};
  padding: 20px 40px;

  @media screen and (max-width: 767px) {
    padding: 12px 20px;
  }
`

export const Warning = styled.p`
  color: ${props => (props.darkTheme ? '#f1f5f9' : '#606060')};
  font-family: Roboto;
  font-size: 18px;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`

export const ButtonsPopup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const CancelButton = styled.button`
  color: #94a3b8;
  font-family: Roboto;
  font-size: 18px;
  padding: 14px;
  border: 1px solid #94a3b8;
  background-color: transparent;
  margin-right: 10px;
  border-radius: 5px;

  @media screen and (max-width: 767px) {
    padding: 7px;
    font-size: 14px;
    margin-right: 6px;
  }
`

export const ConfirmButton = styled.button`
  color: #f1f5f9;
  font-family: Roboto;
  border-radius: 5px;
  font-size: 18px;
  padding: 14px;
  border: 1px solid #3b82f6;
  background-color: #3b82f6;
  margin-left: 10px;

  @media screen and (max-width: 767px) {
    padding: 7px;
    font-size: 14px;
    margin-right: 6px;
  }
`

export const LinkElement = styled(Link)`
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

export const MenuPopupContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const CloseIcon = styled(IoMdClose)`
  color: #000000;
  font-size: 36px;
`

export const CloseBtn = styled.button`
  background-color: transparent;
  border-width: 0px;
  height: 60px;
  width: 100%;
  text-align: right;
`
