import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import Root from './routes'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  nav: state.nav
})

class MainLayout extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <Root navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })} />
      </View>
    )
  }
}

MainLayout.propTypes = {
  dispatch: PropTypes.func,
  nav: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ])
}

export default connect(mapStateToProps)(MainLayout)
