import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Sidebar from '../Sidebar'
import Header from '../Header'
import VideoItemTrending from '../VideoItemTrending'
import DarkThemeContext from '../../context/DarkThemeContext'

import {
  OutsideBGContainer,
  TrendingBGContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureMsg,
  FailureMsgDescription,
  RetryBtn,
  SuccessViewContainer,
  TrendingTitleContainer,
  TrendingTitle,
  TrendingIconTitle,
} from './styledComponents'

const apiStatus = {
  loading: 'LOADING',
  failed: 'FAILED',
  success: 'SUCCESS',
}

class Trending extends Component {
  state = {
    loadingStatus: apiStatus.loading,
    videos: [],
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const jsonData = await response.json()
      const updatedData = jsonData.videos.map(eachVideo => {
        const updatedChannelData = {
          channelName: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        }
        return {
          channel: updatedChannelData,
          publishedAt: eachVideo.published_at,
          id: eachVideo.id,
          thumbnailUrl: eachVideo.thumbnail_url,
          title: eachVideo.title,
          viewCount: eachVideo.view_count,
        }
      })
      this.setState({
        videos: updatedData,
        loadingStatus: apiStatus.success,
      })
    } else {
      this.setState({
        loadingStatus: apiStatus.failed,
      })
    }
  }

  renderLoader = darkTheme => (
    <LoaderContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color={`${darkTheme ? '#ffffff' : '#000000'}`}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

  renderFailureView = darkTheme => {
    const imageURL = darkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureViewContainer>
        <FailureImage src={imageURL} alt="failure view" />
        <FailureMsg darkTheme={darkTheme}>
          Oops! Something Went Wrong
        </FailureMsg>
        <FailureMsgDescription darkTheme={darkTheme}>
          We are having some trouble completing your request. Please try again.
        </FailureMsgDescription>
        <RetryBtn onClick={this.getVideosData} type="button">
          Retry
        </RetryBtn>
      </FailureViewContainer>
    )
  }

  renderSuccessView = darkTheme => {
    const {videos} = this.state
    return (
      <>
        <TrendingTitleContainer data-testid="banner" darkTheme={darkTheme}>
          <TrendingIconTitle darkTheme={darkTheme} />
          <TrendingTitle darkTheme={darkTheme}>Trending</TrendingTitle>
        </TrendingTitleContainer>
        <SuccessViewContainer>
          {videos.map(eachVideo => (
            <VideoItemTrending key={eachVideo.id} videoDetails={eachVideo} />
          ))}
        </SuccessViewContainer>
      </>
    )
  }

  renderAppropriateElement = darkTheme => {
    const {loadingStatus} = this.state
    switch (loadingStatus) {
      case apiStatus.loading:
        return this.renderLoader(darkTheme)
      case apiStatus.failed:
        return this.renderFailureView(darkTheme)
      case apiStatus.success:
        return this.renderSuccessView(darkTheme)
      default:
        return <p>Default Executed</p>
    }
  }

  render() {
    return (
      <DarkThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <>
              <Header />
              <OutsideBGContainer darkTheme={darkTheme}>
                <Sidebar />
                <TrendingBGContainer
                  data-testid="trending"
                  darkTheme={darkTheme}
                >
                  {this.renderAppropriateElement(darkTheme)}
                </TrendingBGContainer>
              </OutsideBGContainer>
            </>
          )
        }}
      </DarkThemeContext.Consumer>
    )
  }
}

export default Trending
