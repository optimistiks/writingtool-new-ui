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
import { greenA200 } from 'material-ui/styles/colors'

import TextField from 'material-ui/TextField';
import hipsum from 'lorem-hipsum';

import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

EditorDocumentBar.propTypes = {
  style: PropTypes.object
}

export default function EditorDocumentBar (props) {
  return (
    <Toolbar>
      <ToolbarGroup>
        <TextField
          hintText='Document title'
          defaultValue={hipsum({ count: 1, units: 'sentences' })}
          fullWidth
        />
      </ToolbarGroup>
      <ToolbarGroup>
        <RaisedButton
          label='00:00'
          labelStyle={{ verticalAlign: 'middle' }}
          icon={<FontIcon className='material-icons'>play_arrow</FontIcon>}
        />
      </ToolbarGroup>
      <ToolbarGroup>
        <div className='row middle-xs'>
          <div className='col-xs'>
            <div style={{ whiteSpace: 'nowrap' }}>Characters: 12000</div>
          </div>
          <div className='col-xs'>
            <div style={{ whiteSpace: 'nowrap' }}>Words: 6000</div>
          </div>
          <div className='col-xs'>
            <Chip backgroundColor={greenA200}>Saved</Chip>
          </div>
        </div>
      </ToolbarGroup>
    </Toolbar>
  )
}
