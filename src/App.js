import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Project from './components/project/Project';
import Slide from './components/slide/Slide';


function App() {
  return (
    <div>
      <Navbar />
      <Slide />
      <Contact />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
