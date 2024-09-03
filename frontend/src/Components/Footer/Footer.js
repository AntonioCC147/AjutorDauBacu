import Logo from '../../assets/logo/Logo.png';
import ANPC from "../../assets/logo/ANPC.png";
import Visa from "../../assets/logo/Visa.svg";

import './Footer.css';

export default function Footer() {
    return (
        <div className="footerContainer text-center">
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                    <a href="/">
                        <img src={Logo} className="logoFooter" alt="Logo"/>
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                    <p className="footerTitle">Link-uri Utile</p>
                    <a href="/despre"><p className="footerText">Despre noi</p></a>
                    <a href="/editii"><p className="footerText">Ediții</p></a>
                    <a href="/#simulari"><p className="footerText">Simulări & Prețuri</p></a>
                    <a href="/#faq"><p className="footerText">FAQ</p></a>
                    <a href="/contact"><p className="footerText">Contact</p></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                    <p className="footerTitle">Juridice</p>
                    <a href="/inscrie-te"><p className="footerText">Înscrie-te</p></a>
                    <a href="/regulament"><p className="footerText">Regulament</p></a>
                    <a href="/termenisiconditii"><p className="footerText">Termeni și Condiții</p></a>
                    <a href="/politicaconfidentialitate"><p className="footerText">Politica de Confidențialitate</p></a>
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