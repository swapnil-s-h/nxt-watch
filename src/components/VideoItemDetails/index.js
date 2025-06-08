import {Component} from 'react'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import Sidebar from '../Sidebar'
import DarkThemeContext from '../../context/DarkThemeContext'

import {
  OutsideBGContainer,
  VideoItemDetailsBGContainer,
  SuccessViewBGContainer,
  VideoTitle,
  VideoDetailsContainer,
  ViewsCountAndPublishedAt,
  LikeDislikeAndSave,
  LikeBtn,
  LikeIcon,
  DislikeIcon,
  SaveIcon,
  LikeText,
  DislikeText,
  SaveText,
  HorizontalLine,
  BelowContainer,
  ChannelLogo,
  ChannelNameContainer,
  ChannelLogoMobile,
  ChannelName,
  Subscribers,
  PlayerContainer,
  DescriptionLargeDevices,
  DescriptionMobiles,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureMsg,
  FailureMsgDescription,
  RetryBtn,
} from './styledComponents'

const apiStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED',
}

class VideoItemDetails extends Component {
  state = {
    loadingStatus: apiStatus.loading,
    videoData: {},
    liked: false,
    disliked: false,
    saved: false,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
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
      const channel = {
        name: jsonData.video_details.channel.name,
        profileImageUrl: jsonData.video_details.channel.profile_image_url,
        subscriberCount: jsonData.video_details.channel.subscriber_count,
      }
      const videoData = {
        channel,
        description: jsonData.video_details.description,
        id: jsonData.video_details.id,
        publishedAt: jsonData.video_details.published_at,
        thumbnailUrl: jsonData.video_details.thumbnail_url,
        title: jsonData.video_details.title,
        videoUrl: jsonData.video_details.video_url,
        viewCount: jsonData.video_details.view_count,
      }
      this.setState(
        {
          videoData,
          loadingStatus: apiStatus.success,
        },
        this.saveStatus,
      )
    } else {
      this.setState({
        loadingStatus: apiStatus.failed,
      })
    }
  }

  saveStatus = () => {
    const {savedVideos} = this.context
    const {videoData} = this.state
    const {id} = videoData
    let saved = false
    savedVideos.map(eachVideo => {
      if (eachVideo.id === id) {
        saved = true
      }
      return null
    })
    this.setState({
      saved,
    })
  }

  saveVideo = () => {
    const {videoData, saved} = this.state
    const {onAddVideo, onRemoveVideo} = this.context
    if (saved) {
      onRemoveVideo(videoData.id)
    } else {
      onAddVideo(videoData)
    }
    this.setState(prevState => ({
      saved: !prevState.saved,
    }))
  }

  like = () => {
    this.setState(prevState => {
      if (prevState.disliked) {
        return {liked: true, disliked: false}
      }
      return {liked: !prevState.liked}
    })
  }

  dislike = () => {
    this.setState(prevState => {
      if (prevState.liked) {
        return {liked: false, disliked: true}
      }
      return {disliked: !prevState.disliked}
    })
  }

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

  renderSuccessView = darkTheme => {
    const {videoData, saved, liked, disliked} = this.state
    const {
      channel,
      description,
      publishedAt,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
    } = videoData
    const {profileImageUrl, name, subscriberCount} = channel
    let formattedDate = formatDistanceToNow(new Date(publishedAt), {
      addSuffix: true,
    }).split(' ')
    formattedDate = formattedDate.slice(1, formattedDate.length)
    formattedDate = formattedDate.join(' ')
    return (
      <SuccessViewBGContainer>
        <PlayerContainer>
          <ReactPlayer
            height="100%"
            width="100%"
            url={videoUrl}
            light={thumbnailUrl}
          />
        </PlayerContainer>
        <div>
          <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
          <VideoDetailsContainer>
            <ViewsCountAndPublishedAt darkTheme={darkTheme}>
              {viewCount} • {formattedDate}
            </ViewsCountAndPublishedAt>
            <LikeDislikeAndSave>
              <LikeBtn type="button" onClick={this.like}>
                <LikeIcon liked={liked} />
                <LikeText liked={liked}>Like</LikeText>
              </LikeBtn>
              <LikeBtn type="button" onClick={this.dislike}>
                <DislikeIcon disliked={disliked} />
                <DislikeText disliked={disliked}>Dislike</DislikeText>
              </LikeBtn>
              <LikeBtn onClick={this.saveVideo} type="button">
                <SaveIcon saved={saved} />
                <SaveText saved={saved}>{saved ? 'Saved' : 'Save'}</SaveText>
              </LikeBtn>
            </LikeDislikeAndSave>
          </VideoDetailsContainer>
          <HorizontalLine darkTheme={darkTheme} />
          <BelowContainer>
            <ChannelLogo src={profileImageUrl} alt="channel logo" />
            <ChannelNameContainer>
              <ChannelLogoMobile src={profileImageUrl} alt="channel logo" />
              <div>
                <ChannelName darkTheme={darkTheme}>{name}</ChannelName>
                <Subscribers darkTheme={darkTheme}>
                  {subscriberCount} subscribers
                </Subscribers>
              </div>
              <DescriptionLargeDevices darkTheme={darkTheme}>
                {description}
              </DescriptionLargeDevices>
            </ChannelNameContainer>
            <DescriptionMobiles darkTheme={darkTheme}>
              {description}
            </DescriptionMobiles>
          </BelowContainer>
        </div>
      </SuccessViewBGContainer>
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
                <VideoItemDetailsBGContainer
                  data-testid="videoItemDetails"
                  darkTheme={darkTheme}
                >
                  {this.renderAppropriateElement(darkTheme)}
                </VideoItemDetailsBGContainer>
              </OutsideBGContainer>
            </>
          )
        }}
      </DarkThemeContext.Consumer>
    )
  }
}

VideoItemDetails.contextType = DarkThemeContext

export default VideoItemDetails
