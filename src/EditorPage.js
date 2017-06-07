import React from 'react';
import PropTypes from 'prop-types'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import Paper from 'material-ui/Paper';
import hipsum from 'lorem-hipsum'

EditorPage.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function EditorPage (props, context) {
  const { spacing } = context.muiTheme
  return (
    <div>
      <Toolbar style={{ height: 'auto' }}>
        <ToolbarGroup style={{ maxWidth: '100%' }}>
          <ToolbarTitle text={hipsum({ count: 1, units: 'sentences' })} />
        </ToolbarGroup>
      </Toolbar>
      <div style={{ padding: `${spacing.desktopGutterLess}px` }}>
        <div className='row'>
          <div className='col-xs'>
            <Paper style={{ width: '100%', minHeight: '400px' }} zDepth={1} rounded={false} />
          </div>
          <div className='col-xs-12 col-lg-3'>
            <Paper style={{ width: '100%', minHeight: '400px' }} zDepth={1} rounded={false} />
          </div>
        </div>
      </div>
    </div>
  )
}
