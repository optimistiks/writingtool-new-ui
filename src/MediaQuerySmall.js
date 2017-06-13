import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

MediaQuerySmall.propTypes = {
  children: PropTypes.node.isRequired
}

export default function MediaQuerySmall (props) {
  return (
    <MediaQuery maxWidth={767}>
      {props.children}
    </MediaQuery>
  )
}
