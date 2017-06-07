import React from 'react';
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { grey400 } from 'material-ui/styles/colors';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import hipsum from 'lorem-hipsum'

export default function TasksPage () {
  const iconButtonElement = (
    <IconButton>
      <MoreVertIcon color={grey400}/>
    </IconButton>
  );


  const rightIconMenu = (
    <Toolbar style={{ top: '50%', transform: 'translate(0, -50%)', backgroundColor: 'transparent' }}>
      <ToolbarGroup firstChild={true}>
        <IconMenu
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
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
        <Divider inset={true}/>
        <TaskItem />
        <Divider inset={true}/>
        <TaskItem />
        <Divider inset={true}/>
        <TaskItem />
        <Divider inset={true}/>
        <TaskItem />
      </List>
    </div>
  )
}
