import React from 'react';
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import DocumentsPage from './DocumentsPage'
import TasksPage from './TasksPage'
import ProjectsPage from './ProjectsPage'

AppContent.propTypes = {
  moveForSidebar: PropTypes.bool
}

AppContent.defaultProps = {
  moveForSidebar: false
}

AppContent.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function AppContent (props, context) {
  const { moveForSidebar } = props
  const { appBar, drawer, spacing } = context.muiTheme
  const topPadding = appBar.height
  const leftPadding = moveForSidebar ? drawer.width + spacing.desktopGutter : spacing.desktopGutter
  const rightPadding = spacing.desktopGutter
  const style = {
    padding: `${topPadding}px ${rightPadding}px 0px ${leftPadding}px`
  }
  return (
    <div style={style}>
      <Switch>
        <Route exact path='/' component={DocumentsPage}/>
        <Route exact path='/documents' component={DocumentsPage}/>
        <Route exact path='/tasks' component={TasksPage}/>
        <Route exact path='/projects' component={ProjectsPage}/>
      </Switch>
    </div>

  )
}
