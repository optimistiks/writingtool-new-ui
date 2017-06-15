import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppLayout from './AppLayout'
import EditorLayout from './EditorLayout'
import WriterProfileLayout from './WriterProfileLayout'
import muiTheme from './muiTheme'

class AppContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSidebarOpened: false
    }
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  toggleSidebar () {
    this.setState((state) => ({
      isSidebarOpened: !state.isSidebarOpened
    }))
  }

  render () {
    const { isSidebarOpened } = this.state
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Switch>
              <Route path='/writer/:writerKey' render={(props) => <WriterProfileLayout {...props} isSidebarOpened={isSidebarOpened} toggleSidebar={this.toggleSidebar} />} />
              <Route path='/editor' render={(props) => <EditorLayout {...props} isSidebarOpened={isSidebarOpened} toggleSidebar={this.toggleSidebar} />} />
              <Route path='/' render={(props) => <AppLayout {...props} isSidebarOpened={isSidebarOpened} toggleSidebar={this.toggleSidebar} />} />
            </Switch>
            <ReactTooltip effect='solid' />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

export default AppContainer
