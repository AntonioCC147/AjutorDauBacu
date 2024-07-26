import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import AboutThreads from '../../assets/images/AboutThreads.png';
import Toni from '../../assets/images/Toni.jpg';
import Roberto from '../../assets/images/Roberto.jpg'

import './About.css';

export default function About() {
    return (
        <div className="roboto">
            <div className="backgroundAbout">
                <img src={AboutThreads} className="aboutThreads" alt="AboutThreads"/>
                <p className="aboutTitle">Echipa Noastră</p>
                <p className="aboutSubTitle">Află cine se ascunde în spatele celor mai bune simulări</p>
            </div>
            <div className="container text-center">
            <Row className="justify-content-center align-items-center" style={{marginTop: "-300px", paddingLeft: "15%", paddingRight: "15%"}}>
                <Col lg={6} md={12} className="d-flex justify-content-center mb-4">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={Toni} />
                        <Card.Body>
                            <Card.Title className="staffTitle">Crantea Antonio-Cristian</Card.Title>
                            <Card.Text className="staffSubTitle">
                                Student în anul III la Facultatea de Automatică și Calculatoare
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} md={12} className="d-flex justify-content-center mb-4">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={Roberto} />
                        <Card.Body>
                            <Card.Title className="staffTitle">Loțan Roberto-Gabriel</Card.Title>
                            <Card.Text className="staffSubTitle">
                                Student în anul II la Facultatea de Automatică și Calculatoare
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>

            <div>
                <p className="aboutTitle2">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                <p className="aboutSubTitle2">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
            </div>
        </div>
    )
}