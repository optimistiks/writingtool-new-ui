import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { CardActions } from 'material-ui/Card';
import JobItem from './JobItem';
import MaterialIcon from './MaterialIcon'

JobSearchAppliedPage.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function JobSearchAppliedPage (props, context) {
  const jobItemActions = (
    <CardActions>
      <div className='row row_no-spacing center-xs'>
        <div className='col-xs-6 col-lg-3'>
          <FlatButton icon={<MaterialIcon glyph='open_in_new' />} label="Open" primary/>
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
