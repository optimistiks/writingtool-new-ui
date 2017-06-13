import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

MediaQuerySmall.propTypes = {
  children: PropTypes.node.isRequired
}

export default function MediaQuerySmall (props) {
  return (
    <MediaQuery minWidth='48' maxWidth='62em'>
      {props.children}
    </MediaQuery>
  )
}
