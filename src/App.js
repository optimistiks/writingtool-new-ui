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

const SelectableList = makeSelectable(List)

class App extends Component {
  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      isSidebarOpened: true
    }
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  toggleSidebar () {
    this.setState((state) => ({
      isSidebarOpened: !state.isSidebarOpened
    }))
  }

  render () {
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

    console.log('muiTheme', this.context.muiTheme)
    const { appBar, drawer, spacing, zIndex } = this.context.muiTheme

    return (
      <div>
        <NavBar toggleSidebar={this.toggleSidebar} />
        <Sidebar isOpened={this.state.isSidebarOpened} />
        <div className='flex-container'>
          <div style={{ marginLeft: `${this.state.isSidebarOpened ? drawer.width + spacing.desktopGutterLess : 0}px`, transition: `${transitions.easeOut()}` }}>
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;

NavBar.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

NavBar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired
}

function NavBar (props, context) {
  const { toggleSidebar } = props
  const { appBar } = context.muiTheme
  return (
    <AppBar
      zDepth={2}
      onLeftIconButtonTouchTap={toggleSidebar}
      title='Writing Tool'
      showMenuIconButton
      iconStyleRight={{ marginTop: '0px' }}
      iconElementRight={
        <ToolbarGroup
          style={{ height: `${appBar.height}px` }}
        >
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
      }
    />
  )
}


Sidebar.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

Sidebar.propTypes = {
  isOpened: PropTypes.bool.isRequired
}

function Sidebar (props, context) {
  const { isOpened } = props
  const { appBar, zIndex } = context.muiTheme
  return (
    <Drawer
      open={isOpened}
      zDepth={1}
      containerStyle={{ top: `${appBar.height}px`, zIndex: zIndex.menu }}
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
