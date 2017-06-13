import React from 'react';
import PropTypes from 'prop-types'
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
  const { spacing, appBar, toolbar, zIndex } = context.muiTheme
  return (
    <div style={{ marginTop: `${appBar.height + toolbar.height * 2 + spacing.desktopGutter}px` }}>
      <EditorDocumentBar
        style={{ position: 'fixed', top: `${appBar.height}px`, left: 0, right: 0, zIndex: zIndex.menu }}
      />
      <EditorToolbar
        style={{ position: 'fixed', top: `${appBar.height + toolbar.height}px`, left: 0, right: 0, zIndex: zIndex.menu}}
      />
      <EditorGoogleFontsDialog isVisible={false} onClose={() => {}} />
      <div className='row center-xs row_no-spacing'>
        <div className='col-xs-12 col-md first-md last-xs' style={{ maxWidth: '210mm' }}>
          <EditorPaper />
        </div>
        <div className='col-md invisible-xs' style={{ flex: '0 0 auto', width: spacing.desktopGutter, height: spacing.desktopGutter }} />
        <div className='col-xs-12 col-md first-xs last-md' style={{ width: '100%', maxWidth: '400px', flex: '0 0 auto' }}>
          <EditorTextAnalysisPanel />
        </div>
      </div>
    </div>
  )
}
