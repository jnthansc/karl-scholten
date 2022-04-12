import './App.scss';
import Slideshow from './components/UI/Slideshow';
import ProjectImages from './data/ProjectImages';
import benz1 from './assets/Serien_Karl/MercedesBenz/1.jpg';

function App() {

  return (
    <div className="App">
      <div className="app-content">
        <div className="slideshow-container">
          <Slideshow images={ProjectImages[0].images} />
        </div>
        <div className="frontPagePicture">
          <img src={benz1} className="frontImg"/>
        </div>
      </div>
    </div>
  );
}

export default App;
