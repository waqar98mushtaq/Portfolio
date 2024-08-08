import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import AppHeader from './components.js/header';
import AppHome from './components.js/Home';
import AppAbout from './components.js/About';
import AppBlog from './components.js/Blog';
import AppResume from './components.js/Resume';
import AppContact from './components.js/Contact';
import AppFooter from './components.js/Footer';
function App() {
  return (
    <div className="App">
      
      <div id="header">
      <AppHeader />
    </div>
    
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="/about" element={<AppAbout />} />
        <Route path="/blog" element={<AppBlog />} />
        <Route path="/resume" element={<AppResume />} />
        <Route path="/contact" element={<AppContact />} />
      </Routes>
     
      <AppFooter />
      </div>
  );
}

export default App;
