import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import NavBar from './NavBar'
import NavBarControlsSmall from './NavBarControlsSmall'
import NavBarControlsLarge from './NavBarControlsLarge'
import Sidebar from './Sidebar'
import WriterProfilePage from './WriterProfilePage'
import { SMALL_END, MEDIUM_START } from './mediaQueryBreakpoints'

WriterProfileLayout.propTypes = {
  isSidebarOpened: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

WriterProfileLayout.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function WriterProfileLayout (props, context) {
  const { isSidebarOpened, toggleSidebar } = props
  const { appBar } = context.muiTheme
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
      <div style={{ marginTop: appBar.height }}>
        <WriterProfilePage />
      </div>
    </div>
  )
}

