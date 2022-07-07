import './AboutMe.scss';
import Karlos from '../../assets/KarlFrontalLong.png';
import Karlos_Square from '../../assets/KarlFrontalSquare.png';
import Eberhart from '../../assets/Logos/Eberhart.png';
import BikePark from '../../assets/Logos/Bikepark sw.png';
import Schindele from '../../assets/Logos/Schindele sw.png';
import Braun from '../../assets/Logos/Braun sw.png';
import MRUT from '../../assets/Logos/MRUT sw.png';
import Prime from '../../assets/Logos/Prime sw.png';
import ElektroWalz from '../../assets/Logos/Elektro-walz sw.png';
import Heyn from '../../assets/Logos/764.png';
import Katz from '../../assets/Logos/Katz sw.png';
import Morof from '../../assets/Logos/Morof sw.png';
import Nübel from '../../assets/Logos/Nübel sw.png';
import OldtimerWerk from '../../assets/Logos/OldtimerWerk14_200x200.png';
import Pfeffer from '../../assets/Logos/Pfeffer sw.png';
import RaphaelSchule from '../../assets/Logos/Raphael-Schule sw.png';
import Visomedia from '../../assets/Logos/Visomedia sw.png';
import Weitblick from '../../assets/Logos/Weitblick sw.png';
import Recrouting from '../../assets/Logos/high res file-01.png';
import Mercedes from '../../assets/Logos/mercedes-benz-logo-2013.png';
import ScholtenBergmann from '../../assets/Logos/bb.png';

const AboutMe = () => {

    const customerLogos = [
        Mercedes,
        Morof,
        Schindele,
        Braun,
        Eberhart,
        BikePark,
        MRUT,
        Prime,
        ElektroWalz,
        Heyn,
        Katz,
        Visomedia,
        OldtimerWerk,
        Pfeffer,
        RaphaelSchule,
        Recrouting,
        Weitblick,
        Nübel,
        ScholtenBergmann,
    ]

    return (
        <div className="AboutMe">
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

                            Hi, ich bin Karl. <br />
                            Für mich ist die Fotografie nicht nur eine große Leidenschaft, sondern auch die Möglichkeit mich künstlerisch auszudrücken.
                            Ich gestalte eigene Fotoserien und Ausstellungen zu Themen, die mir am Herzen liegen. Zudem biete ich auch Auftragsarbeiten an.
                            Hierbei ist für mich besonders wichtig, eine passende Bildästhetik und Umgebung für das Dargestellte zu kreieren und so eine individuelle
                             und wiedererkennbare Bildsprache zu erschaffen. <br />
                            Um meine Erfahrungen zu vertiefen, studiere ich neben meiner Selbständigkeit Fotodesign an der Hochschule München. <br />
                            Wenn du auf der Suche nach einem kreativen und zuverlässigen Foto- oder Videografen bist, dann meld dich bei mir.
                            Ich biete Studio als auch on Location <br /> Foto- und Videoarbeiten an und helfe dir auch gerne ein Konzept für deine Kampagnen zu erstellen.
                             Ich freue mich auf eine erfolgreiche Zusammenarbeit!
                        </p>
                        <div className="awards-container">
                            <h5>AUSZEICHNUNGEN UND PREISE</h5>
                            <div className="awards">
                                <div className="awards-line">
                                    <p className="awardsYear">2021</p>
                                    <p className="awardsOfYear">
                                        2. Platz „Blende Award“ regional <br />
                                        2. Platz „16. Fotoherbst Schömberg“  U21 <br />
                                        2. Platz Fotokoch Fotowettbewerb Thema „Wandel“ <br />
                                        Finalist „New Talent Award powered by Canon“ <br />
                                        Kreativpreis „Kultur im Schloss e.V.“ <br />
                                        32. Platz "Blende Award" national
                                    </p>
                                </div>
                                <div className="awards-line">
                                    <p className="awardsYear">2019</p>
                                    <p className="awardsOfYear">
                                        Top 100 „Blende Award“ <br />
                                    1. Platz U21 „15. Fotoherbst Schömberg“ <br />
                                    </p>
                                </div>
                                <div className="awards-line">
                                    <p className="awardsYear">2018</p>
                                    <p className="awardsOfYear">
                                        1.Platz „Lions Young Ambassador“ Baden-Württemberg <br />
                                    3. Platz „Lions Young Ambassador“ Deutschland <br />
                                    Lobende Erwähnung „Deutsche Gesellschaft für Photographie e.V.“
                                    </p>
                                </div>
                                <div className="awards-line">
                                    <p className="awardsYear">2017</p>
                                    <p className="awardsOfYear">
                                        5. Platz „Blende Award“ regional <br />
                                    28. Platz „Blende Award“ national <br />
                                    Nominierung „Bester Dokumentarfilm Jugend“ Filmschau Baden-Württemberg
                                    </p>
                                </div>
                                <div className="awards-line">
                                    <p className="awardsYear">2015</p>
                                    <p className="awardsOfYear">
                                        3. Platz „Deutschen Jugendfotopreis“
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="press-container">
                            <h5 className="press-headline">PRESSE</h5>
                            <div className="press-link-spacer"><a className="press-link" href="https://www.eye-land.org/fotograf.htm?id=9">Eye-Land</a> </div>
                            <div className="press-link-spacer"><a className="press-link" href="https://www.pz-news.de/pforzheim_artikel,-Karl-Scholten-hat-mit-16-bereits-eine-eigene-Fotoausstellung-
                                im-Hof-des-Kulturhauses-Osterfeld-_arid,1112103.html">Kulturhaus Osterfeld</a></div>
                            <div className="press-link-spacer"><a className="press-link" href="https://www.pz-nightlife.de/home_artikel,-Starke-Fotomomente-in-Fluechtlingscontainern-_arid,1159590.
                                html">Pforzheimer Zeitung</a></div>
                            <div className="press-link-spacer"><a className="press-link" href="https://www.pz-news.de/pforzheim_artikel,-Filmprojekt-gibt-Einblicke-in-verschiedene-Lebensgeschich-
                                ten-_arid,1171394.html">Pforzheimer Zeitung</a></div>
                            <div className="press-link-spacer"><a className="press-link" href="https://www.jugendfotopreis.de/foto.html?id=1529">Jugendfotopreis</a></div>
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