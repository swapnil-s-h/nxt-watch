import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import ProtectedRoute from './components/ProtectedRoute'
import DarkThemeContext from './context/DarkThemeContext'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    darkTheme: false,
    savedVideos: [],
  }

  onChangeTheme = () => {
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme,
    }))
  }

  onAddVideo = videoObj => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, videoObj],
    }))
  }

  onRemoveVideo = videoId => {
    const {savedVideos} = this.state
    const filteredList = savedVideos.filter(
      eachVideo => eachVideo.id !== videoId,
    )
    this.setState({
      savedVideos: filteredList,
    })
  }

  render() {
    const {darkTheme, savedVideos} = this.state
    return (
      <DarkThemeContext.Provider
        value={{
          darkTheme,
          onChangeTheme: this.onChangeTheme,
          savedVideos,
          onAddVideo: this.onAddVideo,
          onRemoveVideo: this.onRemoveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </DarkThemeContext.Provider>
    )
  }
}

export default App
