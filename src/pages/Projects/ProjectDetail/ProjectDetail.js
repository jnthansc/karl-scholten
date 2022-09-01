import './ProjectDetail.scss';

import React from 'react';
import ScrollArrow from '../../../components/UI/ScrollArrow';
import ImageList from '../../../components/UI/ImageList';
import ProjectImages from '../../../data/ProjectImages';

const ProjectDetail = () => {

    const activeProjectIndex = ProjectImages[0].activeProjectIndex;


    return (
        <div className="project-detail">
            <ImageList project={ProjectImages[0].projects[activeProjectIndex]} />
            <ScrollArrow></ScrollArrow>
        </div>
    );

}

export default ProjectDetail;