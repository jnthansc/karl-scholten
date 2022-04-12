import './Footer.scss';

import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="footer">
            <ul className="mustHaves">
                <li className="informationPrivacy">
                    <Link className="necessaryLink" to="/Datenschutz">
                        Datenschutz
                    </Link>
                </li>
                <li>
                    |
                </li>
                <li>
                    <Link className="necessaryLink" to="/Impressum">
                        Impressum
                    </Link>
                </li>
            </ul>
        </footer>
    );


}

export default Footer;