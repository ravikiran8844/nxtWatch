import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../Context/ThemeContext'
import ActiveMenuContext from '../../Context/ActiveMenuContext'

import {
  VideoCardContainer,
  Thumbnail,
  ChannelLogo,
  ThumbnailText,
  VideoTitle,
  VideoTextContainer,
  VideoDetailsContainer,
  VideoDetailsContainer2,
  VideoDetailsText,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    channel,
    viewCount,
    title,
    id,
    publishedAt,
  } = videoDetails

  const {name, profileImageUrl} = channel
  let postedAt = formatDistanceToNow(new Date(publishedAt))
  const postedAtList = postedAt.split(' ')

  if (postedAtList.length === 3) {
    postedAtList.shift()
    postedAt = postedAtList.join(' ')
  }

  const card = value => {
    const {isDarkTheme} = value
    const theme = isDarkTheme ? 'dark' : 'light'
    return (
      <ActiveMenuContext.Consumer>
        {val => {
          const {changeActiveMenu} = val
          return (
            <Link
              to={`/videos/${id}`}
              className="link"
              onClick={() => changeActiveMenu('INITIAL')}
            >
              <VideoCardContainer>
                <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
                <ThumbnailText>
                  <div>
                    <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  </div>
                  <VideoTextContainer>
                    <VideoTitle theme={theme}>{title}</VideoTitle>
                    <VideoDetailsContainer>
                      <VideoDetailsText>{name}</VideoDetailsText>
                      <VideoDetailsContainer2>
                        <VideoDetailsText>{viewCount} views</VideoDetailsText>
                        <VideoDetailsText>{postedAt} ago</VideoDetailsText>
                      </VideoDetailsContainer2>
                    </VideoDetailsContainer>
                  </VideoTextContainer>
                </ThumbnailText>
              </VideoCardContainer>
            </Link>
          )
        }}
      </ActiveMenuContext.Consumer>
    )
  }

  return <ThemeContext.Consumer>{value => card(value)}</ThemeContext.Consumer>
}

export default TrendingVideoCard
