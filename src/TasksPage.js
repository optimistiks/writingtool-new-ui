import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import TasksList from './TasksList';
import MaterialIcon from './MaterialIcon';

export default function TasksPage () {
  return (
    <div>
      <div className='row middle-xs row_no-spacing'>
        <div className='col-xs'>
          <h2 className='mdc-typography--display1'>Tasks</h2>
        </div>
        <div className='col-xs end-xs' style={{ flex: '0 0 auto' }}>
          <FlatButton icon={<MaterialIcon glyph="add_circle_outline" />} label='New task' />
        </div>
      </div>
      <TasksList />
    </div>
  )
}
