import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Instagram from '../../assets/icons/Instagram.png';
import Facebook from '../../assets/icons/Facebook.png';
import Linkedin from '../../assets/icons/Linkedin.png';

import './Contact.css';

export default function Contact() {
    return (
        <div className="contactContainer roboto">
            <p className="contactTitle">Contact</p>
            <Row style={{paddingBottom: "50px"}}>
                <Col lg={4} className="contactCards contactCardLeft">
                    <p className="titleContact">Informații</p>
                    <p className="subTitleContactLeft">Dacă întâmpini o problemă sau ai o întrebare pentru noi, nu ezita să ne scrii,
                        iar noi îți vom răspunde în cel mai scurt timp posibil.
                    </p>
                    <p className="titleContact">Adresă de Email</p>
                    <p className="subTitleContactLeft">ajutordaubacu@gmail.com</p>
                    <hr/>
                    <p className="titleContact">Social Media</p>
                    <div>
                        <a href="/">
                            <img src={Instagram} className="socialLogo" alt="Instagram" style={{marginLeft: "0px"}}/>
                        </a>
                        <a href="/">
                            <img src={Facebook} className="socialLogo" alt="Facebook"/>
                        </a>
                        <a href="/">
                            <img src={Linkedin} className="socialLogo" alt="Linkedin"/>
                        </a>
                    </div>
                </Col>
                <Col lg={1}/>
                <Col lg={7} className="contactCards">
                    <Form>
                        <Row>
                            <Col lg={5}>
                                <p className="subTitleContact">Nume</p>
                                <Form.Control type="text" placeholder="Popescu Ion"/>
                            </Col>
                            <Col lg={2}/>
                            <Col lg={5}>
                                <p className="subTitleContact mailContact">Adresă de Email</p>
                                <Form.Control type="email" placeholder="popescuion@gmail.com"/>
                            </Col>
                        </Row>
                        <Row style={{marginTop: "25px"}}>
                            <p className="subTitleContact">Mesaj</p>
                            <Form.Control as="textarea" rows={6} placeholder="Mesaj..."/>
                        </Row>
                        <div className="text-center" style={{marginTop: "25px"}}>
                            <Button variant="primary" className="cardsButton">Trimite</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}