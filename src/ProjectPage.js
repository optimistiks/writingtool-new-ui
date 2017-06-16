import React from 'react';
import PropTypes from 'prop-types'
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import hipsum from 'lorem-hipsum'
import TasksList from './TasksList'
import TimeSpentSummary from './TimeTrackingSummary'
import MaterialIcon from './MaterialIcon';

ProjectPage.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function ProjectPage (props, context) {
  const { spacing } = context.muiTheme
  return (
    <div>
      <Paper style={{ padding: spacing.desktopGutter, marginTop: spacing.desktopGutter, marginBottom: spacing.desktopGutter }}>
        <div>
          <Subheader style={{ paddingLeft: 0 }}>Project title</Subheader>
          <TextField
            name='projectTitle'
            fullWidth
            defaultValue={hipsum()}
            style={{ marginBottom: spacing.desktopGutter }}
          />
        </div>
        <div>
          <Subheader style={{ paddingLeft: 0 }}>Time spent summary</Subheader>
          <TimeSpentSummary />
        </div>
      </Paper>
      <div className='row middle-xs row_no-spacing'>
        <div className='col-xs'>
          <Subheader style={{ paddingLeft: 0 }}>Project tasks</Subheader>
        </div>
        <div className='col-xs end-xs' style={{ flex: '0 0 auto' }}>
          <FlatButton icon={<MaterialIcon glyph="add_circle_outline" />} label='New task' />
        </div>
      </div>
      <TasksList />
    </div>
  )
}
