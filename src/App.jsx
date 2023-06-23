import Heropage from './container/Heropage';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';



function App() {

  return (
    <>
    <section className="h-screen">
        <Navbar />
        <Heropage />
    </section>
    <section>
        <About />
    </section>
    <section className="h-screen">
        <Projects />
    </section>
    </>
  )
}

export default App;
