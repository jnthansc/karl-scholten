import './ProjectDetail.scss';

import Header from '../../../components/Header/Header';
import ScrollArrow from '../../../components/UI/ScrollArrow';
import Footer from '../../../components/Footer/Footer';
import ImageList from '../../../components/UI/ImageList';
import ProjectImages from '../../../data/ProjectImages';

const ProjectDetail = () => {

    const activeProjectIndex = ProjectImages[0].activeProjectIndex;


    return (
        <div className="project-detail">
            <Header />
            <ImageList project={ProjectImages[0].projects[activeProjectIndex]} />
            <ScrollArrow></ScrollArrow>
            <Footer />
        </div>
    );

}

export default ProjectDetail;