import './Template.css';

export default function Template({title, text}) {
    return (
        <div className="templateContainer">
            <p className="templateTitle">{title}</p>
            <p className="templateText">{text}</p>
        </div>
    )
}