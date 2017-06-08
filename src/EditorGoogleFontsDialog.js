import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem } from 'material-ui/List'
import FontIcon from 'material-ui/FontIcon'
import FlatButton from 'material-ui/FlatButton'
import GenericDialog from './GenericDialog'

EditorGoogleFontsDialog.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default function EditorGoogleFontsDialog (props) {
  const { isVisible, onClose } = props
  return (
    <GenericDialog
      isScrollable
      title='Google fonts'
      actions={
        <FlatButton label='Close' />
      }
      isVisible={isVisible}
      onClose={onClose}
    >
      <div>
        <List>
          <ListItem
            style={{ fontFamily: 'Times New Roman' }}
            primaryText='Times New Roman'
            secondaryText='The quick brown fox jumps over the lazy dog'
            rightIcon={<FontIcon className='material-icons'>favorite_border</FontIcon>}
          />
          <ListItem
            style={{ fontFamily: 'Courier New' }}
            primaryText='Courier New'
            secondaryText='The quick brown fox jumps over the lazy dog'
            rightIcon={<FontIcon className='material-icons'>favorite_border</FontIcon>}
          />
          <ListItem
            style={{ fontFamily: 'Monospace' }}
            primaryText='Monospace'
            secondaryText='The quick brown fox jumps over the lazy dog'
            rightIcon={<FontIcon className='material-icons'>favorite_border</FontIcon>}
          />
          <ListItem
            style={{ fontFamily: 'Ubuntu' }}
            primaryText='Ubuntu'
            secondaryText='The quick brown fox jumps over the lazy dog'
            rightIcon={<FontIcon className='material-icons'>favorite_border</FontIcon>}
          />
          <ListItem
            style={{ fontFamily: 'Times New Roman' }}
            primaryText='Times New Roman'
            secondaryText='The quick brown fox jumps over the lazy dog'
            rightIcon={<FontIcon className='material-icons'>favorite_border</FontIcon>}
          />
          <ListItem
            style={{ fontFamily: 'Courier New' }}
            primaryText='Courier New'
            secondaryText='The quick brown fox jumps over the lazy dog'
            rightIcon={<FontIcon className='material-icons'>favorite_border</FontIcon>}
          />
          <ListItem
            style={{ fontFamily: 'Monospace' }}
            primaryText='Monospace'
            secondaryText='The quick brown fox jumps over the lazy dog'
            rightIcon={<FontIcon className='material-icons'>favorite_border</FontIcon>}
          />
          <ListItem
            style={{ fontFamily: 'Ubuntu' }}
            primaryText='Ubuntu'
            secondaryText='The quick brown fox jumps over the lazy dog'
            rightIcon={<FontIcon className='material-icons'>favorite_border</FontIcon>}
          />
        </List>
        <FlatButton fullWidth label='Load more' />
      </div>
    </GenericDialog>
  )
}
