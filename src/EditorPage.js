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
import EditorGoogleFontsDialog from './EditorGoogleFontsDialog'
import EditorTextAnalysisPanel from './EditorTextAnalysisPanel'

EditorPage.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function EditorPage (props, context) {
  console.log('muiTheme', context.muiTheme)
  const { spacing, editorToolbar, appBar, toolbar } = context.muiTheme
  return (
    <div style={{ marginTop: `${appBar.height + toolbar.height * 2 + spacing.desktopGutter}px` }}>
      <EditorDocumentBar style={{ position: 'fixed', top: `${appBar.height}px`, left: 0, right: 0 }} />
      <EditorToolbar style={{ position: 'fixed', top: `${appBar.height + toolbar.height}px`, left: 0, right: 0 }} />
      <div className='row' style={{ margin: '0' }}>
        <div className='col-xs-12 col-sm' style={{ marginBottom: `${spacing.desktopGutter}px`, flex: '0 0 auto' }}>
          <EditorTextAnalysisPanel />
        </div>
        <div className='col-xs-12 col-sm first-sm'>
          <EditorPaper style={{ margin: '0 auto' }} />
        </div>
      </div>
      <EditorGoogleFontsDialog isVisible={false} onClose={() => {}} />
    </div>
  )
}
