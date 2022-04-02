import './App.scss';
import Slideshow from './components/UI/Slideshow';
import ProjectImages from './data/ProjectImages';

function App() {

  return (
    <div className="App">
      <div className="app-content">
        <Slideshow images={ProjectImages[0].images} />
      </div>
    </div>
  );
}

export default App;
