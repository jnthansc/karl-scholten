import './Projects.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Collage from '../../components/UI/Collage';
import {ProjectImages} from '../../data/ProjectImages';



const Projects = () => {

    return (
        <div className="projects">
            <Header/>
            <Collage images={ProjectImages[0].images}/>
            <Footer/>
        </div>
    );
}

export default Projects;