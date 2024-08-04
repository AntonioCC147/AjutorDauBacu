import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from 'sweetalert2'
import * as Yup from 'yup';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Register.css';

//import Waiting from '../../assets/images/Waiting.png';

const styles = {
    error: {
        color: "red",
        fontStyle: "italic",
        fontWeight: "bold",
    },
};

const validationSchema = Yup.object().shape({
    user_name: Yup.string().required(<span style={styles.error}>Numele este obligatoriu</span>),
    user_surname: Yup.string().required(<span style={styles.error}>Prenumele este obligatoriu</span>),
    user_email: Yup.string().email(<span style={styles.error}>Adresa de email este invalidă</span>).required(<span style={styles.error}>Adresa de email este obligatorie</span>),
    user_address: Yup.string().required(<span style={styles.error}>Adresa completă este obligatorie</span>),
    user_phone: Yup.string().required(<span style={styles.error}>Telefonul este obligatoriu</span>),
});

export default function Register() {
    return (
        <div className="registerContainer">
            <p className="registerTitle">Înscrie-te</p>
            <p className="registerSubTitle"><i>Nu rata ocazia de a susține cea mai tare simulare de până acum</i></p>
            {/*
            <div className="text-center">
                <p className="registerSubSubTitle">Înscrierile s-au terminat!</p>
                <p className="registerSubSubTitle">Stai aproape pentru a afla când se vor organiza următoarele simulări!</p>
                <img src={Waiting} style={{width: "400px"}} alt="Waiting"/>
            </div>
            */}
            <div className="registerContainer2">
                <p className="registerContainerTitle">Descriere:</p>
                <p className="registerContainerSubTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p className="registerContainerTitle">Detalii simulare:</p>
                <p className="registerContainerSubTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p className="registerContainerTitle">Ceva:</p>
                <p className="registerContainerSubTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p className="registerContainerTitle">Altceva:</p>
                <p className="registerContainerSubTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p className="registerContainerTitle">Formular de înscriere:</p>
                <Row className="formContainer">
                    <Formik
                        initialValues={{
                            user_name: '',
                            user_surname: '',
                            user_email: '',
                            user_address: '',
                            user_phone: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            //sendEmail(values);
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
                                    <Col lg={3}>
                                        <p className="subTitleContact">Nume:</p>
                                        <Field type="text" name="user_name" className="form-control" placeholder="Popescu" />
                                        <ErrorMessage name="user_name" component="div"/>
                                    </Col>
                                    <Col lg={1}/>
                                    <Col lg={3}>
                                        <p className="subTitleContact">Prenume:</p>
                                        <Field type="text" name="user_surname" className="form-control" placeholder="Ion" />
                                        <ErrorMessage name="user_surname" component="div"/>
                                    </Col>
                                    <Col lg={1}/>
                                    <Col lg={4}>
                                        <p className="subTitleContact">Email:</p>
                                        <Field type="email" name="user_email" className="form-control" placeholder="popescuion@gmail.com" />
                                        <ErrorMessage name="user_email" component="div"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={7}>
                                        <p className="subTitleContact2">Adresa completă:</p>
                                        <Field type="text" name="user_address" className="form-control" placeholder="Bulevardul / Strada..." />
                                        <ErrorMessage name="user_address" component="div"/>
                                    </Col>
                                    <Col lg={1}/>
                                    <Col lg={4}>
                                        <p className="subTitleContact2">Telefon:</p>
                                        <Field type="text" name="user_phone" className="form-control" placeholder="07..." />
                                        <ErrorMessage name="user_phone" component="div"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={8}>
                                        <Row>
                                            <Col lg={7}>
                                                <p className="subTitleContact2">Opțiuni simulare:</p>
                                                <Field name="color" component="select">
                                                    <option value="Option1">Informatică (Matematică-Informatică) - 35 RON</option>
                                                    <option disabled value="Option2">Matematică (Matematică-Informatică) - Va urma</option>
                                                    <option disabled value="Option3">Matematică (Științele-Naturii) - Va urma</option>
                                                </Field>
                                            </Col>
                                        </Row>
                                            <Row style={{marginTop: "25px"}}>
                                            <label>
                                                <Field type="checkbox" name="checked" value="Check1" style={{marginRight: "5px"}} required/>
                                                Sunt de acord cu prelucrarea datelor conform regulamentului GDPR.
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="checked" value="Check2" style={{marginRight: "5px"}} required/>
                                                Am citit și sunt de acord cu <a href="/termenisiconditii" target="blank">Termenii și Condițiile</a> și <a href="/politicaconfidentialitate" target="blank">Politica de Confidențialitate</a>.
                                            </label>
                                        </Row>
                                    </Col>
                                    <Col lg={4} className="d-flex justify-content-center">
                                        <p className="totalPriceContact2 align-self-end">Total: 35 RON</p>
                                    </Col>
                                </Row>
                                <div className="text-center" style={{marginTop: "25px"}}>
                                    <Button type="submit" variant="primary" className="cardsButton" disabled={isSubmitting}>
                                        Trimite
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Row>
            </div>
        </div>
    )
}