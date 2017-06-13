import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

MediaQueryMedium.propTypes = {
  children: PropTypes.node.isRequired
}

export default function MediaQueryMedium (props) {
  return (
    <MediaQuery minWidth={768} maxWidth={1199}>
      {props.children}
    </MediaQuery>
  )
}
