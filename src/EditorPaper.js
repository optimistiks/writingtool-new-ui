import React from 'react';
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper';

EditorPaper.propTypes = {
  style: PropTypes.object
}

EditorPaper.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function EditorPaper (props, context) {
  const { spacing } = context.muiTheme
  const style = {
    minHeight: '297mm',
    padding: `${spacing.desktopGutter}px`,
    ...(props.style || {})
  }

  return (
    <Paper style={style}>
      test
    </Paper>
  )
}
