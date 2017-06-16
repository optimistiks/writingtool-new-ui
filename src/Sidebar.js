import React from 'react';
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import MaterialIcon from './MaterialIcon'

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
          leftIcon={<MaterialIcon glyph='home' />}
        />
        <ListItem
          containerElement={<Link to='/documents'/>}
          value='/documents'
          primaryText="Documents"
          leftIcon={<MaterialIcon glyph='view_module' />}
        />
        <ListItem
          containerElement={<Link to='/tasks'/>}
          value='/tasks'
          primaryText="Tasks"
          leftIcon={<MaterialIcon glyph='list' />}
        />
        <ListItem
          containerElement={<Link to='/projects'/>}
          value='/projects'
          primaryText="Projects"
          leftIcon={<MaterialIcon glyph='view_stream' />}
        />
        <ListItem
          value={5}
          primaryText="Find a job"
          primaryTogglesNestedList
          leftIcon={<MaterialIcon glyph='search' />}
          nestedItems={[
            <ListItem
              containerElement={<Link to='/jobSearch'/>}
              value='/jobSearch'
              primaryText="Job search"
              leftIcon={<MaterialIcon glyph='view_list' />}
            />,
            <ListItem
              containerElement={<Link to='/jobSearch/bookmarks'/>}
              value='/jobSearch/bookmarks'
              primaryText="Bookmarks"
              leftIcon={<MaterialIcon glyph='bookmark' />}
            />,
            <ListItem
              containerElement={<Link to='/jobSearch/applied'/>}
              value='/jobSearch/applied'
              primaryText="Applied to"
              leftIcon={<MaterialIcon glyph='check_circle' />}
            />,
          ]}
        />
        <ListItem
          disabled
          value={9}
          primaryText="Writer profile"
          leftIcon={<MaterialIcon glyph='account_circle' />}
        />
      </SelectableList>
    </Drawer>
  )
}

export default withRouter(Sidebar)
