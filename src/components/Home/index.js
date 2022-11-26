import {Component} from 'react'

import {IoMdClose} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'
import HomeBody from '../HomeBody'

import ThemeContext from '../../Context/ThemeContext'
import {
  MainBody,
  SidebarContainer,
  HomeContainer,
  GetPremium,
  BannerLogo,
  GetItButton,
  BannerText,
  CloseButton,
  SearchInput,
  SearchContainer,
  SearchButton,
  VideosList,
  LoaderContainer,
  FailureImg,
  FailureContainer,
  FailureText,
  RetryButton,
  NoVideosImg,
  NoVideosContainer,
  HomeMainContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    isPopup: true,
    searchInput: '',
    videosList: [],
  }

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickCloseBanner = () => {
    this.setState({isPopup: false})
  }

  adPopup = () => (
    <GetPremium data-testid="banner">
      <CloseButton
        type="button"
        data-testid="close"
        onClick={this.onClickCloseBanner}
      >
        <IoMdClose size={16} />
      </CloseButton>
      <BannerLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
      <GetItButton>GET IT NOW </GetItButton>
    </GetPremium>
  )

  updateSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  noVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'
        return (
          <NoVideosContainer>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureText theme={theme}>No search results found</FailureText>
            <FailureText theme={theme} as="p">
              Try different key words or remove search filter
            </FailureText>
            <RetryButton type="button" onClick={this.getVideos}>
              Retry
            </RetryButton>
          </NoVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  successView = () => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return this.noVideosView()
    }

    return (
      <VideosList>
        {videosList.map(each => (
          <HomeBody key={each.id} videoDetails={each} />
        ))}
      </VideosList>
    )
  }

  failureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'
        const imgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer>
            <FailureImg src={imgUrl} alt="failure view" />

            <FailureText theme={theme}>Oops! Something Went Wrong</FailureText>
            <FailureText theme={theme} as="p">
              We are having some trouble to complete your request. Please try
              again
            </FailureText>
            <RetryButton type="button" onClick={this.getVideos}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  loader = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <LoaderContainer className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDarkTheme ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  checkApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.successView()
      case apiStatusConstants.failure:
        return this.failureView()
      case apiStatusConstants.inProgress:
        return this.loader()

      default:
        return null
    }
  }

  render() {
    const {isPopup, searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          const color = isDarkTheme ? '#f9f9f9' : '#181818'
          return (
            <HomeMainContainer data-testid="home" theme={theme}>
              <Header />
              <MainBody>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <HomeContainer>
                  {isPopup && this.adPopup()}
                  <SearchContainer>
                    <SearchInput
                      theme={theme}
                      type="search"
                      placeholder="Search"
                      onChange={this.updateSearchInput}
                      value={searchInput}
                    />
                    <SearchButton
                      type="button"
                      theme={theme}
                      onClick={this.getVideos}
                      data-testid="searchButton"
                    >
                      <BsSearch color={color} />
                    </SearchButton>
                  </SearchContainer>
                  {this.checkApiStatus()}
                </HomeContainer>
              </MainBody>
            </HomeMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
