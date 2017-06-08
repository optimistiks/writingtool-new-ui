import React from 'react';
import PropTypes from 'prop-types'
import MenuItem from 'material-ui/MenuItem'
import { ToolbarGroup } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

NavBarControlsSmall.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function NavBarControlsSmall (props, context) {
  const { appBar } = context.muiTheme
  return (
    <ToolbarGroup style={{ height: `${appBar.height}px` }}>
      <IconButton><NotificationsIcon color={appBar.textColor}/></IconButton>
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon color={appBar.textColor}/></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="New document"/>
        <MenuItem primaryText="Help"/>
        <MenuItem primaryText="Settings"/>
        <MenuItem primaryText="Sign out"/>
      </IconMenu>
    </ToolbarGroup>
  )
}
