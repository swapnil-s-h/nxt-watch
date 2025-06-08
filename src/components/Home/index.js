import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Sidebar from '../Sidebar'
import Header from '../Header'
import VideoItem from '../VideoItem'
import DarkThemeContext from '../../context/DarkThemeContext'

import {
  HomeBGContainer,
  OutsideBGContainer,
  BannerBGContainer,
  BannerLeftSection,
  WebsiteLogoBanner,
  BannerText,
  BannerButton,
  CloseButton,
  CloseIcon,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureMsg,
  FailureMsgDescription,
  RetryBtn,
  SuccessViewContainer,
  SearchBarContainer,
  SearchInputElement,
  SearchButton,
  SearchIcon,
  DownsideContentContainer,
} from './styledComponents'

const apiStatus = {
  loading: 'LOADING',
  failed: 'FAILED',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {
    searchInput: '',
    searchInputTyped: '',
    showBanner: true,
    loadingStatus: apiStatus.loading,
    videos: [],
  }

  componentDidMount() {
    this.getVideosData()
  }

  hideBanner = () => {
    this.setState({
      showBanner: false,
    })
  }

  getVideosData = async () => {
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  changeSearchInputTyped = event => {
    this.setState({
      searchInputTyped: event.target.value,
    })
  }

  onSubmitSearchInput = () => {
    this.setState(
      prevState => ({
        searchInput: prevState.searchInputTyped,
      }),
      this.getVideosData,
    )
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
    return videos.length > 0 ? (
      <SuccessViewContainer>
        {videos.map(eachVideo => (
          <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </SuccessViewContainer>
    ) : (
      <FailureViewContainer>
        <FailureImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <FailureMsg darkTheme={darkTheme}>No Search results found</FailureMsg>
        <FailureMsgDescription darkTheme={darkTheme}>
          Try different key words or remove search filter
        </FailureMsgDescription>
        <RetryBtn onClick={this.getVideosData} type="button">
          Retry
        </RetryBtn>
      </FailureViewContainer>
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
    const {showBanner, searchInputTyped} = this.state
    return (
      <DarkThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <>
              <Header />
              <OutsideBGContainer darkTheme={darkTheme}>
                <Sidebar />
                <HomeBGContainer data-testid="home" darkTheme={darkTheme}>
                  {showBanner && (
                    <BannerBGContainer data-testid="banner">
                      <BannerLeftSection>
                        <WebsiteLogoBanner
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerText>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerText>
                        <BannerButton type="button">GET IT NOW</BannerButton>
                      </BannerLeftSection>
                      <CloseButton
                        data-testid="close"
                        onClick={this.hideBanner}
                        type="button"
                      >
                        <CloseIcon />
                      </CloseButton>
                    </BannerBGContainer>
                  )}
                  <DownsideContentContainer>
                    <SearchBarContainer>
                      <SearchInputElement
                        darkTheme={darkTheme}
                        type="search"
                        placeholder="Search"
                        value={searchInputTyped}
                        onChange={this.changeSearchInputTyped}
                      />
                      <SearchButton
                        type="button"
                        onClick={this.onSubmitSearchInput}
                        darkTheme={darkTheme}
                        data-testid="searchButton"
                      >
                        <SearchIcon />
                      </SearchButton>
                    </SearchBarContainer>
                    {this.renderAppropriateElement(darkTheme)}
                  </DownsideContentContainer>
                </HomeBGContainer>
              </OutsideBGContainer>
            </>
          )
        }}
      </DarkThemeContext.Consumer>
    )
  }
}

export default Home
