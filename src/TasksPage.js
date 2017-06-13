import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import TasksList from './TasksList';

export default function TasksPage () {
  return (
    <div>
      <div className='row middle-xs row_no-spacing'>
        <div className='col-xs'>
          <h2 className='mdc-typography--display1'>Tasks</h2>
        </div>
        <div className='col-xs end-xs' style={{ flex: '0 0 auto' }}>
          <FlatButton icon={<FontIcon className='material-icons'>add_circle_outline</FontIcon>} label='New task' />
        </div>
      </div>
      <TasksList />
    </div>
  )
}
