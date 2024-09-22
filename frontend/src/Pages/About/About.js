import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import AboutThreads from '../../assets/images/AboutThreads.png';
import Toni from '../../assets/images/Toni.jpg';
import Roberto from '../../assets/images/Roberto.jpg'

import './About.css';

export default function About() {
    return (
        <div className="aboutContainer roboto">
            <div className="backgroundAbout">
                <img src={AboutThreads} className="aboutThreads" alt="AboutThreads"/>
                <p className="aboutTitle">Echipa Noastră</p>
                <p className="aboutSubTitle"><i>Află cine se ascunde în spatele celor mai bune simulări</i></p>
            </div>
            <div className="container text-center">
                <Row className="justify-content-center align-items-center" style={{marginTop: "-300px", paddingLeft: "15%", paddingRight: "15%"}}>
                    <Col lg={6} md={12} className="d-flex justify-content-center mb-4">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={Toni}/>
                            <Card.Body>
                                <Card.Title className="staffTitle">Crantea Antonio-Cristian</Card.Title>
                                <Card.Text className="staffSubTitle">
                                    <p className="staffSubSubTitle">Profesor de Informatică & TIC la liceu</p>
                                    <p className="staffSubSubTitle">Student în anul III la Facultatea de Automatică și Calculatoare & în anul I la Facultatea de Matematică și Informatică</p>
                                    <p className="staffSubSubTitle">Asistent universitar (voluntar) în cadrul laboratoarelor de la facultate</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={12} className="d-flex justify-content-center mb-4">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={Roberto}/>
                            <Card.Body>
                                <Card.Title className="staffTitle">Loțan Roberto-Gabriel</Card.Title>
                                <Card.Text className="staffSubTitle">
                                    <p className="staffSubSubTitle">Student în anul II la Facultatea de Automatică și Calculatoare</p>
                                    <p className="staffSubSubTitle">A obținut nota 10 la Matematică în cadrul examenului de Bacalaureat</p>
                                    <p className="staffSubSubTitle">A obținut nota 10 la Informatică în cadrul examenului de Bacalaureat</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div style={{marginBottom: "50px"}}>
                    <p className="aboutTitle2">Despre noi</p>
                    <p className="aboutSubTitle2" style={{marginBottom: "50px"}}><i>Cunoaște cum a început proiectul Ajutor! Dau Bacu'</i></p>
                    <p className="aboutDescription">
                        <span class="indent">Ajutor!</span> Dau Bacu' este inițiativa unei echipe de studenți entuziaști, care își
                            propun să sprijine elevii în pregătirea pentru Examenul de Bacalaureat.
                    </p>
                    <p className="aboutDescription">
                        <span class="indent">Prin</span> intermediul proiectului nostru, oferim diverse resurse concepute pentru a
                            simplifica procesul de învățare, precum contul nostru de Instagram @AjutorDauBacu, unde publicăm gratuit
                            diverse exerciții rezolvate și oferim sfaturi care simplifică procesul de învățare, sau simulările online
                            de Bacalaureat, unde participanții își pot testa cunoștințele în condiții de examen și pot primi feedback
                            personalizat.
                    </p>
                    <p className="aboutDescription">
                        <span class="indent">Cu</span> experiența recentă în susținerea examenului, echipa noastră aduce o
                            perspectivă proaspătă și practică, ajutându-te să îți atingi potențialul maxim și să promovezi cu
                            succes examenul de Bacalaureat.
                    </p>
                </div>
            </div>
        </div>
    )
}