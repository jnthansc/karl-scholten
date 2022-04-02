import './Footer.scss';

import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="footer">
            <ul className="mustHaves">
                <li className="iformationPrivacy">
                    <Link className="informationPrivacyLink" to="/Datenschutz">
                        Datenschutz
                    </Link>
                </li>
            </ul>
        </footer>
    );


}

export default Footer;