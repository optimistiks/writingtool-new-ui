import 'normalize.css/normalize.css'
import 'flexboxgrid/dist/flexboxgrid.css'
import '../index.css'
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin'
import { storiesOf, configure, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReactTooltip from 'react-tooltip'

import Welcome from './Welcome';
import EditorDocumentBar from '../EditorDocumentBar'
import EditorToolbar from '../EditorToolbar'
import EditorPaper from '../EditorPaper'
import GenericPopover from '../GenericPopover'
import GenericDialog from '../GenericDialog'
import EditorGoogleFontsDialog from '../EditorGoogleFontsDialog'
import EditorTextAnalysisPanel from '../EditorTextAnalysisPanel'
import EditorWordDetailsPanel from '../EditorWordDetailsPanel'
import muiTheme from '../muiTheme'

injectTapEventPlugin()


addDecorator((story) => {
  console.log('story', story)
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        {story()}
        <ReactTooltip effect='solid' />
      </div>
    </MuiThemeProvider>
  )
});

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('GenericPopover', module)
  .add('default', () => (
    <GenericPopover
      buttonElement={<RaisedButton label='Popover'/>}
    >
      <Menu>
        <MenuItem primaryText='Item 1'/>
        <MenuItem primaryText='Item 2'/>
        <MenuItem primaryText='Item 3'/>
      </Menu>
    </GenericPopover>
  ));

storiesOf('GenericDialog', module)
  .add('default', () => (
    <GenericDialog
      isVisible
      onClose={() => {
      }}
      actions={
        <div>
          <FlatButton
            label="Cancel"
          />
          <FlatButton
            label="Submit"
            primary
          />
        </div>
      }
      title='Dialog title'
    >
      <div>Dialog content</div>
    </GenericDialog>
  ));

storiesOf('EditorToolbar', module)
  .add('default', () => <EditorToolbar />);

storiesOf('EditorPaper', module)
  .add('default', () => <EditorPaper />);

storiesOf('EditorDocumentBar', module)
  .add('default', () => <EditorDocumentBar />);

storiesOf('EditorGoogleFontsDialog', module)
  .add('default', () => (
    <EditorGoogleFontsDialog
      onClose={() => {}}
      isVisible
    />
  ));

storiesOf('EditorTextAnalysisPanel', module)
  .add('default', () => (
    <EditorTextAnalysisPanel />
  ));

storiesOf('EditorWordDetailsPanel', module)
  .add('default', () => (
    <EditorWordDetailsPanel />
  ));

