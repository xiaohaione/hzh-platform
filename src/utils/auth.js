import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const suNameKey = 'login-name'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getSuName() {
  return Cookies.get(suNameKey)
}

export function setSuName(SuName) {
  return Cookies.set(suNameKey, SuName)
}

export function removeSuName() {
  return Cookies.remove(suNameKey)
}
