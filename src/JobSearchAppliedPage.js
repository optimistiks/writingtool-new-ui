import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import TasksList from './TasksList';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import ChipInput from 'material-ui-chip-input';
import algoliaLogo from './static/Algolia_logo_bg-white.svg';
import typography from 'material-ui/styles/typography';
import { grey400, red400 } from 'material-ui/styles/colors';
import hipsum from 'lorem-hipsum';
import Avatar from 'material-ui/Avatar';
import { darkBlack, lightBlack } from 'material-ui/styles/colors';
import { ToolbarGroup } from 'material-ui/Toolbar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import { List, ListItem } from 'material-ui/List';
import JobItem from './JobItem';


JobSearchAppliedPage.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function JobSearchAppliedPage (props, context) {
  const jobItemActions = (
    <CardActions>
      <div className='row row_no-spacing center-xs'>
        <div className='col-xs-6 col-lg-3'>
          <FlatButton icon={<FontIcon className='material-icons'>open_in_new</FontIcon>} label="Open"
                      primary/>
        </div>
        <div className='col-xs-6 col-lg-3'>
          <FlatButton label="Bookmark"/>
        </div>
        <div className='col-xs-6 col-lg-3'>
          <FlatButton label="Remove from applied"/>
        </div>
        <div className='col-xs-6 col-lg-3'>
          <FlatButton label="Add to projects"/>
        </div>
      </div>
    </CardActions>
  )

  return (
    <div>
      <h2 className='mdc-typography--display1'>Jobs you applied to</h2>
      <div>
        <JobItem actionsElement={jobItemActions} />
        <JobItem actionsElement={jobItemActions} />
        <JobItem actionsElement={jobItemActions} />
        <JobItem actionsElement={jobItemActions} />
      </div>
    </div>
  )
}
