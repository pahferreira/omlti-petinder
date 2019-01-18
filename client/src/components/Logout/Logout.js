import { Component } from 'react'
import AuthHelper from "./../../util/AuthHelper"

export default class Logout extends Component {
  componentWillMount() {
    AuthHelper.removeToken()
    document.location.href = '/'
  }

  render() {
    return null
  }
}