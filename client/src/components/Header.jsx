import React from 'react';
import {Grid} from '@material-ui/core';
import Modal  from '../Modal';
import './style/App.css';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Grid>
                <nav className="menu">
                    <h1 className="menu__logo">adCraft</h1>
                    <div className="menu__right">
                        <ul className="menu__list">
                            <li className="menu__list-item"><a className="menu__link" href="#"><i className="fa fa-facebook fa-lg"></i></a></li>
                            <li className="menu__list-item"><a className="menu__link" href="#"><i className="fa fa-instagram fa-lg"></i></a></li>
                            <li className="menu__list-item"><a className="menu__link" href="#"><i className="fa fa-twitter fa-lg"></i></a></li>

                            <li className="menu__list-item"><a className="menu__link" href="#">Login</a></li>
                            <li className="menu__list-item"><a className="menu__link" href="#" onClick={this.toggleModal}>SIGN UP</a></li>
                            <Modal show={this.state.isOpen} onClose={this.toggleModal}></Modal>
                        </ul>
                    </div>
                </nav>
            </Grid>
        )
    }
}