import ANPC from "../../assets/logo/ANPC.jpg";
import Visa from "../../assets/logo/Visa.svg";

import './Footer.css';

export default function Footer() {
    return (
        <div className="footerContainer text-center">
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                    <p className="footerTitle">Scurt cuvânt</p>
                    <p className="footerParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                    <p className="footerTitle">Pagini Utile</p>
                    <a href="/"><p className="footerText">Acasă</p></a>
                    <a href="despre"><p className="footerText">Despre noi</p></a>
                    <p className="footerText">Simulări</p>
                    <p className="footerText">Regulament</p>
                    <p className="footerText">Preț</p>
                    <p className="footerText">Contact</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                    <p className="footerTitle">Altele</p>
                    <a href="/"><p className="footerText">Acasă</p></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                    <p className="footerTitle">Administrativ</p>
                    <a href="https://anpc.ro/ce-este-sal/"><img src={ANPC} className="footerLogoImage" alt="ANPC"/></a>
                    <a href="https://netopia-payments.com/"><img src={Visa} className="footerLogoImage" alt="Visa"/></a>
                </div>
            </div>
            <hr/>
            <div style={{color: "#293651"}}>
                <b>© {new Date().getFullYear()} Copyright | Echipa Ajutor! Dau Bacu' | Toate drepturile sunt rezervate</b>
            </div>
        </div>
    )
}