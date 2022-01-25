import './Jobs.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Collage from '../../components/UI/Collage';
import img1 from '../../assets/Serien_Karl/:aqua/Neueswasser.jpg';
import img2 from '../../assets/Serien_Karl/:aqua/Unterwasser.jpg';
import img3 from '../../assets/Serien_Karl/:aqua/DSCF7260.jpg';
import img4 from '../../assets/Serien_Karl/Marokko/mannmeer1.jpg';



const Jobs = () => {
    const jobsImages = [
        img1,
        img2,
        img3,
        img4,
    ];
    

    return (
        <div className="jobs">
            <Header/>
            <Collage images={jobsImages}/>
            <Footer/>
        </div>
    );
}

export default Jobs;