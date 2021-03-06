import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import NavBar from './NavBar'
import NavBarControlsSmall from './NavBarControlsSmall'
import NavBarControlsLarge from './NavBarControlsLarge'
import Sidebar from './Sidebar'
import EditorPage from './EditorPage'
import { SMALL_END, MEDIUM_START } from './mediaQueryBreakpoints'

EditorLayout.propTypes = {
  isSidebarOpened: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

export default function EditorLayout (props) {
  const { isSidebarOpened, toggleSidebar } = props
  console.log('toggleSidebar', toggleSidebar)
  return (
    <div>
      <MediaQuery maxWidth={SMALL_END}>
        <NavBar toggleSidebar={toggleSidebar} controlsElement={<NavBarControlsSmall />} />
      </MediaQuery>
      <MediaQuery minWidth={MEDIUM_START}>
        <NavBar toggleSidebar={toggleSidebar} controlsElement={<NavBarControlsLarge />} />
      </MediaQuery>
      <Sidebar isOpened={isSidebarOpened} isDocked={false} />
      <EditorPage />
    </div>
  )
}

