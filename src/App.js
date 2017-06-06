import React, { Component } from 'react';
import PropTypes from 'prop-types'

import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import { ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AssIcon from 'material-ui/svg-icons/action/accessibility';
import AccBalIcon from 'material-ui/svg-icons/action/account-balance';
import AccCircleIcon from 'material-ui/svg-icons/action/account-circle';
import AspectRatioIcon from 'material-ui/svg-icons/action/aspect-ratio';
import IconButton from 'material-ui/IconButton';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
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
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import HelpIcon from 'material-ui/svg-icons/action/help-outline';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MediaQuery from 'react-responsive'

import hipsum from 'lorem-hipsum'

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
    const { appBar, drawer, spacing, zIndex } = this.context.muiTheme
    const { isSidebarOpened } = this.state
    return (
      <div>
        <MediaQuery maxWidth={767}>
          <NavBar toggleSidebar={this.toggleSidebar} ControlsComponent={NavBarControlsSmall} />
          <Sidebar isOpened={isSidebarOpened} isDocked={false} />
          <ContentWrapper marginLeft={0} />
        </MediaQuery>
        <MediaQuery minWidth={768} maxWidth={1199}>
          <NavBar toggleSidebar={this.toggleSidebar} ControlsComponent={NavBarControlsLarge} />
          <Sidebar isOpened={isSidebarOpened} isDocked={false} />
          <ContentWrapper marginLeft={0} />
        </MediaQuery>
        <MediaQuery minWidth={1200}>
          <NavBar ControlsComponent={NavBarControlsLarge} />
          <Sidebar isOpened={true} isDocked />
          <ContentWrapper marginLeft={drawer.width + spacing.desktopGutterLess} />
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
    <MuiThemeProvider muiTheme={muiTheme}>
      <App {...props} />
    </MuiThemeProvider>
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

/* Card */

function DocumentCard () {
  return (
    <div className='col-xs-12'>
      <Card style={{ marginBottom: '30px' }}>
        <div className='row'>
          <div className='col-xs-9'>
            <CardTitle title={hipsum({ count: 1, units: 'sentences', sentenceLowerBound: 1, sentenceUpperBound: 5 })} />
          </div>
          <div className='col-xs-3 text-right'>
            <IconMenu
              iconButtonElement={<IconButton style={{ paddingBottom: '0px' }}><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Delete" />
            </IconMenu>
          </div>
        </div>
        <CardActions>
          <FlatButton label="Edit"/>
        </CardActions>
      </Card>
    </div>
  )
}

/* Content */

function Content () {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xs-12'>
          <h2>Documents</h2>
          <div className='row'>
            <DocumentCard />
            <DocumentCard />
            <DocumentCard />
            <DocumentCard />
            <DocumentCard />
            <DocumentCard />
            <DocumentCard />
            <DocumentCard />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ContentWrapper */

ContentWrapper.propTypes = {
  marginLeft: PropTypes.number.isRequired
}

ContentWrapper.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

function ContentWrapper (props, context) {
  const { marginLeft } = props
  const { appBar } = context.muiTheme
  return (
    <div style={{ marginTop: `${appBar.height}px`, marginLeft: `${marginLeft}px` }}>
      <Content />
    </div>

  )
}
