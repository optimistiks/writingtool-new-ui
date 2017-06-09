import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import MuiTheme from './MuiTheme'
import AppLayout from './AppLayout'
import EditorLayout from './EditorLayout'
import ReactTooltip from 'react-tooltip'

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
        <MuiTheme>
          <div>
            <Switch>
              <Route path='/editor' render={(props) => <EditorLayout {...props} isSidebarOpened={isSidebarOpened} toggleSidebar={this.toggleSidebar} />} />
              <Route path='/' render={(props) => <AppLayout {...props} isSidebarOpened={isSidebarOpened} toggleSidebar={this.toggleSidebar} />} />
            </Switch>
            <ReactTooltip effect='solid' />
          </div>
        </MuiTheme>
      </BrowserRouter>
    )
  }
}

export default AppContainer
