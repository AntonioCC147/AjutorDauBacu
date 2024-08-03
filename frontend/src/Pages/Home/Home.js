import { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

import HeroSection from '../../assets/images/HeroSection.png';
import WhyUs from '../../assets/images/WhyUs.jpg';
import BlueButton from '../../assets/icons/Button.png';
import Subiect1 from '../../assets/images/Subiect1.jpg';
import Subiect2 from '../../assets/images/Subiect2.jpg';
import Barem1 from '../../assets/images/Barem1.jpg';
import Barem2 from '../../assets/images/Barem2.jpg';
import Barem3 from '../../assets/images/Barem3.jpg';
import Feedback from '../../assets/images/Feedback.jpg';
import RightArrow from "../../assets/icons/RightArrow.png";
import Verify from '../../assets/icons/Verify.png';

import './Home.css';

export default function Home() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <div className="homeContainer roboto">
            <Row className="homeContainerHeroSection d-flex align-items-center justify-content-center">
                <Col lg={6}>
                    <p className="homeTitle">Ajutor! Dau Bacu'<br/>sare astăzi în ajutorul tău!</p>
                    <p className="homeSubTitle" >Dacă ești elev în clasa a XII-a și dorești să-ți testezi cunoștințele, dacă vrei
                        să vezi cât de bine ești pregătit sau să-ți provoci unul dintre prieteni în lupta pentru o notă cât mai
                        mare, atunci ai ajuns unde trebuie! Echipa noastră te poate ajuta pe această cale, tu trebuind doar să
                        participi la simulările organizate de către noi, concepute special pentru tine!
                    </p>
                    <div className="homeButtonContainer">
                        <a href="/inscrie-te">
                            <Button variant="primary" className="homeButton">Începe acum</Button>
                        </a>
                    </div>
                </Col>
                <Col lg={6} className="d-flex align-items-center justify-content-center">
                    <img src={HeroSection} className="heroSectionImage" alt="HeroSection"/>
                </Col>
            </Row>
            <Row className="homeContainerWhyUs d-flex align-items-center justify-content-center">
                <Col lg={6} className="text-center">
                    <img src={WhyUs} className="whyUsImage" alt="WhyUsSection"/>
                </Col>
                <Col lg={6}>
                    <p className="homeTitle2">De ce să ne alegi pe noi?</p>
                    <p className="homeTitle" style={{marginTop: "50px"}}>Alege calea simplă de a-ți testa cunoștințele!</p>
                    <p className="homeSubTitle" style={{textAlign: "justify"}}>La început poate să-ți pară greu, însă de la a
                        gândi până la a pune în practică este doar un singur pas. Simulările organizate de către noi sunt special
                        concepute pentru a te ajuta în pregătirea examenului de bacalaureat și a-ți oferi o idee generală asupra
                        nivelului la care te afli și la ce ar mai trebui să îmbunătățești.
                    </p>
                    <div className="hrefContainer">
                        <a href="/#simulari" className="d-flex align-items-center">
                            <img src={BlueButton} className="blueButton" alt="Button"/>
                            <p className="mb-0 ml-2 buttonTitle">ÎNCEARCĂ SIMULĂRILE NOASTRE</p>
                        </a>
                    </div>
                </Col>
            </Row>
            <Row className="homeContainerBenefits d-flex align-items-center justify-content-center" >
                <p className="homeTitle" style={{ textAlign: "center" }}>Iată ce îți putem oferim</p>
                <p className="homeSubTitle" style={{ textAlign: "center" }}><i>După cum am spus, de la a gândi până la a pune în practică este doar un singur pas</i></p>
                <Col lg={4} className="d-flex align-items-center justify-content-center flex-column flex-lg-row">
                    <div className="text-center text-lg-right">
                        <img src={RightArrow} className="rightArrow" alt="RightArrow" />
                        <p className="stepsTitle"><b>Pasul 1:</b><br />Susține<br />Simularea</p>
                    </div>
                    <Card className="homeCards text-center" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Subiect1} />
                        <Card.Body>
                            <Card.Title style={{color: "#293651"}}><b>Subiect</b></Card.Title>
                            <Card.Text style={{color: "#293651"}}>Subiectele noastre respectă programa oficială și sunt concepute să arate exact ca un subiect realizat de minister.</Card.Text>
                            <Button variant="primary" className="cardsButton" onClick={handleShow1}>Arată Subiectul</Button>
                        </Card.Body>
                    </Card>
                    <Modal show={show1} onHide={handleClose1}>
                        <Modal.Header closeButton>
                            <Modal.Title>Model Subiect Informatică</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Carousel className="text-center">
                                <Carousel.Item><img src={Subiect1} className="carouselImages" alt="CarouselImage"/></Carousel.Item>
                                <Carousel.Item><img src={Subiect2} className="carouselImages" alt="CarouselImage"/></Carousel.Item>
                            </Carousel>
                        </Modal.Body>
                        <Modal.Footer className="d-flex justify-content-center">
                            <Button variant="primary" className="cardsButton" onClick={handleClose1}>Închide</Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
                <Col lg={4} className="d-flex align-items-center justify-content-center flex-column flex-lg-row">
                    <div className="text-center text-lg-right">
                        <img src={RightArrow} className="rightArrow" alt="RightArrow" />
                        <p className="stepsTitle"><b>Pasul 2:</b><br />Primește<br />Baremul</p>
                    </div>
                    <Card className="homeCards text-center" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Barem1} />
                        <Card.Body>
                            <Card.Title style={{color: "#293651"}}><b>Barem</b></Card.Title>
                            <Card.Text style={{color: "#293651"}}>Baremul conceput de către noi conține și rezolvările complete pentru a-ți fi mai ușor să te autoevaluezi.</Card.Text>
                            <Button variant="primary" className="cardsButton" onClick={handleShow2}>Arată Baremul</Button>
                        </Card.Body>
                    </Card>
                    <Modal show={show2} onHide={handleClose2}>
                        <Modal.Header closeButton>
                            <Modal.Title>Model Barem Informatică</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Carousel className="text-center">
                                <Carousel.Item><img src={Barem1} className="carouselImages" alt="CarouselImage"/></Carousel.Item>
                                <Carousel.Item><img src={Barem2} className="carouselImages" alt="CarouselImage"/></Carousel.Item>
                                <Carousel.Item><img src={Barem3} className="carouselImages" alt="CarouselImage"/></Carousel.Item>
                            </Carousel>
                        </Modal.Body>
                        <Modal.Footer className="d-flex justify-content-center">
                            <Button variant="primary" className="cardsButton" onClick={handleClose2}>Închide</Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
                <Col lg={4} className="d-flex align-items-center justify-content-center flex-column flex-lg-row">
                    <div className="text-center text-lg-right">
                        <img src={RightArrow} className="rightArrow" alt="RightArrow" />
                        <p className="stepsTitle"><b>Pasul 3:</b><br />Primește<br />Feedback</p>
                    </div>
                    <Card className="homeCards text-center" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Feedback} />
                        <Card.Body>
                            <Card.Title style={{color: "#293651"}}>Feedback</Card.Title>
                            <Card.Text style={{color: "#293651"}}>Feedback-ul dat de către noi este unul personalizat și oferă pentru fiecare exercițiu greșit explicații și sfaturi de rezolvare.</Card.Text>
                            <a href="/inscrie-te">
                                <Button variant="primary" className="cardsButton">Participă</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="homeContainerPricing text-center" id="simulari">
                <p className="title2Pricing" style={{ textAlign: "center" }}>Simulări & Prețuri</p>
                <p className="homeSubTitle" style={{ textAlign: "center" }}><i>Cele mai bune și ieftine simulări așteaptă să fie rezolvate de către tine</i></p>
                <div className="containerBoxPricing pricingContainerWrapperVisible">
                    <div class="cardBoxPricing" style={{marginTop: "50px", marginBottom: "25px", opacity: "0.5"}}>
                        <p className="cardTitle">Simulare Română</p>
                        <p className="cardPrice">Coming Soon...</p>
                        <p className="cardDescription">Subiectul conține toată materia pentru clasa a XII-a</p>
                        <hr/>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">subiect complet</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">exerciții de antrenament</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">profil uman / real</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">barem inclus</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">feedback personalizat</span>
                        </div>
                        <div className="text-center">
                            <Button disabled className="buttonPricing" href="/">Înscrie-te</Button>
                        </div>
                    </div>
                    <div class="cardBoxPricing" style={{marginTop: "25px", marginBottom: "50px"}}>
                        <p className="cardTitle">Simulare Informatică</p>
                        <p className="cardPrice">35 LEI</p>
                        <p className="cardDescription">Subiectul conține toată materia pentru clasele IX-XI</p>
                        <hr/>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">subiect complet</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">exerciții de antrenament</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">specializarea matematică-informatică</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">barem inclus</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">feedback personalizat</span>
                        </div>
                        <div className="text-center">
                            <Button className="buttonPricing" href="/">Înscrie-te</Button>
                        </div>
                    </div>
                    <div className="cardBoxPricing" style={{marginTop: "0%", opacity: "0.5"}}>
                        <p className="cardTitle">Simulare Matematică</p>
                        <p className="cardPrice">Coming Soon...</p>
                        <p className="cardDescription">Subiectul conține toată materia din liceu</p>
                        <hr/>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">subiect complet</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">exerciții de antrenament</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">profil real</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">barem inclus</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">feedback personalizat</span>
                        </div>
                        <div className="text-center">
                            <Button disabled className="buttonPricing" href="/">Înscrie-te</Button>
                        </div>
                    </div>
                    <div className="text-center">
                        <Button variant="primary" className="cardsButton" style={{width: "225px", height: "50px", marginBottom: "50px"}}>Citește Regulamentul</Button>
                    </div>
                </div>
            </Row>
            <Row className="homeContainerFAQ" id="faq" style={{marginBottom: "50px"}}>
                <p className="title2Pricing" style={{ textAlign: "center" }}>Frequently Asked Question</p>
                <p className="homeSubTitle" style={{ textAlign: "center" }}><i>Iată câteva răspunsuri la cel mai adresate întrebări</i></p>
                <Accordion defaultActiveKey="1" className="accordionContainer">
                    <Accordion.Item eventKey="1" className="accordionCard">
                        <Accordion.Header className="accordionTitle">Cine concepe și corectează simulările?</Accordion.Header>
                        <Accordion.Body>
                            Simulările sunt concepute și corectate de către studenți specializați în domeniu, respectiv studenți
                            cu experiență în domenii educaționale, precum voluntariate în cadrul laboratoarelor de la facultate,
                            meditații sau alte lucruri specifice.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="accordionCard">
                        <Accordion.Header className="accordionTitle">Cat durează o simulare?</Accordion.Header>
                        <Accordion.Body>
                            O simulare durează exact cât un examen oficial de bacalaureat, respectiv 3 ore.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="accordionCard">
                        <Accordion.Header className="accordionTitle">Unde se va desfășura simularea?</Accordion.Header>
                        <Accordion.Body>
                            Simularea se va desfășura în format online. După înscriere veți primi un link de conectare și mai
                            multe informații despre modul exact de desfășurare a acesteia.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className="accordionCard">
                        <Accordion.Header className="accordionTitle">Cât durează să primesc răspunsul la simulare?</Accordion.Header>
                        <Accordion.Body>
                            Răspunsurile la simulări vor fi primite după aproximativ 5-7 zile de la susținerea acestora pentru ca
                            echipa ce le corectează să aibă suficient timp să se ocupe de acestea.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className="accordionCard">
                        <Accordion.Header className="accordionTitle">Pot contesta nota primită?</Accordion.Header>
                        <Accordion.Body>
                            Notele primite nu se pot contesta, însă dacă cineva consideră că totuși nota primită este greșită, ne
                            poate contacta la adresa de email atașată sau completând formularul din secțiunea de Contact.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6" className="accordionCard">
                        <Accordion.Header className="accordionTitle">Cred că am găsit o greșeală într-un subiect, ce pot face?</Accordion.Header>
                        <Accordion.Body>
                            Dacă consideri că ai găsit o greșeală într-un subiect, atunci ne poți scrie la adresa de email atașată
                            sau completând formularul din secțiunea de Contact.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7" className="accordionCard">
                        <Accordion.Header className="accordionTitle">Se vor desfășura pe viitor și simulări la alte materii?</Accordion.Header>
                        <Accordion.Body>
                            Cu siguranță da! Pregătim simulări la mai multe materii pe viitor. Fiți cu ochii pe rețelele noastre
                            de socializare pentru a fi primii care află când vom organiza o nouă simulare.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </div>
    )
}