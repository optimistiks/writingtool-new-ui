import React from 'react';
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import hipsum from 'lorem-hipsum'
import MaterialIcon from './MaterialIcon'

export default function TasksList () {
  const iconButtonElement = (
    <IconButton>
      <MaterialIcon glyph='more_vert'/>
    </IconButton>
  );


  const rightIconMenu = (
    <IconMenu
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      iconButtonElement={iconButtonElement}
    >
      <MenuItem>Delete</MenuItem>
    </IconMenu>
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
    <List>
      <TaskItem />
      <Divider/>
      <TaskItem />
      <Divider/>
      <TaskItem />
      <Divider/>
      <TaskItem />
      <Divider/>
      <TaskItem />
    </List>
  )
}
