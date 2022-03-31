import './AboutMe.scss';
import Header from '../../components/Header/Header';
import Karlos from '../../assets/karlos.jpg';
import Karlos_Square from '../../assets/karl_square.jpg';
import Eberhart from '../../assets/Logos/Eberhart.png';
import BikePark from '../../assets/Logos/Bikepark sw.png';
import Schindele from '../../assets/Logos/Schindele sw.png';
import Braun from '../../assets/Logos/Braun sw.png';
import MRUT from '../../assets/Logos/MRUT sw.png';
import Prime from '../../assets/Logos/Prime sw.png';
import ElektroWalz from '../../assets/Logos/Elektro-walz sw.png';
import Heyn from '../../assets/Logos/Heyn sw.png';
import Katz from '../../assets/Logos/Katz sw.png';
import Morof from '../../assets/Logos/Morof sw.png';
import Nübel from '../../assets/Logos/Nübel sw.png';
import OldtimerWerk from '../../assets/Logos/OldtimerWerk14_200x200.png';
import Pfeffer from '../../assets/Logos/Pfeffer sw.png';
import RaphaelSchule from '../../assets/Logos/Raphael-Schule sw.png';
import Visomedia from '../../assets/Logos/Visomedia sw.png';
import Weitblick from '../../assets/Logos/Weitblick sw.png';

const AboutMe = () => {

    const customerLogos = [
        Eberhart,
        BikePark,
        Schindele,
        Braun,
        MRUT,
        Prime,
        ElektroWalz,
        Heyn,
        Katz,
        Morof,
        Nübel,
        OldtimerWerk,
        Pfeffer,
        RaphaelSchule,
        Visomedia,
        Weitblick,
    ]

    return (
        <div className="AboutMe">
            <Header />
            <div className="aboutMe-container">
                <div className="aboutMe-content">
                    <div className="imageKarl-desktop">
                        <img src={Karlos} alt="Karl Scholten" />
                    </div>
                    <div className="imageKarl-mobile">
                        <img src={Karlos_Square} alt="Karl Scholten" />
                    </div>
                    <div className="aboutMe-column">
                        <h5>Karl Scholten</h5>
                        <div className="subtitle">Fotograf</div>
                        <p className="aboutMe-info">
                            Hi, das auf dem Foto bin ich, Karl. <br /> Ich studiere Fotodesign an der Hochschule München. <br />
                        Für mich ist die Fotografie nicht nur die Grundlage meines Lebensunterhalts, sondern auch die Möglichkeit mich künstlerisch auszudrücken.
                        So gestalte ich nicht nur Auftragsarbeiten, sondern auch eigene Fotoserien und Ausstellungen zu Themen, die mir am Herzen liegen.
                        Ich biete Studio als auch on Location Foto- und Videoarbeiten an.
                        Dabei steht für mich im Fokus, eine passende Ästhetik und Umgebung für das dargestellte Objekt zu gestalten und so eine individuelle und wiedererkennbare Bildsprache zu erschaffen.
                        <br />Wenn du auf der Suche nach einem kreativen und zuverlässigen Foto- oder Videografen bist, dann meld dich bei mir.
                        Ich helfe dir auch gerne ein Konzept für Fotos oder Videos zu erstellen.
                        Ich freue mich auf eine erfolgreiche Zusammenarbeit.
                        </p>
                        <div className="awards-container">
                            <h5>AUSZEICHNUNGEN UND PREISE</h5>
                            <div className="awards">
                                <div className="awards-line">
                                    <p className="awardsYear">2021</p>
                                    <p className="awardsOfYear">
                                        Kreativpreis beim Fotowettbewerb des Förderkreis Kultur im Schloss e.V. <br /> <br />
                                    2. Platz beim beim „16. Fotoherbst Schömberg“ in der U21 <br /> <br />
                                    2. Platz beim Fotokoch Fotowettbewerb zum Thema „Wandel“ <br /> <br />
                                    Finalist beim „New Talent Award powered by Canon“
                                    </p>

                                </div>
                                <div className="awards-line">
                                    <p className="awardsYear">2019</p>
                                    <p className="awardsOfYear">
                                        94.Platz beim „Blende Award“ <br /> <br />
                                    Jurypreis Amateure U21 beim „15. Fotoherbst Schömberg“ <br /> <br />
                                    „Lions Young Ambassador“ des Lions Club Baden-Württemberg mit der Serie „Menschen kennen lernen“ <br /> <br />
                                    </p>
                                </div>
                                <div className="awards-line">
                                    <p className="awardsYear">2018</p>
                                    <p className="awardsOfYear">
                                        „Lions Young Ambassador“ des Lions Club Baden-Württemberg mit der Serie „Menschen kennen lernen“ <br /> <br />
                                    3. Platz „Lions Young Ambassador Award“ des Lions Club Deutschland mit der Serie „Menschen kennen lernen“<br /> <br />
                                    Lobende Erwähnung durch die „Deutsche Gesellschaft für Photographie e.V.“ beim Bildungspreis
                                    </p>
                                </div>
                                <div className="awards-line">
                                    <p className="awardsYear">2017</p>
                                    <p className="awardsOfYear">
                                        5. Platz beim „Blende Award“ (Regionalebene) <br /> <br />
                                    28. Platz beim „Blende Award“ (Nationalebene) <br /> <br />
                                    Nominierung in der Kategorie „Bester Dokumentarfilm Jugend“ der Filmschau Baden- Württemberg
                                    </p>
                                </div>
                                <div className="awards-line">
                                    <p className="awardsYear">2015</p>
                                    <p className="awardsOfYear">
                                        3. Platz beim „Deutschen Jugendfotopreis“.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="customers-container">
                            <h5 className="customer-headline">KUNDEN</h5>
                            <ul className="customer-list">
                                {customerLogos.map((img, index) => {
                                    return <li key={img + index}><img src={img} alt="" className="customerImage" /></li>;
                                })}
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default AboutMe;