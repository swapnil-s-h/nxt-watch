import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Sidebar from '../Sidebar'
import Header from '../Header'
import VideoItemGaming from '../VideoItemGaming'
import DarkThemeContext from '../../context/DarkThemeContext'

import {
  OutsideBGContainer,
  GamingBGContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureMsg,
  FailureMsgDescription,
  RetryBtn,
  SuccessViewContainer,
  GamingTitleContainer,
  GamingTitle,
  GamingIconTitle,
} from './styledComponents'

const apiStatus = {
  loading: 'LOADING',
  failed: 'FAILED',
  success: 'SUCCESS',
}

class Gaming extends Component {
  state = {
    loadingStatus: apiStatus.loading,
    videos: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const jsonData = await response.json()
      const updatedData = jsonData.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
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
        <RetryBtn onClick={this.getData} type="button">
          Retry
        </RetryBtn>
      </FailureViewContainer>
    )
  }

  renderSuccessView = darkTheme => {
    const {videos} = this.state
    return (
      <>
        <GamingTitleContainer data-testid="banner" darkTheme={darkTheme}>
          <GamingIconTitle darkTheme={darkTheme} />
          <GamingTitle darkTheme={darkTheme}>Gaming</GamingTitle>
        </GamingTitleContainer>
        <SuccessViewContainer>
          {videos.map(eachVideo => (
            <VideoItemGaming key={eachVideo.id} videoDetails={eachVideo} />
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
                <GamingBGContainer data-testid="gaming" darkTheme={darkTheme}>
                  {this.renderAppropriateElement(darkTheme)}
                </GamingBGContainer>
              </OutsideBGContainer>
            </>
          )
        }}
      </DarkThemeContext.Consumer>
    )
  }
}

export default Gaming
