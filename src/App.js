import './App.css';
import './styles/custom-styles.css'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <ProjectsSection />
    </div>
  );
}

export default App;
