import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

MediaQueryLarge.propTypes = {
  children: PropTypes.node.isRequired
}

export default function MediaQueryLarge (props) {
  return (
    <MediaQuery minWidth='75em'>
      {props.children}
    </MediaQuery>
  )
}
