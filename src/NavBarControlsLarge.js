import React from 'react';
import PropTypes from 'prop-types'
import MenuItem from 'material-ui/MenuItem'
import { ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import HelpIcon from 'material-ui/svg-icons/action/help-outline';
import GenericPopover from './GenericPopover';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Badge from 'material-ui/Badge';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import { Link } from 'react-router-dom'
import NotificationsPopover from './NotificationsPopover'

NavBarControlsLarge.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function NavBarControlsLarge (props, context) {
  const { appBar, spacing } = context.muiTheme
  return (
    <ToolbarGroup style={{ height: `${appBar.height}px` }}>
      <RaisedButton containerElement={<Link to='/editor'/>} label="New Document"/>
      <NotificationsPopover />
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
