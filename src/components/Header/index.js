import {FaMoon} from 'react-icons/fa'
import {IoMenu} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'
import {BsBrightnessHigh} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {withRouter} from 'react-router-dom'
import DarkThemeContext from '../../context/DarkThemeContext'
import {
  WebsiteLogo,
  Navbar,
  RightsideNavigations,
  ThemeButton,
  ProfileLogo,
  LogoutButton,
  NavigationButtonsMobile,
  StyledLink,
  LogoutPopup,
  Warning,
  ButtonsPopup,
  CancelButton,
  ConfirmButton,
  LinkElement,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedVideoIcon,
  NavigationLinkText,
  CloseIcon,
  CloseBtn,
  MenuPopupContainer,
} from './styledComponents'

const Header = props => {
  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  const {match} = props
  const {path} = match
  return (
    <DarkThemeContext.Consumer>
      {value => {
        const {darkTheme, onChangeTheme} = value
        const logoUrl = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <Navbar darkTheme={darkTheme}>
            <StyledLink to="/">
              <WebsiteLogo src={logoUrl} alt="website logo" />
            </StyledLink>
            <RightsideNavigations>
              <ThemeButton
                onClick={onChangeTheme}
                data-testid="theme"
                type="button"
                darkTheme={darkTheme}
              >
                {darkTheme ? <BsBrightnessHigh /> : <FaMoon />}
              </ThemeButton>
              <ProfileLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                contentStyle={{
                  width: '100vw',
                  height: '100vh',
                }}
                trigger={
                  <NavigationButtonsMobile type="button" darkTheme={darkTheme}>
                    <IoMenu />
                  </NavigationButtonsMobile>
                }
              >
                {close => (
                  <>
                    <CloseBtn type="button" onClick={close}>
                      <CloseIcon darkTheme={darkTheme} />
                    </CloseBtn>
                    <MenuPopupContainer>
                      <LinkElement
                        darkTheme={darkTheme}
                        to="/"
                        isActive={path === '/'}
                      >
                        <HomeIcon isActive={path === '/'} />
                        <NavigationLinkText
                          darkTheme={darkTheme}
                          isActive={path === '/'}
                        >
                          Home
                        </NavigationLinkText>
                      </LinkElement>
                      <LinkElement
                        darkTheme={darkTheme}
                        to="/trending"
                        isActive={path === '/trending'}
                      >
                        <TrendingIcon isActive={path === '/trending'} />
                        <NavigationLinkText
                          darkTheme={darkTheme}
                          isActive={path === '/trending'}
                        >
                          Trending
                        </NavigationLinkText>
                      </LinkElement>
                      <LinkElement
                        darkTheme={darkTheme}
                        to="/gaming"
                        isActive={path === '/gaming'}
                      >
                        <GamingIcon isActive={path === '/gaming'} />
                        <NavigationLinkText
                          darkTheme={darkTheme}
                          isActive={path === '/gaming'}
                        >
                          Gaming
                        </NavigationLinkText>
                      </LinkElement>
                      <LinkElement
                        darkTheme={darkTheme}
                        to="/saved-videos"
                        isActive={path === '/saved-videos'}
                      >
                        <SavedVideoIcon isActive={path === '/saved-videos'} />
                        <NavigationLinkText
                          isActive={path === '/saved-videos'}
                          darkTheme={darkTheme}
                        >
                          Saved Videos
                        </NavigationLinkText>
                      </LinkElement>
                    </MenuPopupContainer>
                  </>
                )}
              </Popup>
              <Popup
                modal
                className="popup-content"
                trigger={
                  <LogoutButton darkTheme={darkTheme} type="button">
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <LogoutPopup darkTheme={darkTheme}>
                    <Warning darkTheme={darkTheme}>
                      Are you sure you want to logout?
                    </Warning>
                    <ButtonsPopup>
                      <CancelButton onClick={close} type="button">
                        Cancel
                      </CancelButton>
                      <ConfirmButton onClick={logout} type="button">
                        Confirm
                      </ConfirmButton>
                    </ButtonsPopup>
                  </LogoutPopup>
                )}
              </Popup>
              <Popup
                modal
                className="popup-content"
                trigger={
                  <NavigationButtonsMobile
                    onClick={logout}
                    type="button"
                    darkTheme={darkTheme}
                  >
                    <FiLogOut />
                  </NavigationButtonsMobile>
                }
              >
                {close => (
                  <LogoutPopup darkTheme={darkTheme}>
                    <Warning darkTheme={darkTheme}>
                      Are you sure you want to logout?
                    </Warning>
                    <ButtonsPopup>
                      <CancelButton onClick={close} type="button">
                        Cancel
                      </CancelButton>
                      <ConfirmButton onClick={logout} type="button">
                        Confirm
                      </ConfirmButton>
                    </ButtonsPopup>
                  </LogoutPopup>
                )}
              </Popup>
            </RightsideNavigations>
          </Navbar>
        )
      }}
    </DarkThemeContext.Consumer>
  )
}

export default withRouter(Header)
