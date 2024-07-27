import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



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

    return (
        <div className={`roboto navbarContainer ${scrolling ? 'scrolled' : ''}`}>
            <Navbar fixed="top" collapseOnSelect expand="xl" className={`navbar ${scrolling ? 'scrolled' : ''}`}>
                <Container>
                    {/* logo */}Ajutor! Dau Bacu'
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={`me-auto navbarCenter ${scrolling ? 'scrolled' : ''}`}>
                            <Nav.Link href="/" className={`navbarText ${scrolling ? 'scrolled' : ''}`}>Acasă</Nav.Link>
                            <Nav.Link href="/despre" className="navbarText">Despre noi</Nav.Link>
                            <Nav.Link href="#services" className="navbarText">Simulări</Nav.Link>
                            <Nav.Link href="#pricing" className="navbarText">Prețuri</Nav.Link>
                            <Nav.Link href="#portofolio" className="navbarText">Regulament</Nav.Link>
                            <Nav.Link href="#contact" className="navbarText">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}