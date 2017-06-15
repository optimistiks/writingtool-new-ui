import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import { SMALL_END, MEDIUM_START, MEDIUM_END, LARGE_START } from './mediaQueryBreakpoints'
import NavBar from './NavBar'
import NavBarControlsSmall from './NavBarControlsSmall'
import NavBarControlsLarge from './NavBarControlsLarge'
import Sidebar from './Sidebar'
import AppRoutes from './AppRoutes'

AppLayout.propTypes = {
  isSidebarOpened: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

AppLayout.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function AppLayout (props, context) {
  const { isSidebarOpened, toggleSidebar } = props
  const { muiTheme } = context
  return (
    <div>
      <MediaQuery maxWidth={SMALL_END}>
        <NavBar toggleSidebar={toggleSidebar} controlsElement={<NavBarControlsSmall />} />
        <Sidebar isOpened={isSidebarOpened} isDocked={false} />
        <div style={getContentStyle(muiTheme)}>
          <AppRoutes />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={MEDIUM_START} maxWidth={MEDIUM_END}>
        <NavBar toggleSidebar={toggleSidebar} controlsElement={<NavBarControlsLarge />} />
        <Sidebar isOpened={isSidebarOpened} isDocked={false} />
        <div style={getContentStyle(muiTheme)}>
          <AppRoutes />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={LARGE_START}>
        <NavBar controlsElement={<NavBarControlsLarge />} />
        <Sidebar isOpened={true} isDocked />
        <div style={getContentStyleLarge(muiTheme)}>
          <AppRoutes />
        </div>
      </MediaQuery>
    </div>
  )
}

function getContentStyleLarge (muiTheme) {
  const { appBar, drawer, spacing } = muiTheme
  const topPadding = appBar.height
  const leftPadding = drawer.width + spacing.desktopGutter
  const rightPadding = spacing.desktopGutter
  return {
    padding: `${topPadding}px ${rightPadding}px 0px ${leftPadding}px`
  }
}

function getContentStyle (muiTheme) {
  const { appBar, spacing } = muiTheme
  const topPadding = appBar.height
  const leftPadding = spacing.desktopGutter
  const rightPadding = spacing.desktopGutter
  return {
    padding: `${topPadding}px ${rightPadding}px 0px ${leftPadding}px`
  }
}
