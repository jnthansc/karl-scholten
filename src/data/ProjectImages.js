import aqua1 from '../assets/Serien_Karl/Aqua/1.jpg';
import hotel1 from '../assets/Serien_Karl/Hotel/1.jpg';
import jona1 from '../assets/Serien_Karl/Jonathan/a.JPG';
import marokko1 from '../assets/Serien_Karl/Marokko/1.jpg';
import messe1 from '../assets/Serien_Karl/Messe/1.jpg';
import prod1 from '../assets/Serien_Karl/Produktaufnahmen/1.jpg';
import sw1 from '../assets/Serien_Karl/Schwarzwaldhof/1.jpg';
import u1 from '../assets/Serien_Karl/Ubahn/1.JPG';
import n1 from '../assets/Serien_Karl/Nübel/1.jpg';
import b1 from '../assets/Serien_Karl/Bikepark/1.jpg';
import morof1 from '../assets/Serien_Karl/Morof/1.jpg';
import benz1 from '../assets/Serien_Karl/MercedesBenz/1.jpg';

import Aqua from '../data/Aqua';
import Hotel from '../data/Hotel';
import Jona from '../data/Jona';
import Marokko from '../data/Marokko';
import Messe from '../data/Messe';
import Produktaufnahmen from '../data/Produktaufnahmen';
import Schwarzwaldhof from '../data/Schwarzwaldhof';
import UBahn from '../data/UBahn';
import Nübel from '../data/Nübel';
import Bikepark from '../data/Bikepark';
import Morof from '../data/Morof';
import Benz from '../data/Benz';

export const ProjectImages = [
    {
        activeProjectIndex: 1,
        images:
            [
                benz1,
                jona1,
                prod1,
                morof1,
                aqua1,
                marokko1,
                b1,
                n1,
                hotel1,
                messe1,
                sw1,
                u1,
            ],
        projects: [
            Benz,
            Jona,
            Produktaufnahmen,
            Morof,
            Aqua,
            Marokko,
            Bikepark,
            Nübel,
            Hotel,
            Messe,
            Schwarzwaldhof,
            UBahn,
        ],
    },
];
export default ProjectImages;
