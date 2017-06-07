import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import RaisedButton from 'material-ui/RaisedButton'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import { ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import HomeIcon from 'material-ui/svg-icons/action/home';
import ListIcon from 'material-ui/svg-icons/action/list';
import ViewModuleIcon from 'material-ui/svg-icons/action/view-module';
import ViewStreamIcon from 'material-ui/svg-icons/action/view-stream';
import ViewListIcon from 'material-ui/svg-icons/action/view-list';
import SearchIcon from 'material-ui/svg-icons/action/search';
import BookmarkIcon from 'material-ui/svg-icons/action/bookmark';
import CheckCircleIcon from 'material-ui/svg-icons/action/check-circle';

import AccountCircleIcon from 'material-ui/svg-icons/action/account-circle';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import HelpIcon from 'material-ui/svg-icons/action/help-outline';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MediaQuery from 'react-responsive'

import DocumentsPage from './DocumentsPage'
import TasksPage from './TasksPage'
import ProjectsPage from './ProjectsPage'

const SelectableList = makeSelectable(List)

class App extends Component {
  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  }

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
    console.log('muiTheme', this.context.muiTheme)
    const { isSidebarOpened } = this.state
    return (
      <div>
        <MediaQuery maxWidth={767}>
          <NavBar toggleSidebar={this.toggleSidebar} ControlsComponent={NavBarControlsSmall} />
          <Sidebar isOpened={isSidebarOpened} isDocked={false} />
          <ContentWrapper />
        </MediaQuery>
        <MediaQuery minWidth={768} maxWidth={1199}>
          <NavBar toggleSidebar={this.toggleSidebar} ControlsComponent={NavBarControlsLarge} />
          <Sidebar isOpened={isSidebarOpened} isDocked={false} />
          <ContentWrapper />
        </MediaQuery>
        <MediaQuery minWidth={1200}>
          <NavBar ControlsComponent={NavBarControlsLarge} />
          <Sidebar isOpened={true} isDocked />
          <ContentWrapper moveForSidebar={true} />
        </MediaQuery>
      </div>
    );
  }
}

const muiTheme = getMuiTheme({
  zIndex: {
    appBar: 1300,
    drawer: 1200,
    drawerOverlay: 1100
  },
});

function MuiThemeApp (props) {
  return (
    <BrowserRouter>
      <MuiThemeProvider muiTheme={muiTheme}>
        <App {...props} />
      </MuiThemeProvider>
    </BrowserRouter>
  )
}
export default MuiThemeApp;

/* NavBar */

NavBar.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

NavBar.propTypes = {
  toggleSidebar: PropTypes.func,
  ControlsComponent: PropTypes.func.isRequired
}

function NavBar (props, context) {
  const { toggleSidebar, ControlsComponent } = props
  const { appBar } = context.muiTheme
  return (
    <AppBar
      title='Writing Tool'
      zDepth={2}
      style={{ position: 'fixed', top: '0px' }}
      showMenuIconButton={toggleSidebar != null}
      onLeftIconButtonTouchTap={toggleSidebar}
      iconStyleRight={{ marginTop: '0px' }}
      iconElementRight={<ControlsComponent />}
    />
  )
}

/* NavBarControlsSmall */

NavBarControlsSmall.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

function NavBarControlsSmall (props, context) {
  const { appBar } = context.muiTheme
  return (
    <ToolbarGroup style={{ height: `${appBar.height}px` }}>
      <IconButton><NotificationsIcon color={appBar.textColor}/></IconButton>
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon color={appBar.textColor}/></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="New document"/>
        <MenuItem primaryText="Writer profile"/>
        <MenuItem primaryText="Help"/>
        <MenuItem primaryText="Settings"/>
        <MenuItem primaryText="Sign out"/>
      </IconMenu>
    </ToolbarGroup>
  )
}

/* NavBarControlsLarge */

NavBarControlsLarge.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

function NavBarControlsLarge (props, context) {
  const { appBar } = context.muiTheme
  return (
    <ToolbarGroup style={{ height: `${appBar.height}px` }}>
      <RaisedButton label="New Document"/>
      <IconButton><AccountCircleIcon color={appBar.textColor}/></IconButton>
      <IconButton><NotificationsIcon color={appBar.textColor}/></IconButton>
      <IconButton><HelpIcon color={appBar.textColor} title='Help'/></IconButton>
      <ToolbarSeparator />
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon color={appBar.textColor}/></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="Settings"/>
        <MenuItem primaryText="Sign out"/>
      </IconMenu>
    </ToolbarGroup>
  )
}

/* Sidebar */

Sidebar.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  isDocked: PropTypes.bool.isRequired
}

Sidebar.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

function Sidebar (props, context) {
  const { appBar } = context.muiTheme
  return (
    <Drawer
      open={props.isOpened}
      docked={props.isDocked}
      containerStyle={{ top: `${appBar.height}px` }}
      zDepth={1}
    >
      <SelectableList value={5}>
        <Subheader>Pages</Subheader>
        <ListItem
          value={1}
          primaryText="Home"
          leftIcon={<HomeIcon />}
        />
        <ListItem
          value={2}
          primaryText="Documents"
          leftIcon={<ViewModuleIcon />}
        />
        <ListItem
          value={3}
          primaryText="Tasks"
          leftIcon={<ListIcon />}
        />
        <ListItem
          value={4}
          primaryText="Projects"
          leftIcon={<ViewStreamIcon />}
        />
        <ListItem
          primaryText="Job search"
          primaryTogglesNestedList
          leftIcon={<SearchIcon />}
          nestedItems={[
            <ListItem
              value={5}
              primaryText="Job feed"
              leftIcon={<ViewListIcon />}
            />,
            <ListItem
              value={6}
              primaryText="Bookmarks"
              leftIcon={<BookmarkIcon />}
            />,
            <ListItem
              value={7}
              primaryText="Applied to"
              leftIcon={<CheckCircleIcon />}
            />,
          ]}
        />
      </SelectableList>
    </Drawer>
  )
}

/* Content */

function Content () {
  return (
    <Switch>
      <Route exact path='/' component={DocumentsPage}/>
      <Route exact path='/documents' component={DocumentsPage}/>
      <Route exact path='/tasks' component={TasksPage}/>
      <Route exact path='/projects' component={ProjectsPage}/>
    </Switch>
  )
}

/* ContentWrapper */

ContentWrapper.propTypes = {
  moveForSidebar: PropTypes.bool
}

ContentWrapper.defaultProps = {
  moveForSidebar: false
}

ContentWrapper.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

function ContentWrapper (props, context) {
  const { moveForSidebar } = props
  const { appBar, drawer, spacing } = context.muiTheme
  const topPadding = appBar.height
  const leftPadding = moveForSidebar ? drawer.width + spacing.desktopGutter : spacing.desktopGutter
  const rightPadding = spacing.desktopGutter
  const style = {
    padding: `${topPadding}px ${rightPadding}px 0px ${leftPadding}px`
  }
  return (
    <div
      style={style}
    >
      <Content />
    </div>

  )
}
