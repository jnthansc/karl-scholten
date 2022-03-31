import aqua1 from '../assets/Serien_Karl/:aqua/DSCF7260.jpg';
import hotel1 from '../assets/Serien_Karl/Hotel/2.jpg';
import jona1 from '../assets/Serien_Karl/Jona/jona1.jpg';
import marokko1 from '../assets/Serien_Karl/Marokko/2.jpg';
import m1 from '../assets/Serien_Karl/MenschenKennenLernen/m2.jpg';
import messe1 from '../assets/Serien_Karl/Messe/3.jpg';
import p1 from '../assets/Serien_Karl/Portrais/p8.jpg';
import prod1 from '../assets/Serien_Karl/Produktaufnahmen/_34A7221.jpg';
import s1 from '../assets/Serien_Karl/Schnappschuesse/_DSF2781.jpg';
import sw1 from '../assets/Serien_Karl/Schwarzwaldhof/sw1.jpg';
import u1 from '../assets/Serien_Karl/U_Bahn/_DSF5378.JPG';

import Aqua from '../data/Aqua';
import Hotel from '../data/Hotel';
import Jona from '../data/Jona';
import Marokko from '../data/Marokko';
import MenschenKennenLernen from '../data/MenschenKennenLernen';
import Messe from '../data/Messe';
import Portraits from '../data/Portraits';
import Produktaufnahmen from '../data/Produktaufnahmen';
import Schnappschuesse from '../data/Schnappschuesse';
import Schwarzwaldhof from '../data/Schwarzwaldhof';
import UBahn from '../data/UBahn';

export const ProjectImages = [
    {
        activeProjectIndex: 1,
        images:
            [aqua1, hotel1, jona1, marokko1, messe1, prod1, s1, sw1, u1, m1, p1,],
        projects: [
            Aqua, 
            Hotel, 
            Jona, 
            Marokko, 
            Messe, 
            Produktaufnahmen, 
            Schnappschuesse, 
            Schwarzwaldhof, 
            UBahn,
            MenschenKennenLernen, 
            Portraits, 
        ],
    },
];
export default ProjectImages;
