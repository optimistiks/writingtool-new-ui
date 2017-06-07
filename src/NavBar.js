import React from 'react';
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'

NavBar.propTypes = {
  toggleSidebar: PropTypes.func,
  ControlsComponent: PropTypes.func.isRequired
}

export default function NavBar (props) {
  const { toggleSidebar, ControlsComponent } = props
  return (
    <AppBar
      title='Writing Tool'
      zDepth={2}
      style={{ position: 'fixed', top: '0px' }}
      showMenuIconButton={toggleSidebar != null}
      onLeftIconButtonTouchTap={toggleSidebar}
      iconStyleRight={{ marginTop: '0px' }}
      iconElementRight={<ControlsComponent />}
    />
  )
}
