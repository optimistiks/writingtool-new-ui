import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

MediaQueryMedium.propTypes = {
  children: PropTypes.node.isRequired
}

export default function MediaQueryMedium (props) {
  return (
    <MediaQuery minWidth='62em' maxWidth='75em'>
      {props.children}
    </MediaQuery>
  )
}
