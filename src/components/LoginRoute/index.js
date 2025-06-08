import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import DarkThemeContext from '../../context/DarkThemeContext'

import {
  LoginPageBGContainer,
  LoginPageBGContainerDark,
  LoginForm,
  LoginFormDark,
  WebsiteLogo,
  TextInputLabelsLoginPage,
  TextInputLabelsLoginPageDark,
  InputElementsLoginPage,
  InputElementsLoginPageDark,
  CheckboxElementContainer,
  ShowPasswordCheckbox,
  ShowPasswordLabel,
  ShowPasswordLabelDark,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const userData = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(apiUrl, options)
    const jsonData = await response.json()
    if (response.ok) {
      const jwtToken = jsonData.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 3})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({
        errorMsg: `*${jsonData.error_msg}`,
      })
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken) {
      return <Redirect to="/" />
    }

    const {username, password, showPassword, errorMsg} = this.state
    const passType = showPassword ? 'text' : 'password'
    return (
      <DarkThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return darkTheme ? (
            <LoginPageBGContainerDark>
              <LoginFormDark onSubmit={this.onSubmitForm}>
                <WebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
                <TextInputLabelsLoginPageDark htmlFor="usernameInput">
                  USERNAME
                </TextInputLabelsLoginPageDark>
                <InputElementsLoginPageDark
                  id="usernameInput"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={this.onChangeUsername}
                />
                <TextInputLabelsLoginPageDark htmlFor="passwordInput">
                  PASSWORD
                </TextInputLabelsLoginPageDark>
                <InputElementsLoginPageDark
                  id="passwordInput"
                  type={passType}
                  placeholder="Password"
                  value={password}
                  onChange={this.onChangePassword}
                />
                <CheckboxElementContainer>
                  <ShowPasswordCheckbox
                    id="showPasswordCheckbox"
                    type="checkbox"
                    checked={showPassword}
                    onChange={this.toggleShowPassword}
                  />
                  <ShowPasswordLabelDark htmlFor="showPasswordCheckbox">
                    Show Password
                  </ShowPasswordLabelDark>
                </CheckboxElementContainer>
                <LoginButton type="submit">Login</LoginButton>
                <ErrorMsg>{errorMsg}</ErrorMsg>
              </LoginFormDark>
            </LoginPageBGContainerDark>
          ) : (
            <LoginPageBGContainer>
              <LoginForm onSubmit={this.onSubmitForm}>
                <WebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
                <TextInputLabelsLoginPage htmlFor="usernameInput">
                  USERNAME
                </TextInputLabelsLoginPage>
                <InputElementsLoginPage
                  id="usernameInput"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={this.onChangeUsername}
                />
                <TextInputLabelsLoginPage htmlFor="passwordInput">
                  PASSWORD
                </TextInputLabelsLoginPage>
                <InputElementsLoginPage
                  id="passwordInput"
                  type={passType}
                  placeholder="Password"
                  value={password}
                  onChange={this.onChangePassword}
                />
                <CheckboxElementContainer>
                  <ShowPasswordCheckbox
                    id="showPasswordCheckbox"
                    type="checkbox"
                    checked={showPassword}
                    onChange={this.toggleShowPassword}
                  />
                  <ShowPasswordLabel htmlFor="showPasswordCheckbox">
                    Show Password
                  </ShowPasswordLabel>
                </CheckboxElementContainer>
                <LoginButton type="submit">Login</LoginButton>
                <ErrorMsg className="error-msg">{errorMsg}</ErrorMsg>
              </LoginForm>
            </LoginPageBGContainer>
          )
        }}
      </DarkThemeContext.Consumer>
    )
  }
}

export default LoginRoute
