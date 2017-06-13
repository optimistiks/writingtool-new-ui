import React from 'react';
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import { Card, CardActions, CardTitle, CardHeader } from 'material-ui/Card';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import Subheader from 'material-ui/Subheader';
import hipsum from 'lorem-hipsum'

DocumentsList.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function DocumentsList (props, context) {
  const { desktopGutter } = context.muiTheme.spacing
  return (
    <div className='row row_no-spacing' style={{ marginRight: `-${desktopGutter}px` }}>
      <DocumentCard />
      <DocumentCard />
      <DocumentCard />
      <DocumentCard />
      <DocumentCard />
      <DocumentCard />
      <DocumentCard />
      <DocumentCard />
    </div>
  )
}

DocumentCard.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

function DocumentCard (props, context) {
  const { desktopGutter } = context.muiTheme.spacing
  return (
    <div className='col-xs-12 col-sm-6 col-md-4'>
      <Card style={{ marginBottom: desktopGutter, marginRight: desktopGutter }}>
        <div className='row row_no-spacing between-xs'>
          <div className='col-xs'>
            <CardHeader
              title={hipsum({ count: 1, units: 'sentences', sentenceLowerBound: 1, sentenceUpperBound: 5 })}
            />
          </div>
          <div className='col-xs end-xs' style={{ flex: '0 0 auto' }}>
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Delete" />
            </IconMenu>
          </div>
        </div>
        <CardActions>
          <FlatButton label="Edit" icon={<EditIcon />} primary />
        </CardActions>
      </Card>
    </div>
  )
}
