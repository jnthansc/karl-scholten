import './Footer.scss';
import Eberhart from '../../assets/Logos/Eberhart.png';
import BikePark from '../../assets/Logos/Bikepark sw.png';
import Schindele from '../../assets/Logos/Schindele sw.png';
import Braun from '../../assets/Logos/Braun sw.png';
import MRUT from '../../assets/Logos/MRUT sw.png';
import Prime from '../../assets/Logos/Prime sw.png';

const Footer = () => {
    const customerLogos = [
        Eberhart,
        BikePark,
        Schindele,
        Braun,
        MRUT,
        Prime,
    ]

    return (
        <footer className="footer">
            {/* <ul className="company-list">
                {customerLogos.map((img, index) => {
                    return <li key={img + index}><img src={img} alt="" className="companyImage" /></li>;
                })}
            </ul> */}
        </footer>
    );


}

export default Footer;