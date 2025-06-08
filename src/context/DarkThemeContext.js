import React from 'react'

const DarkThemeContext = React.createContext({
  darkTheme: false,
  onChangeTheme: () => {},
  savedVideos: [],
  onAddVideo: () => {},
  onRemoveVideo: () => {},
})

export default DarkThemeContext
