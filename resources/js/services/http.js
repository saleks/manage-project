import axios from 'axios'

import * as authService from './auth.service'
import {API_URL} from '../config'

export default class Http {
  constructor(status) {
    this.isAuth = status && status.auth ? status.auth : false;
    this.instance = axios.create({
      baseURL: API_URL
    });

    return this.init()
  }

  init() {
      console.log('Http isAuth', this.isAuth);
    if (this.isAuth) {
      this.instance.interceptors.request.use(request => {
        request.headers['Authorization'] = authService.getAccessToken();
        // if access token expired and refreshToken is exist >> go to API and get new access token
        if (authService.isAccessTokenExpired()) {
          return authService.refreshTokens()
            .then(response => {
              request.headers['Authorization'] = authService.getAccessToken();
              return request
            }).catch(error => Promise.reject(error))
        } else {
          return request
        }
      }, error => {
        return Promise.reject(error)
      });
      return this.instance
    }
    console.log('Http instance',this.instance);
    return this.instance
  }
}
