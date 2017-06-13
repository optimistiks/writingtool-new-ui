import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

MediaQueryLarge.propTypes = {
  children: PropTypes.node.isRequired
}

export default function MediaQueryLarge (props) {
  return (
    <MediaQuery minWidth={1200}>
      {props.children}
    </MediaQuery>
  )
}
