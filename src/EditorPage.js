import React from 'react';
import PropTypes from 'prop-types'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import PlayIcon from 'material-ui/svg-icons/av/play-arrow';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import hipsum from 'lorem-hipsum'
import { cyan50 } from 'material-ui/styles/colors'
import EditorDocumentBar from './EditorDocumentBar'
import EditorToolbar from './EditorToolbar'
import EditorPaper from './EditorPaper'

EditorPage.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function EditorPage (props, context) {
  const { spacing, editorToolbar, appBar } = context.muiTheme
  return (
    <div style={{ marginTop: `${appBar.height}px` }}>
      <EditorDocumentBar />
      <EditorToolbar style={{ marginBottom: `${spacing.desktopGutterLess}px` }} />
      <EditorPaper />
    </div>
  )
/*  return (
    <div>
      <div style={{ padding: `0 ${spacing.desktopGutterLess}px`, background: 'white', margin: 0, height: `${editorToolbar.height}px` }}>
        <div className='row' style={{ cursor: 'pointer' }}>
          <div className='col-xs-12'>
            <EditIcon style={{ width: '18px', height: '18px', float: 'left', marginTop: '0.85em', marginRight: `${spacing.desktopGutterMini}px` }} />
            <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>

            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <RaisedButton label='00:00' icon={<PlayIcon />} tooltip='Start tracking time' />
          </div>
        </div>
      </div>
      <div style={{ position: 'fixed', top: `${appBar.height + editorToolbar.height}px`, left: 0, right: 0, bottom: 0 }}>
        <div className='row' style={{ padding: `${spacing.desktopGutterLess}px`, margin: 0, minHeight: '100%' }}>
          <div className='col-xs'>
            <Paper style={{ width: '100%', minHeight: '100%' }} zDepth={1} rounded={false} />
          </div>
          <div className='col-xs-12 col-lg-3'>
            <Paper style={{ width: '100%', minHeight: '100%' }} zDepth={1} rounded={false} />
          </div>
        </div>
      </div>
    </div>
  )*/
}
