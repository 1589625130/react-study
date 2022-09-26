const tokenKey = 'jwt-token'

export function getToken() {
  return localStorage.getItem(tokenKey) || ''
}

export function setToken(token: string) {
  removeToken()
  localStorage.setItem(tokenKey, token)
}

export function removeToken() {
  localStorage.removeItem(tokenKey)
}

export function checkToken() {
  return !!getToken()
}
