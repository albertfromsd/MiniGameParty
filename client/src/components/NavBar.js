import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';

import CustomizedButton from './CustomizedButton';

import navBarStyles from './GlobalComponents.module.css';

//[ BOOTSTRAP ]
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


const NavBar = ({ socket, roomName, userName, admin }) => {

    useEffect( () => {
        if( userName === null || 
            userName.length < 1 || 
            userName === undefined || 
            roomName === null || 
            roomName.length < 1 || 
            roomName === undefined ) {
            navigate('/');
        };

    }, [socket, userName, roomName]);

    const navLink = (e, gameName) => {
        console.log(gameName);
        navigate('/'+roomName+"/"+gameName);
    };
    
    return (
        <>
            <Navbar bg="secondary" variant="dark">
            <Navbar.Brand href={`/${roomName}`}>MiniGame Party</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={navLink}>Math Head</NavDropdown.Item>
                    <NavDropdown.Item href={`/${roomName}/typefaster`}>Type faster</NavDropdown.Item>
                    <NavDropdown.Item href={`/${roomName}/`}>Wise To Memorise</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <div>
                    <p className={navBarStyles.textWhite}>Logged in as: <i> { userName } </i></p>
                        <br />
                    <p className={navBarStyles.textWhite}>Admin:  { admin } </p>
                        <br />
                </div>
                <CustomizedButton className={navBarStyles.flexColCen}
                    roomName={roomName}/>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
};

function mapStateToProps(state) {
    return {
        userName: state.userName,
        admin: state.admin,
    };
};

export default connect(mapStateToProps)(NavBar);