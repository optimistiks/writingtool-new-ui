import React from 'react';
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
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

const SelectableList = makeSelectable(List)

Sidebar.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  isDocked: PropTypes.bool.isRequired
}

Sidebar.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function Sidebar (props, context) {
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
