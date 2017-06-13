import React from 'react';
import PropTypes from 'prop-types'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import TasksList from './TasksList';

SettingsPage.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function SettingsPage (props, context) {
  const { desktopGutter } = context.muiTheme.spacing;
  return (
    <div>
      <h2 className='mdc-typography--display1'>Settings</h2>
      <Paper style={{ padding: desktopGutter }}>
        <Subheader style={{ padding: 0 }}>Email</Subheader>
        <span style={{ marginRight: desktopGutter }}>user@mail.com</span>
        <FlatButton label='Change email' />
        <Subheader style={{ padding: 0 }}>Password</Subheader>
        <FlatButton label='Change password' />
        <Subheader style={{ padding: 0 }}>Phone number</Subheader>
        <TextField
          hintText="Enter phone number"
        />
        <Subheader style={{ padding: 0 }}>Notifications</Subheader>
        <div className='row row_no-spacing start-xs'>
          <div className='col-xs col_no-flex' style={{ marginRight: desktopGutter }}>
            <Checkbox
              label="Email"
            />
          </div>
          <div className='col-xs col_no-flex' style={{ marginRight: desktopGutter }}>
            <Checkbox
              label="Push"
            />
          </div>
          <div className='col-xs col_no-flex'>
            <Checkbox
              label="SMS"
            />
          </div>
        </div>
      </Paper>
    </div>
  )
}
