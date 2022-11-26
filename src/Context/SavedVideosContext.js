import React from 'react'

const SavedVideosContext = React.createContext({
  save: false,
  savedVideosList: [],
  addVideosToSavedVideos: () => {},
  deleteVideosFromSavedVideos: () => {},
  updateSave: () => {},
})

export default SavedVideosContext
