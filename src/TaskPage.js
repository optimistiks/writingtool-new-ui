import React from 'react';
import PropTypes from 'prop-types'
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';
import hipsum from 'lorem-hipsum'
import TimeSpentSummary from './TimeSpentSummary'
import DocumentsList from './DocumentsList'

TaskPage.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function TaskPage (props, context) {
  const { spacing } = context.muiTheme
  return (
    <div>
      <Paper style={{ padding: spacing.desktopGutter, marginTop: spacing.desktopGutter, marginBottom: spacing.desktopGutter }}>
        <div>
          <Subheader style={{ paddingLeft: 0 }}>Task title</Subheader>
          <TextField
            name='taskTitle'
            fullWidth
            defaultValue={hipsum()}
          />
        </div>
        <div>
          <Subheader style={{ paddingLeft: 0 }}>Due date</Subheader>
          <DatePicker hintText="Pick a due date" autoOk />
        </div>
        <div>
          <Subheader style={{ paddingLeft: 0 }}>Time spent summary</Subheader>
          <TimeSpentSummary />
        </div>
      </Paper>
      <div className='row'>
        <div className='col-xs'>
          <Subheader>Task documents</Subheader>
        </div>
        <FlatButton icon={<FontIcon className='material-icons'>add_circle_outline</FontIcon>} label='New document' />
      </div>
      <DocumentsList />
    </div>
  )
}
