import ANPC from "../../assets/logo/ANPC.png";
import Visa from "../../assets/logo/Visa.svg";

import './Footer.css';

export default function Footer() {
    return (
        <div className="footerContainer text-center">
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                    <p className="footerTitle">Scurt Cuvânt</p>
                    <p className="footerParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                    <p className="footerTitle">Pagini Utile</p>
                    <a href="/despre"><p className="footerText">Echipă & Despre noi</p></a>
                    <a href="/#simulari"><p className="footerText">Simulări & Prețuri</p></a>
                    <a href="/#faq"><p className="footerText">FAQ</p></a>
                    <a href="/contact"><p className="footerText">Contact</p></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                    <p className="footerTitle">Legale</p>
                    <a href="/"><p className="footerText">Regulament</p></a>
                    <a href="/"><p className="footerText">Termeni și Condiții</p></a>
                    <a href="/"><p className="footerText">Politica de Confidențialitate</p></a>
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