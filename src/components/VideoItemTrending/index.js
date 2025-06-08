import {formatDistanceToNow} from 'date-fns'
import DarkThemeContext from '../../context/DarkThemeContext'

import {
  VideoItemTrendingBGContainer,
  ThumbnailImage,
  VideoDetailsContainerLGDevices,
  VideoTitle,
  ChannelName,
  VideoDetailsContainerMobile,
  ChannelLogo,
} from './styledComponents'

const VideoItemTrending = props => {
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
          <VideoItemTrendingBGContainer to={`/videos/${id}`}>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetailsContainerLGDevices>
              <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
              <ChannelName>{channelName}</ChannelName>
              <ChannelName>
                {viewCount} • {formattedDate}
              </ChannelName>
            </VideoDetailsContainerLGDevices>
            <VideoDetailsContainerMobile>
              <ChannelLogo src={profileImageUrl} alt="channel logo" />
              <div>
                <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
                <ChannelName>
                  {channelName} . {viewCount} . {publishedAt}
                </ChannelName>
              </div>
            </VideoDetailsContainerMobile>
          </VideoItemTrendingBGContainer>
        )
      }}
    </DarkThemeContext.Consumer>
  )
}

export default VideoItemTrending
