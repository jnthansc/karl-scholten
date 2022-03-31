import './Collage.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectImages from '../../data/ProjectImages';
import { ImageList} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const Collage = (props) => {

    const matches = useMediaQuery('(min-width:800px)')

    return (
        <ImageList className="imageList" cols={matches ? 2 : 1}>
            {props.images.map((img, index) => {
                return (
                    <div key={img + index} className="project">
                        <Link onClick={() => { ProjectImages[0].activeProjectIndex = index }} to="/Arbeit">
                            <img src={img} alt="" className="image imageHover" />
                            <div className="projectName">
                                {ProjectImages[0].projects[index][1].name}
                            </div>
                        </Link>
                    </div>
                );
            })}
        </ImageList>

    );



}

export default Collage;