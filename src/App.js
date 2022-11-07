import './App.css';
import logo from './assets/caribbean-logo.png';

function Header() {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <img src={logo} />
        <h1>The Caribbean</h1>
        <p>On Lake George</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <h2>Our Vibe</h2>
      <Card img={""} 
            title="A Taste of the Tropics"
            description="The Caribbean provides authentic Puerto Rican cuisine made with fresh ingredients daily. Enjoy our appetizers, entrees, and desserts!"
      />
      <Card img={""}
            title="Feel Our Latin Vibe"
            description="Live salsa, bachata, merengue, and other music that will bring you to the caribbean. Bring your friends and enjoy the experience!"
      />
      <Card img={""}
            title="Exquisite Cocktails"
            description="For those looking to kick back and relax we have just what you need!"
      />
    </div>
  );
}

function Card({img, title, description}) {
  return (
    <div className="card">
      <img src={img} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header  />
      <About />
    </div>
  );
}

export default App;
