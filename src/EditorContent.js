import React from 'react';
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import EditorPage from './EditorPage'

EditorContent.propTypes = {
  match: PropTypes.object.isRequired
}

EditorContent.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
}

export default function EditorContent (props, context) {
  const { match } = props
  const { appBar } = context.muiTheme
  const topPadding = appBar.height
  const style = {
    padding: `${topPadding}px 0px 0px 0px`
  }
  console.log('match url', match)
  return (
    <div style={style}>
      <Switch>
        <Route path={match.url} component={EditorPage}/>
      </Switch>
    </div>
  )
}
