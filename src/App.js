import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Home from "./Pages/home/home";
import Footer from './components/footer/footer';


function App() {

  return (
    <div className="App" >
      <section id="header">
        <Header />
      </section>
      <section id="content">
        <Home />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
