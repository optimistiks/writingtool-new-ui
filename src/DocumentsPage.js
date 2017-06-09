import React from 'react';
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import hipsum from 'lorem-hipsum'

export default function DocumentsPage () {
  return (
    <div>
      <h2>Documents</h2>
      <div className='row'>
        <DocumentCard />
        <DocumentCard />
        <DocumentCard />
        <DocumentCard />
        <DocumentCard />
        <DocumentCard />
        <DocumentCard />
        <DocumentCard />
      </div>
    </div>
  )
}

DocumentCard.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

function DocumentCard (props, context) {
  return (
    <div className='col-xs-12 col-sm-6 col-md-4'>
      <Card style={{ marginBottom: context.muiTheme.spacing.desktopGutter }}>
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
          <FlatButton label="Edit" icon={<EditIcon />} primary />
        </CardActions>
      </Card>
    </div>
  )
}
