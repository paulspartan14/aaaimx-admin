import api from './config'
import tokenService from './authentication'
api.before((config) => {
  const access_token = window.localStorage.access_token
  if (access_token) {
    config.headers['Authorization'] = `Bearer ${access_token}`
  }
  return config
})

const fullfillMiddleware = (res) => {
  const token = localStorage.refresh_token
  if (token) {
    tokenService.refresh_token(token).then(res => {
      window.localStorage.access_token = res.access_token
    })
  }
  return res
}

const rejectMiddleware = (err) => {
  window.localStorage.clear()
  return Promise.reject(err)
}

api.after(fullfillMiddleware, rejectMiddleware)

const finallyMiddleware = (config, url) => {
  console.log('The End')
}

api.finally(finallyMiddleware)

const HttpService = {}

HttpService.install = function (Vue) {
  Vue.prototype.$http = api
}

export default HttpService