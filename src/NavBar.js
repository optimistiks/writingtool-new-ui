import React from 'react';
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'

NavBar.propTypes = {
  toggleSidebar: PropTypes.func,
  controlsElement: PropTypes.element.isRequired
}

export default function NavBar (props) {
  const { toggleSidebar, controlsElement } = props
  return (
    <AppBar
      title='Writing Tool'
      zDepth={2}
      style={{ position: 'fixed', top: '0px' }}
      showMenuIconButton={toggleSidebar != null}
      onLeftIconButtonTouchTap={toggleSidebar}
      iconStyleRight={{ marginTop: '0px' }}
      iconElementRight={controlsElement}
    />
  )
}
