import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import GenericDialog from './GenericDialog'

JobFlagDialog.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default function JobFlagDialog (props) {
  const { isVisible, onClose } = props
  return (
    <GenericDialog
      title='Flag the job'
      actions={[
        <FlatButton label='Close'/>,
        <FlatButton label='Send' primary/>
      ]}
      isVisible={isVisible}
      onClose={onClose}
    >
      <div>
        <div className='row row_no-spacing'>
          <div className='col-xs-12'>
            <TextField
              floatingLabelText="Describe what's wrong (optional)"
              multiLine={true}
              rows={2}
              fullWidth
            />
          </div>
        </div>
      </div>
    </GenericDialog>
  )
}
