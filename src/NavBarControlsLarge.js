import React from 'react';
import PropTypes from 'prop-types'
import MenuItem from 'material-ui/MenuItem'
import { ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton'
import Menu from 'material-ui/Menu'
import HelpIcon from 'material-ui/svg-icons/action/help-outline';
import GenericPopover from './GenericPopover';

import { Link } from 'react-router-dom'

NavBarControlsLarge.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function NavBarControlsLarge (props, context) {
  const { appBar } = context.muiTheme
  return (
    <ToolbarGroup style={{ height: `${appBar.height}px` }}>
      <RaisedButton containerElement={<Link to='/editor'/>} label="New Document"/>
      <GenericPopover
        buttonElement={<IconButton iconClassName='material-icons'
                                   iconStyle={{ color: appBar.textColor }}>notifications</IconButton>}
        anchorOrigin={{ "horizontal": "right", "vertical": "bottom" }}
        targetOrigin={{ "horizontal": "right", "vertical": "top" }}
      >
        <Menu>
          <MenuItem primaryText="Refresh"/>
          <MenuItem primaryText="Help &amp; feedback"/>
          <MenuItem primaryText="Settings"/>
          <MenuItem primaryText="Sign out"/>
        </Menu>
      </GenericPopover>

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
