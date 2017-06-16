import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import Joyride from 'react-joyride'
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
    const style = {
      backgroundColor: muiTheme.paper.backgroundColor,
      borderRadius: '0',
      color: muiTheme.palette.textColor,
      mainColor: muiTheme.palette.accent1Color,
      button: {
        color: muiTheme.palette.alternateTextColor,
        borderRadius: '0',
        height: muiTheme.button.height,
        minWidth: muiTheme.button.minWidth,
        fontFamily: 'Roboto, sans-serif',
        textTransform: 'uppercase'
      },
      beacon: {
        inner: muiTheme.palette.accent1Color,
        outer: muiTheme.palette.accent1Color
      }
    }
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Switch>
              <Route path='/writer/:writerKey'
                     render={(props) => <WriterProfileLayout {...props} isSidebarOpened={isSidebarOpened}
                                                             toggleSidebar={this.toggleSidebar}/>}/>
              <Route path='/editor' render={(props) => <EditorLayout {...props} isSidebarOpened={isSidebarOpened}
                                                                     toggleSidebar={this.toggleSidebar}/>}/>
              <Route path='/' render={(props) => <AppLayout {...props} isSidebarOpened={isSidebarOpened}
                                                            toggleSidebar={this.toggleSidebar}/>}/>
            </Switch>
            <ReactTooltip effect='solid'/>
            <Joyride
              ref="joyride"
              steps={[{ title: 'test title', selector: '[data-walkthrough="walkthroughtest"]', style }]}
              run={true} // or some other boolean for when you want to start it
              debug={true}
              callback={() => {}}
            />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

export default AppContainer
