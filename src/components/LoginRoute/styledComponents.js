import styled from 'styled-components'

export const LoginPageBGContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8fafc;
  min-height: 100vh;
`

export const LoginPageBGContainerDark = styled(LoginPageBGContainer)`
  background-color: #1e293b;
`

export const LoginForm = styled.form`
  width: 80%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: #f9f9f9;
  box-shadow: 4px 4px 20px 10px #e2e8f0;
  padding: 24px;
  border-radius: 10px;

  @media screen and (max-width: 767px) {
    padding: 18px;
  }
`

export const LoginFormDark = styled(LoginForm)`
  background-color: #0f0f0f;
  box-shadow: 4px 4px 20px 10px #181818;
`

export const WebsiteLogo = styled.img`
  width: 50%;
  align-self: center;
`

export const TextInputLabelsLoginPage = styled.label`
  font-family: Roboto;
  font-size: 14px;
  color: #475569;
  font-weight: 600;
  margin-bottom: 5px;
`

export const TextInputLabelsLoginPageDark = styled(TextInputLabelsLoginPage)`
  color: #f9f9f9;
`

export const InputElementsLoginPage = styled.input`
  color: #0f0f0f;
  font-family: Roboto;
  font-size: 18px;
  padding: 10px 20px;
  border: 1px solid #94a3b8;
  border-radius: 6px;
  margin-bottom: 20px;
`

export const InputElementsLoginPageDark = styled(InputElementsLoginPage)`
  background-color: #0f0f0f;
  color: #f9f9f9;
  border-color: #4f46e5;
`

export const CheckboxElementContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
`

export const ShowPasswordCheckbox = styled.input`
  height: 18px;
  width: 18px;
  margin-right: 10px;
`

export const ShowPasswordLabel = styled.label`
  color: #1e293b;
  font-weight: 600;
  font-size: 16px;
  font-family: Roboto;
`

export const ShowPasswordLabelDark = styled(ShowPasswordLabel)`
  color: #f9f9f9;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  border-width: 0px;
  border-radius: 10px;
  padding: 10px 0px;
  color: #f9f9f9;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  font-family: Roboto;
  font-size: 18px;
`
