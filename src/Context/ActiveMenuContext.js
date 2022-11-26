import React from 'react'

const ActiveMenuContext = React.createContext({
  activeMenu: 'INITIAL',
  changeActiveMenu: () => {},
})

export default ActiveMenuContext
