import React from 'react';
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import hipsum from 'lorem-hipsum'
import MaterialIcon from './MaterialIcon'

export default function ProjectsPage () {
  return (
    <div>
      <div className='row middle-xs row_no-spacing'>
        <div className='col-xs'>
          <h2 className='mdc-typography--display1'>Projects</h2>
        </div>
        <div className='col-xs end-xs' style={{ flex: '0 0 auto' }}>
          <FlatButton icon={<MaterialIcon glyph='add_circle_outline'/>} label='New project' />
        </div>
      </div>
      <div className='row row_no-spacing'>
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
      <Card style={{ marginBottom: context.muiTheme.spacing.desktopGutter }}>
        <div className='row between-xs row_no-spacing'>
          <div className='col-xs'>
            <CardTitle title={hipsum({ count: 1, units: 'sentences', sentenceLowerBound: 1, sentenceUpperBound: 5 })} />
          </div>
          <div className='col-xs end-xs' style={{ flex: '0 0 auto' }}>
            <IconMenu
              iconButtonElement={<IconButton><MaterialIcon glyph='more_vert' /></IconButton>}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Delete" />
            </IconMenu>
          </div>
        </div>
        <CardActions>
          <FlatButton label="Open" primary />
        </CardActions>
      </Card>
    </div>
  )
}
