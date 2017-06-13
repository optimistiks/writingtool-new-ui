import React from 'react'
import PropTypes from 'prop-types'
import NavBar from './NavBar'
import NavBarControlsSmall from './NavBarControlsSmall'
import NavBarControlsLarge from './NavBarControlsLarge'
import Sidebar from './Sidebar'
import AppRoutes from './AppRoutes'
import MediaQuerySmall from './MediaQuerySmall'
import MediaQueryMedium from './MediaQueryMedium'
import MediaQueryLarge from './MediaQueryLarge'

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
      <MediaQuerySmall>
        <NavBar toggleSidebar={toggleSidebar} controlsElement={<NavBarControlsSmall />} />
        <Sidebar isOpened={isSidebarOpened} isDocked={false} />
        <div style={getContentStyle(muiTheme)}>
          <AppRoutes />
        </div>
      </MediaQuerySmall>
      <MediaQueryMedium>
        <NavBar toggleSidebar={toggleSidebar} controlsElement={<NavBarControlsLarge />} />
        <Sidebar isOpened={isSidebarOpened} isDocked={false} />
        <div style={getContentStyle(muiTheme)}>
          <AppRoutes />
        </div>
      </MediaQueryMedium>
      <MediaQueryLarge>
        <NavBar controlsElement={<NavBarControlsLarge />} />
        <Sidebar isOpened={true} isDocked />
        <div style={getContentStyleLarge(muiTheme)}>
          <AppRoutes />
        </div>
      </MediaQueryLarge>
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
