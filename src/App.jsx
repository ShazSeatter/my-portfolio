import Heropage from './container/Heropage';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';



function App() {

  return (
    <>

        <Navbar />
        <Heropage />

    <section>
        <About />
    </section>
    <section>
        <Projects />
    </section>
    <section>
        <Skills />
    </section>
    <section>
      <Contact />
    </section>
    <section>
      <Footer />
    </section>
    </>
  )
}

export default App;
