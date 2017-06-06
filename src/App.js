import React, { Component } from 'react';
import PropTypes from 'prop-types'

import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import transitions from 'material-ui/styles/transitions'
import AppBar from 'material-ui/AppBar'
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AssIcon from 'material-ui/svg-icons/action/accessibility';
import AccBalIcon from 'material-ui/svg-icons/action/account-balance';
import AccCircleIcon from 'material-ui/svg-icons/action/account-circle';
import AspectRatioIcon from 'material-ui/svg-icons/action/aspect-ratio';
import IconButton from 'material-ui/IconButton';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MediaQuery from 'react-responsive'

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
      <IconButton><AspectRatioIcon color={appBar.textColor}/></IconButton>
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon color={appBar.textColor}/></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="New document"/>
        <MenuItem primaryText="Writer profile"/>
        <MenuItem primaryText="Settings"/>
        <MenuItem primaryText="Help"/>
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
      <IconButton><AssIcon color={appBar.textColor}/></IconButton>
      <IconButton><AccBalIcon color={appBar.textColor}/></IconButton>
      <IconButton><AccCircleIcon color={appBar.textColor}/></IconButton>
      <IconButton><AspectRatioIcon color={appBar.textColor}/></IconButton>
      <ToolbarSeparator />
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon color={appBar.textColor}/></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
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
      zDepth={2}
    >
      <SelectableList value={3}>
        <ListItem
          value={1}
          primaryText="Brendan Lim"
          leftIcon={<RemoveRedEye />}
        />
        <ListItem
          value={2}
          primaryText="Kerem Suer"
          leftIcon={<RemoveRedEye />}
        />
        <ListItem
          value={3}
          primaryText="Eric Hoffman"
          leftIcon={<RemoveRedEye />}
        />
        <ListItem
          value={4}
          primaryText="Raquel Parrado"
          leftIcon={<RemoveRedEye />}
        />
      </SelectableList>
    </Drawer>
  )
}

/* Content */

function Content () {
  const card = (
    <div className='col-sm-6 col-md-4'>
      <Card style={{ marginBottom: '30px' }}>
        <CardTitle title="Card title" subtitle="Card subtitle"/>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Action1"/>
          <FlatButton label="Action2"/>
        </CardActions>
      </Card>
    </div>
  )

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xs-12'>
          <h2>Documents</h2>
          <div className='row'>
            {card}
            {card}
            {card}
            {card}
            {card}
            {card}
            {card}
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
