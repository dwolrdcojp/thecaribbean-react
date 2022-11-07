import './App.css';
import logo from './assets/caribbean-logo.png';
import cookingIcon from './assets/img/icons/cooking-icon.png';
import cocktailIcon from './assets/img/icons/cocktail-icon.png';
import drink from './assets/img/info-1.jpg';
import dish from './assets/img/info-2.jpg';


function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}

const images = importAll(require.context('./assets/img/Menu', false, /\.(png|jpe?g|svg)$/));

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
  const content = [ 
    {
      id: 0,
      img: cookingIcon,
      title: "A Taste of the Tropics",
      description: "The Caribbean provides authentic Puerto Rican cuisine made with fresh ingredients daily. Enjoy our appetizers, entrees, and desserts!",
    },
    {
      id: 1,
      img: cookingIcon,
      title: "Feel Our Latin Vibe",
      description: "Live salsa, bachata, merengue, and other music that will bring you to the caribbean. Bring your friends and enjoy the experience!",
    },
    {
      id: 2,
      img: cocktailIcon,
      title: "Exquisite Cocktails",
      description: "For those looking to kick back and relax we have just what you need!",
    }];

  return (
    <>
      <div className="about">
        <h1>How We Caribbean</h1>
      </div>
      <div className="about">
        <Card img={content[0].img} 
              title={content[0].title}
              description={content[0].description} />
        <Card img={content[1].img} 
              title={content[1].title}
              description={content[1].description} />
        <Card img={content[2].img} 
              title={content[2].title}
              description={content[2].description} />
      </div>
    </>
  );
}

function Info() {
  const content = [
    {
      id: 0,
      img: drink,
      title: "Great Dining on Lake George!",
      description: "The Caribbean is a quaint restaurant and bar located on Lake George’s Riverfront and offers amazing Puerto Rican cuisine. Our vision was to create a comfortable atmosphere for a more mature crowd to enjoy excellent food, good conversation, great cocktails, and amazing Latin music. You must be 21 and over to enter."
    },
    {
      id: 1,
      img: dish,
      title: "Private Events!",
      description: "The Caribbean is available for private meetings and events from 1:00pm to 4:00pm from Tuesday through Friday. We also offer catering options. Call (219) 940-3232 for questions or to discuss details."
    }
  ];


  return (
    <div className="info">
      <div className="panel">
        <img className="img" src={content[0].img} />
        <Card title={content[0].title}
              description={content[0].description}/>
      </div>
      <div className="panel">
        <Card title={content[1].title}
              description={content[1].description}/>
        <img className="img" src={content[1].img} />
      </div>
    </div>
  );
}

function Card({img, title, description}) {
  return (
    <div className="card">
      <img src={img} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function Menu() {

  const menu = [
   'blistek.jpg',
   'cubano.jpg',
   'jibarito.jpg',
   'lechon.jpg',
   'pastelillos.jpg',
   'polloguisado.jpg',
   'porkchops.jpg',
   'tostones.jpg'];

  return(
    <>
    <div className="menu">
      <img src={cookingIcon} />
      <h1>Menu</h1>
    </div>
    <div className="menu-items-container">
      {menu.map(item => (
        <div className="menu-item">
         <img src={images[item]} />
        </div>
      ))}
    </div>
    </>
  );
}

function Footer() {
  return (
    <div className="footer">
      <h1>Footer</h1>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Header  />
      <About />
      <Info />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
