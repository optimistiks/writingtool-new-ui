import React from 'react';
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import GenericPopover from './GenericPopover'

const EditorToolbarSeparator = () => <ToolbarSeparator style={{ margin: 0 }} />

EditorToolbar.propTypes = {
  style: PropTypes.object
}

export default function EditorToolbar (props) {
  return (
    <Toolbar style={{ overflowX: 'auto', overflowY: 'hidden', ...props.style }}>
      <ToolbarGroup firstChild={true} style={{ margin: '0 auto' }}>
        <IconButton iconClassName='material-icons' >format_bold</IconButton>
        <IconButton iconClassName='material-icons' >format_italic</IconButton>
        <IconButton iconClassName='material-icons' >format_underlined</IconButton>
        <IconButton iconClassName='material-icons' >strikethrough_s</IconButton>

        <GenericPopover
          buttonElement={<FlatButton label='Headings' />}
        >
          <Menu>
            <MenuItem primaryText='Heading 1'/>
            <MenuItem primaryText='Heading 2'/>
            <MenuItem primaryText='Subheader'/>
          </Menu>
        </GenericPopover>

        <EditorToolbarSeparator />

        <IconButton iconClassName='material-icons' >code</IconButton>
        <IconButton iconClassName='material-icons' >format_quote</IconButton>
        <IconButton iconClassName='material-icons' >link</IconButton>
        <IconButton iconClassName='material-icons' >image</IconButton>
        <IconButton iconClassName='material-icons' >format_list_bulleted</IconButton>
        <IconButton iconClassName='material-icons' >format_list_numbered</IconButton>

        <GenericPopover
          buttonElement={<FlatButton label='Fonts' />}
        >
          <Menu>
            <MenuItem primaryText='Lato'/>
            <MenuItem primaryText='Arial'/>
            <MenuItem primaryText='Times New Roman'/>
            <MenuItem primaryText='Courier New'/>
            <Divider />
            <MenuItem primaryText='More Fonts'/>
          </Menu>
        </GenericPopover>

        <EditorToolbarSeparator />

        <IconButton iconClassName='material-icons' >undo</IconButton>
        <IconButton iconClassName='material-icons' >redo</IconButton>

        <EditorToolbarSeparator />

        <IconButton iconClassName='material-icons' >lightbulb_outline</IconButton>
        <IconButton iconClassName='material-icons' >assessment</IconButton>

        <EditorToolbarSeparator />

        <IconButton iconClassName='material-icons' >print</IconButton>

      </ToolbarGroup>
    </Toolbar>
  )
}
