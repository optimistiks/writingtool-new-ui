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
    <Toolbar style={{ justifyContent: 'center', ...props.style }}>
      <ToolbarGroup firstChild={true}>
        <IconButton iconClassName='material-icons' tooltip='Bold'>format_bold</IconButton>
        <IconButton iconClassName='material-icons' tooltip='Italic'>format_italic</IconButton>
        <IconButton iconClassName='material-icons' tooltip='Underlined'>format_underlined</IconButton>
        <IconButton iconClassName='material-icons' tooltip='Strikethrough'>strikethrough_s</IconButton>

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

        <IconButton iconClassName='material-icons' tooltip='Code block'>code</IconButton>
        <IconButton iconClassName='material-icons' tooltip='Quote block'>format_quote</IconButton>
        <IconButton iconClassName='material-icons' tooltip='Insert link'>link</IconButton>
        <IconButton iconClassName='material-icons' tooltip='Insert image'>image</IconButton>
        <IconButton iconClassName='material-icons' tooltip='Bulleted list'>format_list_bulleted</IconButton>
        <IconButton iconClassName='material-icons' tooltip='Numbered list'>format_list_numbered</IconButton>

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

        <IconButton iconClassName='material-icons' tooltip='Undo'>undo</IconButton>
        <IconButton iconClassName='material-icons' tooltip='Redo'>redo</IconButton>

        <EditorToolbarSeparator />

        <IconButton iconClassName='material-icons' tooltip='Word details'>lightbulb_outline</IconButton>
        <IconButton iconClassName='material-icons' tooltip='Text analysis'>assessment</IconButton>

        <EditorToolbarSeparator />

        <IconButton iconClassName='material-icons' tooltip='Print'>print</IconButton>

      </ToolbarGroup>
    </Toolbar>
  )
}
