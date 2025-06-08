import DarkThemeContext from '../../context/DarkThemeContext'

import {
  VideoItemGamingBGContainer,
  ThumbnailImage,
  VideoTitleGaming,
  ViewsGaming,
} from './styledComponents'

const VideoItemGaming = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  return (
    <DarkThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <VideoItemGamingBGContainer to={`/videos/${id}`}>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <VideoTitleGaming darkTheme={darkTheme}>{title}</VideoTitleGaming>
            <ViewsGaming>{viewCount} Watching Worldwide</ViewsGaming>
          </VideoItemGamingBGContainer>
        )
      }}
    </DarkThemeContext.Consumer>
  )
}

export default VideoItemGaming
