import React from 'react';
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton'
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Badge from 'material-ui/Badge';
import Subheader from 'material-ui/Subheader';
import { darkBlack } from 'material-ui/styles/colors';
import GenericPopover from './GenericPopover';

NotificationsPopover.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default function NotificationsPopover (props, context) {
  const { spacing, appBar } = context.muiTheme
  return (
    <GenericPopover
      buttonElement={
        <Badge
          badgeContent={10}
          secondary={true}
          style={{ padding: 0, paddingRight: spacing.desktopGutterMini * 2 }}
          badgeStyle={{ right: spacing.desktopGutterMini }}
        >
          <IconButton iconClassName='material-icons'
                      iconStyle={{ color: appBar.textColor }}>notifications</IconButton>
        </Badge>
      }
      anchorOrigin={{ "horizontal": "right", "vertical": "bottom" }}
      targetOrigin={{ "horizontal": "right", "vertical": "top" }}
    >
      <div style={{ width: '100vw', maxWidth: '350px' }}>
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
          <List style={{ padding: 0 }}>
            <Subheader>Unread notifications</Subheader>
            <ListItem
              primaryText="Brunch this weekend?"
              secondaryText={
                <p>
                  <span style={{ color: darkBlack }}>Brendan Lim</span> --
                  I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider />
            <ListItem
              primaryText='Summer BBQ'
              secondaryText={
                <p>
                  <span style={{ color: darkBlack }}>to me, Scott, Jennifer</span> --
                  Wish I could come, but I&apos;m out of town this weekend.
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider />
            <ListItem
              primaryText="Oui oui"
              secondaryText={
                <p>
                  <span style={{ color: darkBlack }}>Grace Ng</span> --
                  Do you have Paris recommendations? Have you ever been?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider />
            <ListItem
              primaryText="Birdthday gift"
              secondaryText={
                <p>
                  <span style={{ color: darkBlack }}>Kerem Suer</span> --
                  Do you have any ideas what we can get Heidi for her birthday? How about a pony?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider />
            <ListItem
              primaryText="Recipe to try"
              secondaryText={
                <p>
                  <span style={{ color: darkBlack }}>Raquel Parrado</span> --
                  We should eat this: grated squash. Corn and tomatillo tacos.
                </p>
              }
              secondaryTextLines={2}
            />
          </List>
        </div>
        <FlatButton label='Mark all read' fullWidth/>
      </div>
    </GenericPopover>
  )
}
