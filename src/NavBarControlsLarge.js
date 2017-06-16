import React from 'react';
import PropTypes from 'prop-types'
import MenuItem from 'material-ui/MenuItem'
import { ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'
import NotificationsPopover from './NotificationsPopover'
import MaterialIcon from './MaterialIcon'

NavBarControlsLarge.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function NavBarControlsLarge (props, context) {
  const { appBar } = context.muiTheme
  return (
    <ToolbarGroup style={{ height: `${appBar.height}px` }}>
      <RaisedButton data-walkthrough='walkthroughtest' containerElement={<Link to='/editor'/>} label="New Document"/>
      <NotificationsPopover />
      <IconButton><MaterialIcon glyph='help_outline' color={appBar.textColor} /></IconButton>
      <ToolbarSeparator />
      <IconMenu
        iconButtonElement={
          <IconButton><MaterialIcon glyph='more_vert' color={appBar.textColor} /></IconButton>
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
