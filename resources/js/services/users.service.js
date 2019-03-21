import BaseService from './base.service'

class UsersService extends BaseService {
  get entity () {
    return 'users'
  }

  getCurrent () {
    return new Promise((resolve, reject) => {
      return this.request({ auth: true }).post(`/auth/user`)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => {
          let message = error.response.data ? error.response.data.error : error.response.statusText
          reject(this.errorWrapper(error, message))
        })
    })
  }

  setCurrent (user) {
    return new Promise((resolve, reject) => {
      return this.request({ auth: true }).put(`/users/${user.id}`,user)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => {
          let message = error.response.data ? error.response.data.error : error.response.statusText
          reject(this.errorWrapper(error, message))
        })
    })
  }

  getRoles () {
    return new Promise((resolve, reject) => {
      return this.request({ auth: true }).get(`/users/roles`)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => {
          let message = error.response.data ? error.response.data.error : error.response.statusText
          reject(this.errorWrapper(error, message))
        })
    })
  }
}

export default new UsersService()
