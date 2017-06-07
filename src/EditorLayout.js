import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import NavBar from './NavBar'
import NavBarControlsSmall from './NavBarControlsSmall'
import NavBarControlsLarge from './NavBarControlsLarge'
import Sidebar from './Sidebar'
import EditorContent from './EditorContent'

EditorLayout.propTypes = {
  isSidebarOpened: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
}

export default function EditorLayout (props) {
  const { isSidebarOpened, toggleSidebar, match } = props
  console.log('toggleSidebar', toggleSidebar)
  return (
    <div>
      <MediaQuery maxWidth={767}>
        <NavBar toggleSidebar={toggleSidebar} ControlsComponent={NavBarControlsSmall} />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <NavBar toggleSidebar={toggleSidebar} ControlsComponent={NavBarControlsLarge} />
      </MediaQuery>
      <Sidebar isOpened={isSidebarOpened} isDocked={false} />
      <EditorContent match={match} />
    </div>
  )
}

