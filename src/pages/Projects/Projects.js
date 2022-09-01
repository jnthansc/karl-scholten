import React from 'react';
import './Projects.scss';
import ScrollArrow from '../../components/UI/ScrollArrow';
import Collage from '../../components/UI/Collage';
import {ProjectImages} from '../../data/ProjectImages';



const Projects = () => {

    return (
        <div className="projects">
            <Collage images={ProjectImages[0].images}/>
            <ScrollArrow></ScrollArrow>
        </div>
    );
}

export default Projects;