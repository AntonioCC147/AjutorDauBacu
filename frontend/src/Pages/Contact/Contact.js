import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Contact.css';

export default function Contact() {
    return (
        <div className="contactContainer roboto">
            <p className="contactTitle">Contact</p>
            <Row className="w-100 d-flex align-items-center justify-content-center">
                <Col lg={4} className="contactCards">
                    <p className="titleContact">Informații</p>
                    <p className="subTitleContact">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
                    <p className="titleContact">Adresă de Email</p>
                    <p className="subTitleContact">email@gmail.com</p>
                    <hr/>
                    <p className="titleContact">Social Media</p>
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
                                <p className="subTitleContact">Adresă de Email</p>
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