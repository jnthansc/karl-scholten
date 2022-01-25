import './Collage.css';
import { Link } from 'react-router-dom';
import ProjectImages from '../../data/ProjectImages';

const Collage = (props) => {

    return (
        <div className="collage">
            {props.images.map((img, index) => {
                return (
                    
                    <Link onClick={() => {ProjectImages[0].activeProjectIndex = index}} to="/Arbeit">
                            <img src={img} alt="" className="image"/>
                        </Link>
                );
            })}
        </div>
    );



}

export default Collage;