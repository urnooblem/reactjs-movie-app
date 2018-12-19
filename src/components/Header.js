import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { HOME, SIGN_IN, USER_MOVIES } from '../constants/routes';
import { auth } from '../firebase/firebase';

const signOut = () => {
    auth.signOut();
}

const Header = () => {
    var authUser = auth.currentUser;
    return(
        authUser ? <HeaderAuth /> : <HeaderNonAuth />
    );
};

const HeaderAuth = ({ authUser }) => (
    <Row className="navbar">
        <div>
            <Col md={1}>
                <Link to={HOME}>Home</Link>
            </Col>
            <Col md={1}>
                <Link to={USER_MOVIES}>Your movies</Link>
            </Col>
            <Col md={8}></Col>
            <Col md={1}>
                <Button className="button" onClick={signOut}>Sign out</Button>
            </Col>
            <Col md={1}>
                <Link to="/"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Link>
            </Col>
        </div>
    </Row>
);

const HeaderNonAuth = () => (
    <Row className="navbar">
        <div>
            <Col md={1}>
                <Link to={HOME}>Home</Link>
            </Col>
            <Col md={8}></Col>
            <Col md={1}>
                <a href={SIGN_IN}><Button className="button">Sign in</Button></a>
            </Col>
            <Col md={1}>
                <Link to="/"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Link>
            </Col>
        </div>
    </Row>
);

export default Header;