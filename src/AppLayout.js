import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import NavBar from './NavBar'
import NavBarControlsSmall from './NavBarControlsSmall'
import NavBarControlsLarge from './NavBarControlsLarge'
import Sidebar from './Sidebar'
import AppContent from './AppContent'

AppLayout.propTypes = {
  isSidebarOpened: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

export default function AppLayout (props) {
  const { isSidebarOpened, toggleSidebar } = props
  return (
    <div>
      <MediaQuery maxWidth={767}>
        <NavBar toggleSidebar={toggleSidebar} ControlsComponent={NavBarControlsSmall} />
        <Sidebar isOpened={isSidebarOpened} isDocked={false} />
        <AppContent />
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={1199}>
        <NavBar toggleSidebar={toggleSidebar} ControlsComponent={NavBarControlsLarge} />
        <Sidebar isOpened={isSidebarOpened} isDocked={false} />
        <AppContent />
      </MediaQuery>
      <MediaQuery minWidth={1200}>
        <NavBar ControlsComponent={NavBarControlsLarge} />
        <Sidebar isOpened={true} isDocked />
        <AppContent moveForSidebar={true} />
      </MediaQuery>
    </div>
  )
}

