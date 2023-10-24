import About from "./Components/About";
import Contact from "./Components/Contact";
import Feature from "./Components/Feature";
import Header from "./Components/Header";
import Presentation from "./Components/Presentation";
import aboutImage from './images/about.png';
import aboutImage1 from './images/download.png'

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About 
        image={ aboutImage }
        title={ 'Comew With All You Need For Daily Life' }
        button={ 'Get The App' }
      />
      <Presentation />
       <About 
        image={ aboutImage1 }
        title={ 'Download And Get The App Now' }
        button={ 'Download' }
      />
      <Contact />
    </div>
  );
}

export default App;
