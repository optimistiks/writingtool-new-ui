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
  const { spacing, editorToolbar, appBar, toolbar, zIndex } = context.muiTheme
  return (
    <div style={{ marginTop: `${appBar.height + toolbar.height * 2 + spacing.desktopGutter}px` }}>
      <EditorDocumentBar
        style={{ position: 'fixed', top: `${appBar.height}px`, left: 0, right: 0, zIndex: zIndex.menu }}
      />
      <EditorToolbar
        style={{ position: 'fixed', top: `${appBar.height + toolbar.height}px`, left: 0, right: 0, zIndex: zIndex.menu}}
      />
      <EditorGoogleFontsDialog isVisible={false} onClose={() => {}} />
      <div className='row center-xs' style={{ margin: '0' }}>
        <div className='col-xs-12 col-md first-md' style={{ maxWidth: '210mm' }}>
          <EditorPaper />
        </div>
        <div className='col-xs-12 col-md first-xs' style={{ maxWidth: '400px', flex: '0 0 auto' }}>
          <EditorTextAnalysisPanel />
        </div>
      </div>
    </div>
  )
}
