import React from 'react'
import PropTypes from 'prop-types'
import GenericInputDialog from './GenericInputDialog'

TaskCreateDialog.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default function TaskCreateDialog (props) {
  return (
    <GenericInputDialog
      title='New task'
      hintText='Enter task title'
      onClose={props.onClose}
      isVisible={props.isVisible}
    />
  )
}
