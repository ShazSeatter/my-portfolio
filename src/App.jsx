import Heropage from './container/Heropage';
import Navbar from './components/Navbar';
import './App.css';



function App() {

  return (
    <>
    <section className="md:h-screen">
        <Navbar />
        <Heropage />
    </section>
   
    </>
  )
}

export default App;
