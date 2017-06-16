import React from 'react';
import PropTypes from 'prop-types'
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';
import hipsum from 'lorem-hipsum'
import TimeSpentSummary from './TimeTrackingSummary'
import DocumentsList from './DocumentsList'
import MaterialIcon from './MaterialIcon';

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
      <div className='row middle-xs row_no-spacing' style={{ marginBottom: spacing.desktopGutter }}>
        <div className='col-xs'>
          <Subheader style={{ paddingLeft: 0 }}>Task documents</Subheader>
        </div>
        <div className='col-xs end-xs' style={{ flex: '0 0 auto' }}>
          <FlatButton icon={<MaterialIcon glyph="add_circle_outline" />} label='New document' />
        </div>
      </div>
      <DocumentsList />
    </div>
  )
}
