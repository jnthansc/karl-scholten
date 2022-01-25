import './Footer.css';
import Eberhart from '../../assets/Logos/Eberhart.png';
import BikePark from '../../assets/Logos/Bikepark sw.png';
import Schindele from '../../assets/Logos/Schindele sw.png';

const Footer = () => {
    const customerLogos = [
        Eberhart,
        BikePark,
        Schindele,
    ]

    return (
        <footer className="footer">
            {customerLogos.map((img) => {
                return <img src={img} alt="" className="image"/>;
            })}
        </footer>
    );


}

export default Footer;