import React from 'react';
import { Switch, Route } from 'react-router-dom'
import DocumentsPage from './DocumentsPage'
import TasksPage from './TasksPage'
import ProjectsPage from './ProjectsPage'
import ProjectPage from './ProjectPage'
import TaskPage from './TaskPage'
import SettingsPage from './SettingsPage'
import JobSearchPage from './JobSearchPage'

export default function AppRoutes () {
  return (
    <Switch>
      <Route path='/projects/:projectKey' component={ProjectPage}/>
      <Route path='/projects' component={ProjectsPage}/>
      <Route path='/tasks/:taskKey' component={TaskPage}/>
      <Route path='/tasks' component={TasksPage}/>
      <Route path='/jobSearch' component={JobSearchPage}/>
      <Route path='/documents' component={DocumentsPage}/>
{/*
      <Route path='/jobSearch/bookmarks' component={JobSearchBookmarksPage}/>
      <Route path='/jobSearch/applied' component={JobSearchAppliedPage} />*/}
      <Route path='/settings' component={SettingsPage}/>
      <Route path='/' component={DocumentsPage}/>
    </Switch>
  )
}
