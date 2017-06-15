import React from 'react'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'

GenericDialog.propTypes = {
  isScrollable: PropTypes.bool,
  isModal: PropTypes.bool,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  actions: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  children: PropTypes.element.isRequired
}

GenericDialog.defaultProps = {
  isModal: false,
  isScrollable: false
}

export default function GenericDialog (props) {
  const { isVisible, title, actions, children, onClose, isModal, isScrollable, ...restProps } = props
  return (
    <Dialog
      {...restProps}
      title={title}
      actions={actions}
      modal={isModal}
      open={isVisible}
      onRequestClose={onClose}
      autoScrollBodyContent={isScrollable}
    >
      {children}
    </Dialog>
  )
}
