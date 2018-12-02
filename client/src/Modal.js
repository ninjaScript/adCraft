import React from 'react';
import './style/App.css';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    // Render blank if its false
    if(!this.props.show) {
      return null;
    }

    // style in the background

    // The modal "window"
    

    return (
      <div className="backdrop">
        <div className="modal">
          {this.props.children}

          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
