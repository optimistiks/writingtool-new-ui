import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import NavBar from './NavBar'
import NavBarControlsSmall from './NavBarControlsSmall'
import NavBarControlsLarge from './NavBarControlsLarge'
import Sidebar from './Sidebar'
import { SMALL_END, MEDIUM_START } from './mediaQueryBreakpoints'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import GenericPopover from './GenericPopover'
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import GenericDialog from './GenericDialog'
import IconButton from 'material-ui/IconButton';
import headingBg from './static/heading-bg.jpg'
import typography from 'material-ui/styles/typography'
import { red400 } from 'material-ui/styles/colors'
import hipsum from 'lorem-hipsum'
import { MEDIUM_END, LARGE_START } from './mediaQueryBreakpoints'

export default class WriterProfilePageContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEditing: false
    }
    this.toggleEditing = this.toggleEditing.bind(this)
  }

  toggleEditing () {
    this.setState((state) => ({ isEditing: !state.isEditing }))
  }

  render () {
    return <WriterProfilePage {...this.props} toggleEditing={this.toggleEditing} isEditing={this.state.isEditing} />
  }
}

WriterProfilePage.propTypes = {
  toggleEditing: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired
}

WriterProfilePage.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

function WriterProfilePage (props, context) {
  console.log('mui theme', context.muiTheme)
  const { spacing, zIndex, appBar, palette, toolbar } = context.muiTheme
  const privateIcon = <FontIcon className='material-icons'>lock_outline</FontIcon>
  const publicIcon = <FontIcon className='material-icons'>public</FontIcon>
  const paperTopMargin = spacing.desktopGutter + Math.round(150 / 2)
  const PortfolioCard = () => (
    <Card style={{
      padding: spacing.desktopGutter,
      marginBottom: spacing.desktopGutter,
      marginRight: spacing.desktopGutter
    }}>
      <div className='row row_no-spacing top-xs'>
        <div className='col-xs'>
          <CardHeader
            style={{ padding: `0 0 ${spacing.desktopGutter}px` }}
            textStyle={{ padding: 0 }}
            title={hipsum({ count: 1 })}
            subtitle={hipsum({ count: 1 })}
          />
        </div>
        <div className='col-xs col_no-flex'>
          <IconButton style={{ padding: 0, height: spacing.iconSize, width: spacing.iconSize, marginLeft: spacing.desktopGutter }} iconStyle={{ color: palette.primary1Color }} iconClassName='material-icons'>open_in_new</IconButton>
        </div>
      </div>
      <CardText style={{ padding: 0 }}>
        <i>
          {hipsum({ count: 3 })}
        </i>
      </CardText>
    </Card>
  )
  const editModeLayer = props.isEditing ? (
    <div className='col-xs-12 col-lg-6' >
      <Paper style={{ marginTop: `-${toolbar.height}px` }}>
        <Toolbar style={{ justifyContent: 'flex-end', zIndex: zIndex.menu,     position: 'relative' }}>
          <ToolbarGroup lastChild>
            <FlatButton label='Cancel' style={{ whiteSpace: 'nowrap' }} onClick={props.toggleEditing}
                        icon={<FontIcon className='material-icons'>cancel</FontIcon>}/>
            <FlatButton primary label='Save' style={{ whiteSpace: 'nowrap' }}
                        icon={<FontIcon className='material-icons'>check_circle</FontIcon>}/>
          </ToolbarGroup>
        </Toolbar>
        <div style={{ padding: `${spacing.desktopGutter}px`, height: `calc(100vh - ${appBar.height + toolbar.height}px)`, boxSizing: 'border-box', overflowY: 'auto' }}>
          <div>
            <TextField
              defaultValue='John Smith'
              floatingLabelText='Name'
            />
          </div>
          <div>
            <TextField
              defaultValue='Copywriter, blogger from NY, USA'
              floatingLabelText='Title'
            />
          </div>
          <div>
            <TextField
              defaultValue={hipsum({ count: 3 })}
              floatingLabelText='Overview'
              multiLine
              rows={3}
              fullWidth
            />
          </div>
          <div className='row row_no-spacing middle-xs'>
            <div className='col col_no-flex'>
              <Subheader style={{ padding: 0, marginTop: spacing.desktopGutter, marginBottom: spacing.desktopGutter }}>Portfolio</Subheader>
            </div>
            <div className='col col_no-flex'>
              <FlatButton label='Add item'
                          icon={<FontIcon className='material-icons'>add_circle_outline</FontIcon>}/>
            </div>
          </div>
          <div>
            <Paper style={{ padding: spacing.desktopGutter }}>
              <div className='row row_no-spacing middle-xs'>
                <div className='col-xs'>
                  <TextField
                    defaultValue={hipsum({ count: 1 })}
                    floatingLabelText='Title'
                    fullWidth
                  />
                </div>
                <div className='col-xs col_no-flex'>
                  <IconButton iconStyle={{ color: red400 }} iconClassName='material-icons' style={{ marginLeft: spacing.desktopGutter }}>delete</IconButton>
                </div>
              </div>
              <div>
                <TextField
                  defaultValue={hipsum({ count: 1 })}
                  floatingLabelText='Description'
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  defaultValue={hipsum({ count: 3 })}
                  floatingLabelText='Highlight'
                  multiLine
                  rows={3}
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  defaultValue='http://link.to/article'
                  floatingLabelText='Link'
                  fullWidth
                />
              </div>
            </Paper>
          </div>
        </div>
      </Paper>
    </div>
  ) : null
  return (
    <div>
      <Toolbar style={{ zIndex: zIndex.menu }}>
        <ToolbarGroup>
          <GenericPopover
            buttonElement={<FlatButton style={{ whiteSpace: 'nowrap' }} label='Private' icon={privateIcon}/>}
          >
            <Menu>
              <MenuItem leftIcon={privateIcon} primaryText='Private'/>
              <MenuItem leftIcon={publicIcon} primaryText='Public'/>
            </Menu>
          </GenericPopover>
        </ToolbarGroup>
        <ToolbarGroup lastChild>
          <FlatButton style={{ whiteSpace: 'nowrap' }} label='Edit' onClick={props.toggleEditing}
                      icon={<FontIcon className='material-icons'>mode_edit</FontIcon>}/>
        </ToolbarGroup>
      </Toolbar>
      <div className='row row_no-spacing' style={{ height: `calc(100vh - ${appBar.height + toolbar.height}px)` }}>
        <div className='col-xs' style={{ minWidth: 0, overflowY: 'auto' }}>
          <div style={{ maxWidth: '900px', margin: `${paperTopMargin}px auto 0`, padding: spacing.desktopGutter }}>
            <Paper style={{ padding: spacing.desktopGutter }}>
              <Paper circle style={{
                width: 150,
                height: 150,
                margin: '0 auto',
                marginTop: `-${spacing.desktopGutter + Math.round(150 / 2)}px`
              }}>
                <Avatar
                  src='http://via.placeholder.com/150x150'
                  size={150}
                />
              </Paper>
              <div style={{ textAlign: 'center', marginTop: spacing.desktopGutter }} className='mdc-typography--headline'>
                John Smith
              </div>
              <div style={{ textAlign: 'center', marginBottom: spacing.desktopGutter }}
                   className='mdc-typography--caption'>Copywriter, blogger from NY, USA
              </div>
              <Subheader style={{ padding: 0 }}>Overview</Subheader>
              <div>
                {hipsum({ count: 3 })}
              </div>
            </Paper>
            <div>
              <div className='mdc-typography--title' style={{ margin: spacing.desktopGutter }}>Portfolio</div>
              <div className='row row_no-spacing' style={{ marginRight: `-${spacing.desktopGutter}px` }}>
                <div className='col-xs-12 col-md-6'>
                  <PortfolioCard />
                </div>
                <div className='col-xs-12 col-md-6'>
                  <PortfolioCard />
                </div>
                <div className='col-xs-12 col-md-6'>
                  <PortfolioCard />
                </div>
              </div>
            </div>
          </div>
        </div>
        {editModeLayer}
      </div>
    </div>
  )
}

