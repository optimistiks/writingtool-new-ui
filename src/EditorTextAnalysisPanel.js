import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import hipsum from 'lorem-hipsum'
import { red100, purple100, blue100, teal100, lime100, blueGrey100, greenA400 } from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon'

const IssuesSummaryTableRow = ({ text, style }) => (
  <TableRow displayBorder={false} style={style}>
    <TableRowColumn>{text}</TableRowColumn>
  </TableRow>
)

EditorTextAnalysisPanel.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

EditorTextAnalysisPanel.propTypes = {
  style: PropTypes.object
}

export default function EditorTextAnalysisPanel (props) {
  return (
    <Paper style={{ ...props.style }}>
      <Subheader>Readability score</Subheader>
      <Table
        selectable={false}
      >
        <TableBody displayRowCheckbox={false}>
          <TableRow style={{ background: greenA400 }} displayBorder={false}>
            <TableRowColumn>
              <span style={{ verticalAlign: 'middle' }}>Score</span>
              {' '}
              <FontIcon
                className='material-icons'
                style={{ fontSize: '18px', verticalAlign: 'middle' }}
                data-tip={`
                Ratings are from A to E,<br/>
                where A-rated text is very easy to read for the general public,<br/>
                and E-rated text is very hard to read.
                `}
                data-place='right'
                data-multiline
              >help_outline</FontIcon>
            </TableRowColumn>
            <TableRowColumn>A</TableRowColumn>
          </TableRow>
          <TableRow style={{ background: greenA400 }} displayBorder={false}>
            <TableRowColumn>
              <span style={{ verticalAlign: 'middle' }}>Grade</span>
              {' '}
              <FontIcon
                className='material-icons'
                style={{ fontSize: '18px', verticalAlign: 'middle' }}
                data-tip={`
                A grade level (based on the USA education system) is equivalent to the number of years of education<br/>
                a person has had.<br/>
                A score of around 10-12 is roughly the reading level on completion of high school.<br/>
                Text to be read by the general public should aim for a grade level of around 8.
                `}
                data-place='right'
                data-multiline
              >help_outline</FontIcon>
            </TableRowColumn>
            <TableRowColumn>9.8</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>

      <Subheader>Text stats</Subheader>
      <Table selectable={false}>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>Reading time</TableRowColumn>
            <TableRowColumn>0:34</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Speaking time</TableRowColumn>
            <TableRowColumn>1:02</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Sentences</TableRowColumn>
            <TableRowColumn>8</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Sentiment</TableRowColumn>
            <TableRowColumn>Neutral</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>

      <Subheader>Issues summary</Subheader>
      <Table selectable={false}>
        <TableBody displayRowCheckbox={false}>
          <IssuesSummaryTableRow style={{ background: red100 }} text='8 sentences may be hard to read'/>
          <IssuesSummaryTableRow style={{ background: purple100 }} text='Found 2 usages of passive voice'/>
          <IssuesSummaryTableRow style={{ background: blue100 }} text='3 cliches found'/>
          <IssuesSummaryTableRow style={{ background: teal100 }} text='8 sentences may be hard to read'/>
          <IssuesSummaryTableRow style={{ background: lime100 }} text='Found 2 usages of passive voice'/>
          <IssuesSummaryTableRow style={{ background: blueGrey100 }} text='3 cliches found'/>
        </TableBody>
      </Table>
    </Paper>
  )
}
