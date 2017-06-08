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
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

EditorPaper.propTypes = {
  isCentered: PropTypes.bool
}

EditorPaper.defaultProps = {
  isCentered: true
}

EditorPaper.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function EditorPaper (props, context) {
  const { isCentered } = props
  const { spacing } = context.muiTheme
  const style = {
    minHeight: '297mm',
    maxWidth: '210mm',
    padding: `${spacing.desktopGutter}px`
  }

  if (isCentered) {
    style.margin = '0 auto'
  } else {
    style.marginLeft = `${spacing.desktopGutter}px`
  }

  return (
    <Paper style={style}>
      test
    </Paper>
  )
}
