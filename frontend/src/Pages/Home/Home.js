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
                    <p className="homeSubTitle">Ești elev în clasa a XII-a și te pregătești pentru examenul de Bacalaureat? Ești
                        pe drumul cel bun, însă cum ar fi să știi exact unde te situezi și ce mai ai de îmbunătățit? Ajutor! Dau
                        Bacu' îți oferă oportunitatea perfectă de a-ți testa cunoștințele chiar din confortul casei tale, prin
                        simulări online corectate manual, precum și prin feedback personalizat.
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
                    <p className="homeSubTitle" style={{textAlign: "justify"}}>Simulările online de Bacalaureat pe care le
                        organizăm sunt concepute pentru a te sprijini eficient în abordarea examenului, oferindu-ți o imagine
                        clară a nivelului tău actual și indicii despre aspectele care necesită îmbunătățire. Subiectele noastre
                        reproduc fidel modelul oficial, asigurând o experiență autentică de examen. În plus, atmosfera creată în
                        timpul simulărilor imită condițiile reale ale examenului, iar lucrările tale sunt corectate manual de o
                        comisie formată din doi corectori, pentru a oferi o evaluare corectă și feedback detaliat.
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
                <p className="homeTitle" style={{ textAlign: "center" }}>Cum arată o simulare?</p>
                <p className="homeSubTitle" style={{ textAlign: "center" }}><i>Simularea explicată în pași</i></p>
                <Col lg={4} className="d-flex align-items-center justify-content-center flex-column flex-lg-row">
                    <div className="text-center text-lg-right">
                        <img src={RightArrow} className="rightArrow" alt="RightArrow" />
                        <p className="stepsTitle"><b>Pasul 1:</b><br />Susții<br />Simularea</p>
                    </div>
                    <Card className="homeCards text-center" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Subiect1} />
                        <Card.Body>
                            <Card.Title style={{color: "#293651"}}><b>Subiect</b></Card.Title>
                            <Card.Text style={{color: "#293651"}}>Subiectele noastre respectă cu exactitate programa școlară oficială.</Card.Text>
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
                        <p className="stepsTitle"><b>Pasul 2:</b><br />Primești<br />Baremul</p>
                    </div>
                    <Card className="homeCards text-center" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Barem1} />
                        <Card.Body>
                            <Card.Title style={{color: "#293651"}}><b>Barem</b></Card.Title>
                            <Card.Text style={{color: "#293651"}}>Baremul nu conține doar răspunsurile, ci și rezolvările complete.</Card.Text>
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
                        <p className="stepsTitle"><b>Pasul 3:</b><br />Primești<br />Feedback</p>
                    </div>
                    <Card className="homeCards text-center" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Feedback} />
                        <Card.Body>
                            <Card.Title style={{color: "#293651"}}><b>Feedback</b></Card.Title>
                            <Card.Text style={{color: "#293651"}}>Subiectul tău va fi corectat manual de o comisie formată din doi corectori.</Card.Text>
                            <a href="/inscrie-te">
                                <Button variant="primary" className="cardsButton">Participă</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="homeContainerPricing text-center" id="simulari">
                <p className="title2Pricing" style={{ textAlign: "center" }}>Simulări & Prețuri</p>
                <p className="homeSubTitle" style={{ textAlign: "center" }}><i>Descoperă simulările noastre</i></p>
                <div className="containerBoxPricing pricingContainerWrapperVisible">
                    <Col lg={4} className="cardBoxPricing" style={{marginTop: "50px", marginBottom: "25px", opacity: "0.5"}}>
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
                            <span className="cardTextBenefits">profil uman / real</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">barem inclus</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">corectare manuală</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">feedback personalizat</span>
                        </div>
                        <div className="text-center">
                            <Button disabled className="buttonPricing" href="/inscrie-te">Înscrie-te!</Button>
                        </div>
                    </Col>
                    <Col lg={4} className="cardBoxPricing" style={{marginTop: "25px", marginBottom: "50px"}}>
                        <p className="cardTitle">Simulare Informatică</p>
                        <p className="cardPrice">35 RON</p>
                        <p className="cardDescription">Subiectul conține toată materia pentru clasele IX-XI</p>
                        <hr/>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">subiect complet</span>
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
                            <span className="cardTextBenefits">corectare manuală</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">feedback personalizat</span>
                        </div>
                        <div className="text-center">
                            <Button className="buttonPricing" href="/inscrie-te">Înscrie-te!</Button>
                        </div>
                    </Col>
                    <Col lg={4} className="cardBoxPricing" style={{marginTop: "0%", opacity: "0.5"}}>
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
                            <span className="cardTextBenefits">profil real</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">barem inclus</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">corectare manuală</span>
                        </div>
                        <div style={{paddingBottom: "15px"}}>
                            <img src={Verify} className="imageVerify" alt="Verify"/>
                            <span className="cardTextBenefits">feedback personalizat</span>
                        </div>
                        <div className="text-center">
                            <Button disabled className="buttonPricing" href="/inscrie-te">Înscrie-te!</Button>
                        </div>
                    </Col>
                </div>
                <div className="text-center">
                    <a href="/regulament">
                        <Button variant="primary" className="cardsButton" style={{width: "225px", height: "50px", marginBottom: "50px"}}>Citește Regulamentul</Button>
                    </a>
                </div>
            </Row>
            <Row className="homeContainerFAQ" id="faq" style={{marginBottom: "50px"}}>
                <p className="title2Pricing" style={{ textAlign: "center" }}>FAQ</p>
                <p className="homeSubTitle" style={{ textAlign: "center" }}><i> Iată câteva răspunsuri la cele mai frecvent adresate întrebări</i></p>
                <Accordion defaultActiveKey="1" className="accordionContainer">
                    <Accordion.Item eventKey="1" className="accordionCard">
                        <Accordion.Header className="accordionTitle">Cine concepe și corectează simulările?</Accordion.Header>
                        <Accordion.Body>
                            Simulările sunt concepute și corectate de către studenți de la facultăți din domeniu, cu experiență în
                            activități educaționale precum voluntariate în cadrul laboratoarelor de la facultate, meditații,
                            simulări etc.
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
                            Simularea se va desfășura în format online pe Google Meet. Găsiți în regulament mai multe informații
                            despre organizarea simulării.
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
                            Notele primite nu se pot contesta.
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