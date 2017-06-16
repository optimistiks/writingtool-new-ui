import React from 'react';
import PropTypes from 'prop-types'
import Popover from 'material-ui/Popover';

export default class GenericPopover extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    buttonElement: PropTypes.element.isRequired,
    anchorOrigin: PropTypes.object,
    targetOrigin: PropTypes.object
  }

  static defaultProps = {
    anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
    targetOrigin: { horizontal: 'left', vertical: 'top' }
  }

  constructor (props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render () {
    const { buttonElement, children, anchorOrigin, targetOrigin } = this.props
    return (
      <div>
        {React.cloneElement(buttonElement, {
          onTouchTap: this.handleTouchTap
        })}
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          onRequestClose={this.handleRequestClose}
        >
          {children}
        </Popover>
      </div>
    );
  }
}
