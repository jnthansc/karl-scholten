import './ProjectDetail.css';

import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import SlideshowDetail from '../../../components/UI/SlideshowDetail';
import ProjectImages from '../../../data/ProjectImages';
import ExpandCollapse from '../../../components/UI/ExpandCollapse';

const ProjectDetail = () => {

    const activeProjectIndex = ProjectImages[0].activeProjectIndex;


    return (
        <div className="project-detail">
            <Header />
            <div className="slideshow-container-detail">
                <SlideshowDetail images={ProjectImages[0].projects[activeProjectIndex][0].images} />
            </div>
            <div className="expandCollapse">
                <ExpandCollapse/>
            </div>
            <Footer />
        </div>
    );

}

export default ProjectDetail;