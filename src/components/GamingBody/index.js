import {Link} from 'react-router-dom'

import ThemeContext from '../../Context/ThemeContext'
import ActiveMenuContext from '../../Context/ActiveMenuContext'

import {
  VideoCardContainer,
  Thumbnail,
  ThumbnailText,
  VideoTitle,
  VideoTextContainer,
  VideoDetailsContainer,
  VideoDetailsText,
} from './styledComponents'

const GamingBody = props => {
  const {videoDetails} = props
  const {thumbnailUrl, viewCount, title, id} = videoDetails

  const card = value => {
    const {isDarkTheme} = value
    const theme = isDarkTheme ? 'dark' : 'light'
    return (
      <ActiveMenuContext.Consumer>
        {val => {
          const {changeActiveMenu} = val

          return (
            <VideoCardContainer>
              <Link
                to={`/videos/${id}`}
                className="link"
                onClick={() => changeActiveMenu('INITIAL')}
              >
                <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
                <ThumbnailText>
                  <VideoTextContainer>
                    <VideoTitle theme={theme}>{title}</VideoTitle>
                    <VideoDetailsContainer>
                      <VideoDetailsText>
                        {viewCount} Watching Worldwide
                      </VideoDetailsText>
                    </VideoDetailsContainer>
                  </VideoTextContainer>
                </ThumbnailText>
              </Link>
            </VideoCardContainer>
          )
        }}
      </ActiveMenuContext.Consumer>
    )
  }

  return <ThemeContext.Consumer>{value => card(value)}</ThemeContext.Consumer>
}

export default GamingBody
