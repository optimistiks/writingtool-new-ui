import React from 'react';
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import HomeIcon from 'material-ui/svg-icons/action/home';
import ListIcon from 'material-ui/svg-icons/action/list';
import ViewModuleIcon from 'material-ui/svg-icons/action/view-module';
import ViewStreamIcon from 'material-ui/svg-icons/action/view-stream';
import ViewListIcon from 'material-ui/svg-icons/action/view-list';
import SearchIcon from 'material-ui/svg-icons/action/search';
import BookmarkIcon from 'material-ui/svg-icons/action/bookmark';
import CheckCircleIcon from 'material-ui/svg-icons/action/check-circle';

const SelectableList = makeSelectable(List)

Sidebar.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  isDocked: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired
}

Sidebar.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

function Sidebar (props, context) {
  console.log('location', props.location)
  const { appBar } = context.muiTheme
  return (
    <Drawer
      open={props.isOpened}
      docked={props.isDocked}
      containerStyle={{ top: `${appBar.height}px` }}
      zDepth={1}
    >
      <SelectableList value={props.location.pathname}>
        <Subheader>Pages</Subheader>
        <ListItem
          containerElement={<Link to='/'/>}
          value='/'
          primaryText="Home"
          leftIcon={<HomeIcon />}
        />
        <ListItem
          containerElement={<Link to='/documents'/>}
          value='/documents'
          primaryText="Documents"
          leftIcon={<ViewModuleIcon />}
        />
        <ListItem
          containerElement={<Link to='/tasks'/>}
          value='/tasks'
          primaryText="Tasks"
          leftIcon={<ListIcon />}
        />
        <ListItem
          containerElement={<Link to='/projects'/>}
          value='/projects'
          primaryText="Projects"
          leftIcon={<ViewStreamIcon />}
        />
        <ListItem
          value={5}
          primaryText="Find a job"
          primaryTogglesNestedList
          leftIcon={<SearchIcon />}
          nestedItems={[
            <ListItem
              containerElement={<Link to='/jobSearch'/>}
              value='/jobSearch'
              primaryText="Job search"
              leftIcon={<ViewListIcon />}
            />,
            <ListItem
              value={7}
              primaryText="Bookmarks"
              leftIcon={<BookmarkIcon />}
            />,
            <ListItem
              value={8}
              primaryText="Applied to"
              leftIcon={<CheckCircleIcon />}
            />,
          ]}
        />
        <ListItem
          disabled
          value={9}
          primaryText="Writer profile"
          leftIcon={<FontIcon className='material-icons'>account_circle</FontIcon>}
        />
      </SelectableList>
    </Drawer>
  )
}

export default withRouter(Sidebar)
