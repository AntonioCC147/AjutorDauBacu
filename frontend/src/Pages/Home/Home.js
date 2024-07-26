import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import HeroSection from '../../assets/images/HeroSection.png'

import './Home.css';

export default function Home() {
    return (
        <Container className="homeContainer roboto">
            <Row>
                <Col lg={6}>
                    <p className="homeTitle">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    <p className="homeSubTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus consequat varius nisi quis, posuere magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus consequat varius nisi quis, posuere magna.</p>
                    <Button variant="primary" className="homeButton">Începe acum</Button>
                </Col>
                <Col lg={6} className="d-flex align-items-center justify-content-center">
                    <img src={HeroSection} className="heroSectionImage" alt="HeroSection"/>
                </Col>
            </Row>
        </Container>
    )
}