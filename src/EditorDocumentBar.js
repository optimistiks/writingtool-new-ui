import React from 'react';
import PropTypes from 'prop-types'
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
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
        <FlatButton
          label='00:00'
          labelStyle={{ verticalAlign: 'middle' }}
          style={{ whiteSpace: 'nowrap' }}
          icon={<FontIcon className='material-icons'>play_arrow</FontIcon>}
        />
      </ToolbarGroup>
      <ToolbarGroup>
        <span style={{ marginRight: spacing.desktopGutter }}>Characters: 12000</span>
        <span style={{ marginRight: spacing.desktopGutter }}>Words: 6000</span>
        <span>Saved</span>
      </ToolbarGroup>
    </Toolbar>
  )
}
