import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { hideNotification, NotificationProvider } from 'redux-store-ancillary/notification'
import Notification from '../components/Notification'

const mapStateToProps = (state) => ({
  notification: state.notification
})

const mapDispatchToProps = {
  hideNotification
}

class AppNotification extends React.Component {
  notifications = []
  showTimer = null

  onShowNotification = ([notification]) => {
    this.notifications.push(notification)
    this.showNotifications()
    // setTimeout(() => {
    // Alert.alert(notification.level, notification.params)
    // }, 100)
  }

  showNotifications = () => {
    if (this.showTimer) return
    if (this.notifications.length) {
      const notifItem = this.notifications.shift()
      this.setState({ message: `${notifItem.level.charAt(0).toUpperCase()}${notifItem.level.slice(1)}: ${notifItem.params}` })

      this.showTimer = setTimeout(() => {
        this.showTimer = null
        this.showNotifications()
      }, 5500)
    } else {
      this.setState({ message: '' })
    }
  }

  state = {
    message: ''
  }

  render () {
    return (
      <View>
        <NotificationProvider
          notification={this.props.notification}
          onShow={this.onShowNotification}
          autoClose={this.props.hideNotification} />
        <Notification fadeTime={100} timeout={5000} message={this.state.message} />
      </View>
    )
  }
}

class NotificationItem extends React.Component { // notification instance
  render () {
    const { id, level, params, open, onClose } = this.props

    return (
      <Notification timeout={2000} message={params} />
    )

    // return (
    //   <div>
    //     {this.state.animation && '---animation---' }
    //     Notification: {id} <br />
    //     level {level} <br />
    //     open {open.toString()} <br />
    //     <button onClick={() => onClose(id)} >Close</button>
    //   </div>
    // )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNotification)
