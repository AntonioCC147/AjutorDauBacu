import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../../assets/logo/Logo.png';

import './Navbar.css';

export default function NavbarComponent() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth < 1200) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const currentPath = window.location.pathname;

    const isCurrentPage = (path) => {
        return currentPath === path ? "navbarTextColored" : "navbarText";
    }

    const isCurrentPage2 = (path) => {
        return currentPath === path ? true : false;
    }

    return (
        <div className={`roboto navbarContainer ${scrolling ? 'scrolled' : ''}`}>
            <Navbar fixed="top" collapseOnSelect expand="xxl" className={`navbar ${scrolling ? 'scrolled' : ''}`}>
                <Container>
                    <a href="/" style={{marginTop: "5px"}}>
                        <img src={Logo} className="logoImage" alt="Logo"/>
                        <span className="logoTitle">Ajutor! Dau Bacu'</span>
                    </a>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={`me-auto navbarCenter ${scrolling ? 'scrolled' : ''}`}>
                            <Nav.Link href="/" className={`${scrolling ? 'scrolled' : ''} ${isCurrentPage2('/') ? 'navbarTextColored' : 'navbarText'}`}>Acasă</Nav.Link>
                            <Nav.Link href="/despre" className={isCurrentPage('/despre')}>Despre noi</Nav.Link>
                            <Nav.Link href="/editii" className={isCurrentPage('/editii')}>Ediții</Nav.Link>
                            <Nav.Link href="/#simulari" className={isCurrentPage('/#simulari')}>Simulări & Prețuri</Nav.Link>
                            <Nav.Link href="/#faq" className={isCurrentPage('/#faq')}>FAQ</Nav.Link>
                            <Nav.Link href="/regulament" className={isCurrentPage('/regulament')}>Regulament</Nav.Link>
                            <Nav.Link href="/contact" className={isCurrentPage('/contact')}>Contact</Nav.Link>
                            <Nav.Link href="/inscrie-te" style={{marginLeft: "15px"}}>
                                <Button variant="primary" className="cardsButton" style={{width: "150px"}}>Înscrie-te</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}