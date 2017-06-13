import React from 'react';
import { Switch, Route } from 'react-router-dom'
import DocumentsPage from './DocumentsPage'
import TasksPage from './TasksPage'
import ProjectsPage from './ProjectsPage'
import ProjectPage from './ProjectPage'
import TaskPage from './TaskPage'

export default function AppRoutes () {
  return (
    <Switch>
      <Route exact path='/' component={DocumentsPage}/>
      <Route exact path='/documents' component={DocumentsPage}/>
      <Route exact path='/tasks' component={TasksPage}/>
      <Route exact path='/projects' component={ProjectsPage}/>
      <Route path='/projects/:projectKey' component={ProjectPage}/>
      <Route path='/tasks/:taskKey' component={TaskPage}/>
    </Switch>
  )
}
