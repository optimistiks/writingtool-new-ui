import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import { Tabs, Tab } from 'material-ui/Tabs';
import { grey200 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Subheader from 'material-ui/Subheader'
import hipsum from 'lorem-hipsum'
import randomWords from 'random-words'
import muiTheme from './muiTheme'

const tabsTheme = getMuiTheme({
  ...muiTheme,
  tabs: {
    backgroundColor: muiTheme.paper.backgroundColor,
    selectedTextColor: muiTheme.inkBar.backgroundColor,
    textColor: muiTheme.paper.color,
  }
})

EditorWordDetailsPanel.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function EditorWordDetailsPanel (props, context) {
  console.log('mui theme', context.muiTheme)
  const { spacing } = context.muiTheme
  return (
    <Paper>
      <MuiThemeProvider muiTheme={tabsTheme}>
        <Tabs tabItemContainerStyle={{ border: `1px solid ${grey200}` }}>
          <Tab label='Synonyms'>
            <div style={{ padding: spacing.desktopGutter }}>
              {randomWords(10).map((word, index) => <span>{word}{index !== 9 ? ', ' : ''}</span>)}
              <Subheader style={{ paddingLeft: 0 }}>Similar words</Subheader>
              {randomWords(10).map((word, index) => <span>{word}{index !== 9 ? ', ' : ''}</span>)}
            </div>
          </Tab>
          <Tab label='Antonyms'>
            <div style={{ padding: spacing.desktopGutter }}>
              {randomWords(10).map((word, index) => <span>{word}{index !== 9 ? ', ' : ''}</span>)}
            </div>
          </Tab>
          <Tab label='Definitions'>
            <div style={{ padding: spacing.desktopGutter }}>
              <dl>
                <dt><i>verb</i></dt>
                <dd><p>{hipsum({ count: 2 })}</p></dd>
                <dt><i>verb</i></dt>
                <dd><p>{hipsum({ count: 5 })}</p></dd>
              </dl>
            </div>
          </Tab>
          <Tab label='Examples'>
            <div style={{ padding: spacing.desktopGutter }}>
              <p><i>{hipsum()}</i></p>
              <p><i>{hipsum()}</i></p>
              <p><i>{hipsum()}</i></p>
              <p><i>{hipsum()}</i></p>
            </div>
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    </Paper>
  )
}
