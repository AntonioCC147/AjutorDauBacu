import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from 'sweetalert2'
import * as Yup from 'yup';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import emailjs from '@emailjs/browser';

import Instagram from '../../assets/icons/Instagram.png';
import Facebook from '../../assets/icons/Facebook.png';
import Linkedin from '../../assets/icons/Linkedin.png';

import './Contact.css';

const styles = {
    error: {
        color: "red",
        fontStyle: "italic",
        fontWeight: "bold",
    },
};

const validationSchema = Yup.object().shape({
    user_name: Yup.string().required(<span style={styles.error}>Numele este obligatoriu</span>),
    user_email: Yup.string().email(<span style={styles.error}>Adresa de email este invalidă</span>).required(<span style={styles.error}>Adresa de email este obligatorie</span>),
    message: Yup.string().required(<span style={styles.error}>Mesajul este obligatoriu</span>),
});

export default function Contact() {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    if(isFormSubmitted);

    const sendEmail = (values) => {
        emailjs.send('service_wvhvlhm', 'template_wksilzt', values, 'zb06IEXEOXDpnDXuN')
            .then((result) => {
                console.log(result.text);
                setIsFormSubmitted(true);
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

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
                    <Formik
                        initialValues={{
                            user_name: '',
                            user_email: '',
                            message: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            sendEmail(values);
                            resetForm();
                            setSubmitting(false);
                            Swal.fire({
                                icon: "success",
                                title: "Mesajul a fost trimis cu succes!",
                                showConfirmButton: false,
                                timer: 3000
                            });
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <Row>
                                    <Col lg={5}>
                                        <p className="subTitleContact">Nume</p>
                                        <Field type="text" name="user_name" className="form-control" placeholder="Popescu Ion"/>
                                        <ErrorMessage name="user_name" component="div"/>
                                    </Col>
                                    <Col lg={2}/>
                                    <Col lg={5}>
                                        <p className="subTitleContact mailContact">Adresă de Email</p>
                                        <Field type="email" name="user_email" className="form-control" placeholder="popescuion@gmail.com"/>
                                        <ErrorMessage name="user_email" component="div"/>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: "25px"}}>
                                    <p className="subTitleContact">Mesaj</p>
                                    <Field as="textarea" name="message" className="form-control" rows={6} placeholder="Mesaj..."/>
                                    <ErrorMessage name="message" component="div" />
                                </Row>
                                <div className="text-center" style={{marginTop: "25px"}}>
                                    <Button type="submit" variant="primary" className="cardsButton" disabled={isSubmitting}>
                                        Trimite
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </div>
    )
}