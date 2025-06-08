import {
  NotFoundBGContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundParagraph,
} from './styledComponents'

const NotFound = () => (
  <NotFoundBGContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundParagraph>
      We are sorry, the page you requested could not be found.
    </NotFoundParagraph>
  </NotFoundBGContainer>
)

export default NotFound
