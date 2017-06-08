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

import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

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

        <PopoverExampleSimple
          buttonElement={<FlatButton label='Headings' />}
        >
          <Menu>
            <MenuItem primaryText='Heading 1'/>
            <MenuItem primaryText='Heading 2'/>
            <MenuItem primaryText='Subheader'/>
          </Menu>
        </PopoverExampleSimple>

        <EditorToolbarSeparator />

        <IconButton iconClassName='material-icons' tooltip='Code block'>code</IconButton>
        <IconButton iconClassName='material-icons' tooltip='Quote block'>format_quote</IconButton>
        <IconButton iconClassName='material-icons' tooltip='Insert link'>link</IconButton>
        <IconButton iconClassName='material-icons' tooltip='Insert image'>image</IconButton>
        <IconButton iconClassName='material-icons' tooltip='Bulleted list'>format_list_bulleted</IconButton>
        <IconButton iconClassName='material-icons' tooltip='Numbered list'>format_list_numbered</IconButton>

        <PopoverExampleSimple
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
        </PopoverExampleSimple>

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

function EditorToolbarSeparator () {
  return (
    <ToolbarSeparator style={{ margin: 0 }} />
  )
}


class PopoverExampleSimple extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    buttonElement: PropTypes.element.isRequired
  }

  constructor (props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render () {
    const { buttonElement, children } = this.props
    return (
      <div>
        {React.cloneElement(buttonElement, {
          onTouchTap: this.handleTouchTap
        })}
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          {children}
        </Popover>
      </div>
    );
  }
}
