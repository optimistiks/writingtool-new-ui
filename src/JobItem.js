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


JobItem.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

JobItem.propTypes = {
  actionsElement: PropTypes.element.isRequired
}

export default function JobItem (props, context) {
  const { actionsElement } = props
  console.log('theme', context.muiTheme)
  const { desktopGutter, desktopGutterMini } = context.muiTheme.spacing;
  return (
    <Card style={{ marginBottom: desktopGutter }}>
      <CardText>
        <div className='row row_no-spacing between-xs middle-xs'>
          <div className='col-xs col_no-flex mdc-typography--caption'
               style={{ color: typography.textLightBlack }}>
            today
          </div>
          <div className='col-xs'>
            <div>
              <div className='row row_no-spacing end-xs'>
                <div className='col-xs col_no-flex' style={{ marginLeft: desktopGutterMini }}><Chip>remote</Chip>
                </div>
                <div className='col-xs col_no-flex' style={{ marginLeft: desktopGutterMini }}><Chip>full
                  time</Chip></div>
                <div className='col-xs col_no-flex' style={{ marginLeft: desktopGutterMini }}><Chip>New
                  York</Chip></div>
              </div>
            </div>
          </div>
        </div>
      </CardText>
      <CardTitle title={hipsum()}/>
      <CardText>{hipsum({ count: 3 })}</CardText>
      {actionsElement}
    </Card>
  )
}
