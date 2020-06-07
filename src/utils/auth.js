/*
 * @Author: siwenfeng
 * @Date: 2019-11-07 11:20:42
 * @LastEditTime: 2019-11-07 11:20:58
 * @Description: this is ....
 */
import Cookies from 'js-cookie'
const TokenKey = 'x-access-token'
var inFifteenMinutes = new Date(new Date().getTime() + 120 * 60 * 1000);
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, {
    expires: inFifteenMinutes
  })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}