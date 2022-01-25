import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Slideshow from './components/UI/Slideshow';
import ProjectImages from './data/ProjectImages';

function App() {

  return (
    <div className="App">
      <Header/>
      <div className="slideshow-container">
      <Slideshow images={ProjectImages[0].images}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
