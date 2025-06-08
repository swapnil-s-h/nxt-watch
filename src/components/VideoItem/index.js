import {formatDistanceToNow} from 'date-fns'
import DarkThemeContext from '../../context/DarkThemeContext'
import {
  VideoItemContainer,
  ThumbnailImage,
  VideoDetailsContainer,
  ChannelLogo,
  VideoTitle,
  ChannelName,
  ViewsAndPostedDate,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} =
    videoDetails
  const {channelName, profileImageUrl} = channel
  let formattedDate = formatDistanceToNow(new Date(publishedAt), {
    addSuffix: true,
  }).split(' ')
  formattedDate = formattedDate.slice(1, formattedDate.length)
  formattedDate = formattedDate.join(' ')
  return (
    <DarkThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <VideoItemContainer to={`/videos/${id}`}>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetailsContainer>
              <ChannelLogo src={profileImageUrl} alt="channel logo" />
              <div>
                <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
                <ChannelName darkTheme={darkTheme}>{channelName}</ChannelName>
                <ViewsAndPostedDate darkTheme={darkTheme}>
                  {viewCount} • {formattedDate}
                </ViewsAndPostedDate>
              </div>
            </VideoDetailsContainer>
          </VideoItemContainer>
        )
      }}
    </DarkThemeContext.Consumer>
  )
}

export default VideoItem
