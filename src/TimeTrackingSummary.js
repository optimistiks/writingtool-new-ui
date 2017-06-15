import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MediaQuery from 'react-responsive'
import { MEDIUM_END, LARGE_START } from './mediaQueryBreakpoints'

export default function TimeSpentSummary () {
  return (
    <div>
      <MediaQuery maxWidth={MEDIUM_END}>
        <Table>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>Today</TableRowColumn>
              <TableRowColumn>1h 20m</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>This week</TableRowColumn>
              <TableRowColumn>24h 10m</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Last week</TableRowColumn>
              <TableRowColumn>38h 40m</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>All time</TableRowColumn>
              <TableRowColumn>56h 10m</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </MediaQuery>
      <MediaQuery minWidth={LARGE_START}>
        <Table>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>Today</TableRowColumn>
              <TableRowColumn>This week</TableRowColumn>
              <TableRowColumn>Last week</TableRowColumn>
              <TableRowColumn>All time</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>1h 20m</TableRowColumn>
              <TableRowColumn>24h 10m</TableRowColumn>
              <TableRowColumn>38h 40m</TableRowColumn>
              <TableRowColumn>56h 10m</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </MediaQuery>
    </div>
  )
}
