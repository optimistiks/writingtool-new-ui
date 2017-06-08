import React from 'react';
import PropTypes from 'prop-types'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import PrintIcon from 'material-ui/svg-icons/action/print'
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import { greenA200, green100 } from 'material-ui/styles/colors'

import TextField from 'material-ui/TextField';
import hipsum from 'lorem-hipsum';

import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

EditorDocumentBar.propTypes = {
  style: PropTypes.object
}

EditorDocumentBar.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function EditorDocumentBar (props, context) {
  const { spacing } = context.muiTheme
  return (
    <Toolbar>
      <ToolbarGroup className='col-xs-4'>
        <TextField
          hintText='Document title'
          defaultValue={hipsum({ count: 1, units: 'sentences' })}
          fullWidth
        />
      </ToolbarGroup>
      <ToolbarGroup className='col-xs-4' style={{ justifyContent: 'center' }}>
        <RaisedButton
          label='00:00'
          labelStyle={{ verticalAlign: 'middle' }}
          style={{ whiteSpace: 'nowrap' }}
          icon={<FontIcon className='material-icons'>play_arrow</FontIcon>}
        />
      </ToolbarGroup>
      <ToolbarGroup className='col-xs-4' style={{ justifyContent: 'flex-end', overflow: 'hidden' }}>
        <Chip style={{ marginRight: `${spacing.desktopGutterMini}px` }}>Characters: 12000</Chip>
        <Chip style={{ marginRight: `${spacing.desktopGutterMini}px` }}>Words: 6000</Chip>
        <Chip backgroundColor={green100}>Saved</Chip>
      </ToolbarGroup>
{/*      <ToolbarGroup>
      </ToolbarGroup>
      <ToolbarGroup>
      </ToolbarGroup>*/}
    </Toolbar>
  )
}
