import Sidebar from '../Sidebar'
import Header from '../Header'
import VideoItemTrending from '../VideoItemTrending'
import DarkThemeContext from '../../context/DarkThemeContext'

import {
  OutsideBGContainer,
  TrendingBGContainer,
  SuccessViewContainer,
  TrendingTitleContainer,
  TrendingTitle,
  TrendingIconTitle,
} from '../Trending/styledComponents'

import {
  NoSavedVideosContainer,
  NoSavedVideosHeading,
  NoSavedVideosImage,
  NoSavedVideosParagraph,
} from './styledComponents'

const SavedVideos = () => (
  <DarkThemeContext.Consumer>
    {value => {
      const {darkTheme, savedVideos} = value
      return (
        <>
          <Header />
          <OutsideBGContainer darkTheme={darkTheme}>
            <Sidebar />
            <TrendingBGContainer
              data-testid="savedVideos"
              darkTheme={darkTheme}
            >
              <TrendingTitleContainer
                data-testid="banner"
                darkTheme={darkTheme}
              >
                <TrendingIconTitle darkTheme={darkTheme} />
                <TrendingTitle darkTheme={darkTheme}>
                  Saved Videos
                </TrendingTitle>
              </TrendingTitleContainer>
              {savedVideos.length > 0 ? (
                <SuccessViewContainer>
                  {savedVideos.map(eachVideo => (
                    <VideoItemTrending
                      key={eachVideo.id}
                      videoDetails={eachVideo}
                    />
                  ))}
                </SuccessViewContainer>
              ) : (
                <NoSavedVideosContainer>
                  <NoSavedVideosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideosHeading darkTheme={darkTheme}>
                    No Saved Videos Found
                  </NoSavedVideosHeading>
                  <NoSavedVideosParagraph darkTheme={darkTheme}>
                    You can save your videos while watching them
                  </NoSavedVideosParagraph>
                </NoSavedVideosContainer>
              )}
            </TrendingBGContainer>
          </OutsideBGContainer>
        </>
      )
    }}
  </DarkThemeContext.Consumer>
)

export default SavedVideos
