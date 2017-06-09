import React from 'react';
import PropTypes from 'prop-types'
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import { green100 } from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField';
import hipsum from 'lorem-hipsum';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

EditorDocumentBar.propTypes = {
  style: PropTypes.object
}

EditorDocumentBar.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function EditorDocumentBar (props, context) {
  const { spacing } = context.muiTheme
  return (
    <Toolbar style={{ overflowX: 'auto', overflowY: 'hidden', ...props.style }}>
      <ToolbarGroup>
        <TextField
          hintText='Document title'
          defaultValue={hipsum({ count: 1, units: 'sentences' })}
        />
      </ToolbarGroup>
      <ToolbarGroup>
        <RaisedButton
          label='00:00'
          labelStyle={{ verticalAlign: 'middle' }}
          style={{ whiteSpace: 'nowrap' }}
          icon={<FontIcon className='material-icons'>play_arrow</FontIcon>}
        />
      </ToolbarGroup>
      <ToolbarGroup>
        <Chip style={{ marginRight: `${spacing.desktopGutterMini}px` }}>Characters: 12000</Chip>
        <Chip style={{ marginRight: `${spacing.desktopGutterMini}px` }}>Words: 6000</Chip>
        <Chip backgroundColor={green100}>Saved</Chip>
      </ToolbarGroup>
    </Toolbar>
  )
}
