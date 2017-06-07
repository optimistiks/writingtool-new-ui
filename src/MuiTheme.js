import React from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  zIndex: {
    appBar: 1300,
    drawer: 1200,
    drawerOverlay: 1100
  },
  editorToolbar: {
    height: 100
  }
});

MuiTheme.propTypes = {
  children: PropTypes.node.isRequired
}

export default function MuiTheme (props) {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      {props.children}
    </MuiThemeProvider>
  )
}
