import styled from 'styled-components'

export const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 576px) {
    padding: 5px;
    flex-direction: row;
  }
`

export const Thumbnail = styled.img`
  width: 100%;

  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 250px;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const ThumbnailText = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  text-decoration: 'none';
  width: 100%;
`

export const ChannelLogo = styled.img`
  width: 40px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoTitle = styled.p`
  margin: 0px;
  font-weight: 500;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
  font-family: Roboto;
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const VideoTextContainer = styled.div`
  margin-left: 5px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 567px) {
    flex-direction: column;
  }
`
export const VideoDetailsContainer2 = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideoDetailsText = styled.p`
  margin: 0px;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 4px;
  color: #475569;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
  @media screen and (min-width: 567px) {
    margin-bottom: 0px;
  }
`
