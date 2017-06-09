import React from 'react';
import PropTypes from 'prop-types'
import MenuItem from 'material-ui/MenuItem'
import { ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import AccountCircleIcon from 'material-ui/svg-icons/action/account-circle';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import HelpIcon from 'material-ui/svg-icons/action/help-outline';

import { Link } from 'react-router-dom'

NavBarControlsLarge.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function NavBarControlsLarge (props, context) {
  const { appBar } = context.muiTheme
  return (
    <ToolbarGroup style={{ height: `${appBar.height}px` }}>
      <RaisedButton containerElement={<Link to='/editor' />} label="New Document"/>
      <IconButton><NotificationsIcon color={appBar.textColor}/></IconButton>
      <IconButton><HelpIcon color={appBar.textColor} title='Help'/></IconButton>
      <ToolbarSeparator />
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon color={appBar.textColor}/></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="Settings"/>
        <MenuItem primaryText="Sign out"/>
      </IconMenu>
    </ToolbarGroup>
  )
}
