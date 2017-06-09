import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import { Tabs, Tab } from 'material-ui/Tabs';
import { grey200 } from 'material-ui/styles/colors'

EditorWordDetailsPanel.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function EditorWordDetailsPanel (props, context) {
  console.log('mui theme', context.muiTheme)
  const { paper, inkBar } = context.muiTheme
  return (
    <Paper>
      <Tabs tabItemContainerStyle={{ background: paper.backgroundColor, border: `1px solid ${grey200}` }}>
        <Tab label='Synonyms' buttonStyle={{ color: inkBar.backgroundColor }}>
          <div>
            Synonyms
          </div>
        </Tab>
        <Tab label='Antonyms' buttonStyle={{ color: inkBar.backgroundColor }}>
          <div>
            Antonyms
          </div>
        </Tab>
        <Tab label='Definitions' buttonStyle={{ color: inkBar.backgroundColor }}>
          <div>
            Definitions
          </div>
        </Tab>
        <Tab label='Examples' buttonStyle={{ color: inkBar.backgroundColor }}>
          <div>
            Examples
          </div>
        </Tab>
      </Tabs>
    </Paper>
  )
}
