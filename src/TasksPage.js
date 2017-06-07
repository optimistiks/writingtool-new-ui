import React from 'react';
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DoneIcon from 'material-ui/svg-icons/action/done';
import hipsum from 'lorem-hipsum'

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

export default function TasksPage () {
  const iconButtonElement = (
    <IconButton>
      <MoreVertIcon color={grey400} />
    </IconButton>
  );



  const rightIconMenu = (
    <Toolbar style={{ top: '50%', transform: 'translate(0, -50%)', backgroundColor: 'transparent' }}>
      <ToolbarGroup firstChild={true}>
        <IconMenu
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          iconButtonElement={iconButtonElement}
        >
          <MenuItem>Delete</MenuItem>
        </IconMenu>
      </ToolbarGroup>
    </Toolbar>
  );

  const TaskItem = () => {
    return (
      <ListItem
        rightIconButton={rightIconMenu}
        primaryText={hipsum({ count: 1, units: 'sentences' })}
      />
    )
  }

  return (
    <div>
      <h2>Tasks</h2>
      <List>
        <TaskItem />
        <Divider inset={true} />
        <TaskItem />
        <Divider inset={true} />
        <TaskItem />
        <Divider inset={true} />
        <TaskItem />
        <Divider inset={true} />
        <TaskItem />
      </List>
    </div>
  )
}
