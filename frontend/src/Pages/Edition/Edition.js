import './Edition.css';

export default function Edition() {
    return (
        <div className="editionContainer roboto">
            <p className="editionTitle">Ediții</p>
            <p className="editionSubTitle"><i>Aici vei găsi istoricul tuturor edițiilor pe care le-am organizat</i></p>
            <div>
                <p className="editionDateTitle">Ediția #1 - Va urma</p>
                <p className="editionSubjectTitle">
                    Disciplina: Informatică, Specializarea: Matematică-Informatică (Subiect{' '}|{' '}Barem)
                </p>
                <hr/>
            </div>
            {/*
            <div>
                <p className="editionDateTitle">Ediția #2 - 01.05.2025</p>
                <p className="editionSubjectTitle">
                    Disciplina: Informatică, Specializarea: Matematică-Informatică
                    (<a href="/Model.pdf" className="subjectLink">Subiect</a>{' '}|{' '}<a href="/" className="subjectLink">Barem</a>)
                </p>
                <hr/>
            </div>
            */}
        </div>
    )
}