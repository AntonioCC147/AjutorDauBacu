import './Edition.css';

export default function Edition() {
    return (
        <div className="editionContainer">
            <p className="editionTitle">Ediții</p>
            <p className="editionSubTitle"><i>Aici vei găsi istoricul tuturor edițiilor pe care le-am roganizat</i></p>
            <div>
                <p className="editionDateTitle">Ediția #1 - 01.02.2025</p>
                <p className="editionSubjectTitle">
                    <b>Disciplina:</b>{' '}
                    Informatică Matematică-Informatică
                    (<a href="/Model.pdf" className="subjectLink">Subiect</a>{' '}|{' '}<a href="/" className="subjectLink">Barem</a>)
                    </p>
                <hr/>
            </div>
        </div>
    )
}