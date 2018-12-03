import React from 'react';
import './style/App.css';
import PropTypes from 'prop-types';
import signUpPic from './style/signup.png';
import SignUp from './components/SignUp.jsx';


class Signup extends React.Component {
  render() {
    // Render blank if its false
    if(!this.props.show) {
      return null;
    }

    // sign up model render file, as the modern type of web design
    // declare node file as based on prototype node, anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.
    return (
      <div className="backdrop">
        <div className="signUp">
          {this.props.children}

          <div className="footer">
            <button onClick={this.props.onClose}>
              X
            </button>
          </div>
        <div class="forSignUp">
          <SignUp />
        </div>
        </div>
      </div>
    );
  }
}

// PropTypes was originally exposed as part of the React core module, and is commonly used with React components.
// this asasigned to declare prototypal type that you want to use in components
Signup.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Signup;
