import React from 'react';
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import hipsum from 'lorem-hipsum'

export default function ProjectsPage () {
  return (
    <div>
      <h2>Projects</h2>
      <div className='row'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

ProjectCard.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

function ProjectCard (props, context) {
  return (
    <div className='col-xs-12'>
      <Card style={{ marginBottom: context.muiTheme.spacing.desktopGutterLess }}>
        <div className='row' style={{ marginRight: 0 }}>
          <div className='col-xs'>
            <CardTitle title={hipsum({ count: 1, units: 'sentences', sentenceLowerBound: 1, sentenceUpperBound: 5 })} />
          </div>
          <IconMenu
            iconButtonElement={<IconButton style={{ paddingBottom: '0px' }}><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Delete" />
          </IconMenu>
        </div>
        <CardActions>
          <FlatButton label="Open" primary/>
        </CardActions>
      </Card>
    </div>
  )
}
