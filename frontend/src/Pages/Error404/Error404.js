import './Error404.css';

import Error404Image from '../../assets/images/Error404.svg';

export default function Error404() {
    return (
        <div className="error404Container d-flex align-items-center justify-content-center">
            <img src={Error404Image} className="error404Image" alt="Error404"/>
        </div>
    )
}