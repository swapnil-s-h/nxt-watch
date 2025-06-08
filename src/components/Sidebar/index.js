import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import DarkThemeContext from '../../context/DarkThemeContext'

import {
  SidebarBGContainer,
  StyledLink,
  HomeIcon,
  NavigationLinkText,
  TrendingIcon,
  GamingIcon,
  SavedVideoIcon,
  SidebarFooterSection,
  ContactUsHeading,
  ContactLogosContainer,
  ContactLogo,
  ContactGreetingMessage,
} from './styledComponents'

class Sidebar extends Component {
  render() {
    const {match} = this.props
    const {path} = match
    return (
      <DarkThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <SidebarBGContainer darkTheme={darkTheme}>
              <div>
                <StyledLink
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
                </StyledLink>
                <StyledLink
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
                </StyledLink>
                <StyledLink
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
                </StyledLink>
                <StyledLink
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
                </StyledLink>
              </div>
              <SidebarFooterSection>
                <ContactUsHeading darkTheme={darkTheme}>
                  CONTACT US
                </ContactUsHeading>
                <ContactLogosContainer>
                  <ContactLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linkedin logo"
                  />
                </ContactLogosContainer>
                <ContactGreetingMessage darkTheme={darkTheme}>
                  Enjoy! Now you can see your recommendations!
                </ContactGreetingMessage>
              </SidebarFooterSection>
            </SidebarBGContainer>
          )
        }}
      </DarkThemeContext.Consumer>
    )
  }
}
export default withRouter(Sidebar)
