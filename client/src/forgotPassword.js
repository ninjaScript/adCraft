import React from 'react';
import './style/App.css';
import PropTypes from 'prop-types';


class ForgotPassword extends React.Component {
  render() {

    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop2">
        <div className="forgotPass">
          {this.props.children}
          <div className="footer2">
            <button onClick={this.props.onClose}>
              X
            </button>
          </div>
        <div className="forgotPass">
        </div>
        </div>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default ForgotPassword;