import styled from 'styled-components'

export const NavMobileContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#f4f4f4'};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavLargeContainer = styled(NavMobileContainer)`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const HeaderLogoImg = styled.img`
  width: 150px;
  @media screen and (min-width: 768px) {
    width: 20 0px;
  }
`
export const NavMobileIcons = styled.div``

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 5px;
  margin-right: 5px;
`

export const CloseButton = styled.div`
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 10px;
`
export const LogoutPopupContent = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  border-radius: 8px;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const Button = styled.button`
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  width: 80px;
  height: 35px;
  margin: 5px;
  color: ${props => (props.outline ? '#3b82f6' : 'white')};
  border-radius: 5px;
  outline: none;
  border: 1px solid #3b82f6;
`
export const ProfileIcon = styled.img`
  width: 25px;
  margin-left: 15px;
  margin-right: 15px;
`
export const NavLargeIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const LargeLogoutButton = styled(Button)`
  margin: 0px;
  margin-left: 15px;
  margin-right: 15px;
  height: 25px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#3b82f6')};
  border-color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#3b82f6')};
`
export const MenuPopupMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 100vh;
  padding-top: 20px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`
export const MenuListMobile = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
