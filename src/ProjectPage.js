import React from 'react';
import PropTypes from 'prop-types'
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import hipsum from 'lorem-hipsum'
import TasksList from './TasksList'
import TimeSpentSummary from './TimeSpentSummary'

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
      <div className='row'>
        <div className='col-xs'>
          <Subheader>Project tasks</Subheader>
        </div>
        <FlatButton icon={<FontIcon className='material-icons'>add_circle_outline</FontIcon>} label='New task' />
      </div>
      <TasksList />
    </div>
  )
}
