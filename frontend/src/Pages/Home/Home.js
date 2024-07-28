import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import HeroSection from '../../assets/images/HeroSection.png';
import Examen2 from '../../assets/images/Examen2.svg';
import BlueButton from '../../assets/icons/Button.png';
import Subiect from '../../assets/images/Subiect.jpg';
import Barem from '../../assets/images/Barem.jpg';
import Feedback from '../../assets/images/Feedback.jpg';
import RightArrow from "../../assets/icons/RightArrow.png";
import Verify from '../../assets/icons/Verify.png';

import './Home.css';

export default function Home() {
    return (
        <div className="homeContainer roboto">
            <Row className="homeContainerHeroSection d-flex align-items-center justify-content-center">
                <Col lg={6}>
                    <p className="homeTitle">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    <p className="homeSubTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus consequat varius nisi quis, posuere magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus consequat varius nisi quis, posuere magna.</p>
                    <div className="homeButtonContainer">
                        <Button variant="primary" className="homeButton">Începe acum</Button>
                    </div>
                </Col>
                <Col lg={6} className="d-flex align-items-center justify-content-center">
                    <img src={HeroSection} className="heroSectionImage" alt="HeroSection"/>
                </Col>
            </Row>
            <Row className="homeContainerWhyUs d-flex align-items-center justify-content-center">
                <Col lg={6} className="text-center">
                    <img src={Examen2} className="whyUsImage" alt="WhyUsSection"/>
                </Col>
                <Col lg={6}>
                    <p className="homeTitle2">De ce să ne alegi pe noi?</p>
                    <p className="homeTitle" style={{marginTop: "50px"}}>Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    <p className="homeSubTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus consequat varius nisi quis, posuere magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus consequat varius nisi quis, posuere magna.</p>
                    <div className="hrefContainer">
                        <a href="/#simulari" className="d-flex align-items-center">
                            <img src={BlueButton} className="blueButton" alt="Button"/>
                            <p className="mb-0 ml-2 buttonTitle">ÎNCEARCĂ SIMULĂRILE NOASTRĂ</p>
                        </a>
                    </div>
                </Col>
            </Row>
            <Row className="homeContainerBenefits d-flex align-items-center justify-content-center" >
                <p className="homeTitle" style={{ textAlign: "center" }}>Iată ce îți oferim</p>
                <p className="homeSubTitle" style={{ textAlign: "center" }}>Iată ce îți oferim</p>
                <Col lg={4} className="d-flex align-items-center justify-content-center flex-column flex-lg-row">
                    <div className="text-center text-lg-right">
                        <img src={RightArrow} className="rightArrow" alt="RightArrow" />
                        <p className="stepsTitle">Pasul 1:<br />Susține<br />Simularea</p>
                    </div>
                    <Card className="homeCards text-center" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Subiect} />
                        <Card.Body>
                            <Card.Title>Subiect</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" className="cardsButton">Arată Subiectul</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} className="d-flex align-items-center justify-content-center flex-column flex-lg-row">
                    <div className="text-center text-lg-right">
                        <img src={RightArrow} className="rightArrow" alt="RightArrow" />
                        <p className="stepsTitle">Pasul 2:<br />Primește<br />Baremul</p>
                    </div>
                    <Card className="homeCards text-center" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Barem} />
                        <Card.Body>
                            <Card.Title>Barem</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" className="cardsButton">Arată Baremul</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} className="d-flex align-items-center justify-content-center flex-column flex-lg-row">
                    <div className="text-center text-lg-right">
                        <img src={RightArrow} className="rightArrow" alt="RightArrow" />
                        <p className="stepsTitle">Pasul 3:<br />Primește<br />Feedback</p>
                    </div>
                    <Card className="homeCards text-center" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Feedback} />
                        <Card.Body>
                            <Card.Title>Feedback</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" className="cardsButton">Arată Feedback-ul</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="homeContainerPricing text-center" id="simulari">
                <p className="title2Pricing" style={{ textAlign: "center" }}>Simulări & Prețuri</p>
                <p className="homeSubTitle" style={{ textAlign: "center" }}>Iată ce îți oferim</p>
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
                        <p className="cardDescription">Subiectul conține toată materia pentru clasele IX-XII</p>
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
                <p className="title2Pricing" style={{ textAlign: "center" }}>FAQ</p>
                <p className="homeSubTitle" style={{ textAlign: "center" }}>Răspunsul la cel mai adresate întrebări</p>
                <Accordion defaultActiveKey="1" className="accordionContainer">
                    <Accordion.Item eventKey="1" className="accordionCard">
                        <Accordion.Header className="accordionTitle">Lorem Ipsum Lorem Ipsum Lorem Ipsum</Accordion.Header>
                        <Accordion.Body>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="accordionCard">
                        <Accordion.Header className="accordionTitle">Lorem Ipsum Lorem Ipsum Lorem Ipsum</Accordion.Header>
                        <Accordion.Body>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="accordionCard">
                        <Accordion.Header className="accordionTitle">Lorem Ipsum Lorem Ipsum Lorem Ipsum</Accordion.Header>
                        <Accordion.Body>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className="accordionCard">
                        <Accordion.Header className="accordionTitle">Lorem Ipsum Lorem Ipsum Lorem Ipsum</Accordion.Header>
                        <Accordion.Body>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className="accordionCard">
                        <Accordion.Header className="accordionTitle">Lorem Ipsum Lorem Ipsum Lorem Ipsum</Accordion.Header>
                        <Accordion.Body>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6" className="accordionCard">
                        <Accordion.Header className="accordionTitle">Lorem Ipsum Lorem Ipsum Lorem Ipsum</Accordion.Header>
                        <Accordion.Body>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7" className="accordionCard">
                        <Accordion.Header className="accordionTitle">Lorem Ipsum Lorem Ipsum Lorem Ipsum</Accordion.Header>
                        <Accordion.Body>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. 
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </div>
    )
}