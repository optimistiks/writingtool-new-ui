import React from 'react';
import PropTypes from 'prop-types'
import MenuItem from 'material-ui/MenuItem'
import { ToolbarGroup } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NotificationsPopover from './NotificationsPopover'
import MaterialIcon from './MaterialIcon'

NavBarControlsSmall.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function NavBarControlsSmall (props, context) {
  const { appBar } = context.muiTheme
  return (
    <ToolbarGroup style={{ height: `${appBar.height}px` }}>
      <NotificationsPopover />
      <IconMenu
        iconButtonElement={
          <IconButton><MaterialIcon glyph='more_vert' color={appBar.textColor}/></IconButton>
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
