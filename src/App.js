import './App.css';
import { useState, useEffect, useRef } from 'react';
import logo from './assets/caribbean-logo.png';
import blackwhitelogo from './assets/black-white-logo.png'
import cookingIcon from './assets/img/icons/cooking-icon.png';
import cocktailIcon from './assets/img/icons/cocktail-icon.png';
import drink from './assets/img/info-1.jpg';
import dish from './assets/img/info-2.jpg';
import facebookIcon from './assets/img/icons/facebook_icon.svg';
import instagramIcon from './assets/img/icons/instagram_icon.svg';
import emailIcon from './assets/img/icons/email_icon.svg';
import phoneIcon from './assets/img/icons/phone_icon.svg';
import heroImage from './assets/img/hero-background.jpg';



function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}

const images = importAll(require.context('./assets/img/Menu', false, /\.(png|jpe?g|svg)$/));

function MenuBar() {
  return(
    <>
      <div className="menu-bar-image">
        <img src={blackwhitelogo} />
      </div>
      <div className="menu-bar">
        <MenuBarButton name="Menu"/>
        <MenuBarButton name="About"/>
        <MenuBarButton name="Info"/>
        <MenuBarButton name="Events"/>
        <MenuBarButton name="Contact Us"/>
        <MenuBarButton name="Reviews"/>
      </div>
    </>
  );
}

function MenuBarButton({name}) {
  const [isHovered, setIsHovered] = useState(false);

  const color = isHovered ? 
    { color: 'black', backgroundColor: 'white', transition: 'background-color 1s linear' } 
      : { color: 'white' };

  const domElement = document.getElementById(`${name}`);

  function scroll() {
    domElement.scrollIntoView(({ behavior: 'smooth' }));
  }

  return(
    <div className="menu-bar-button" 
         onClick={scroll}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)} >
        <h1 style={color}>{name}</h1>
    </div>
  );
}

function Header() {
  const heroRef = useRef();
  useEffect(() => {
    heroRef.current.animate({opacity: [0, 0, 1]}, 2000);
  }, []);

  return (
    <div className="hero">
      <div ref={heroRef} className="hero-image">
        <img src={heroImage} />
      </div>
      <div className="hero-text">
        <img src={logo} />
        <h1>The Caribbean</h1>
        <h2>On Lake George</h2>
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
      <div id="About" className="about">
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
    <div id="Info" className="info">
      <div className="panel" style={{backgroundColor: 'darkblue'}}>
        <img src={content[0].img} />
        <div className="wrapper">
          <Card title={content[0].title}
                description={content[0].description}/>
        </div>
      </div>
      <div id="Events" className="panel" style={{backgroundColor: 'darkorange'}}>
        <div className="wrapper">
          <Card title={content[1].title}
                description={content[1].description}/>
        </div>
        <img src={content[1].img} />
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
   'blistek',
   'cubano',
   'jibarito',
   'lechon',
   'pastelillos',
   'polloguisado',
   'porkchops',
   'tostones'];

  return(
    <>
    <div className="menu">
      <img id="Menu" src={cookingIcon} />
      <h1>Menu</h1>
    </div>
    <div className="menu-items-container">
      {menu.map(item => (
        <Image image={images[`${item}.jpg`]} name={item} />
      ))}
    </div>
    </>
  );
}

function Image({image, name}) {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className="menu-item" 
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)} >

    {isHovered && (<div className="menu-item-hover" visible={isHovered}><h1>{name} </h1></div>)}
       <img src={image} />
    </div>
  );
}

function Footer() {
  return (
    <div id="Contact Us" className="footer">
      <h1>Let's Get Social</h1>
      <div id="Reviews" className="maps-panel">
        <GoogleMaps />
        <div className="maps-address">
          <h1>Our Info</h1>
            <li>438 E 4th St, Hobart, IN 46342</li>
            <li>(219) 940-3232</li>
          <h1>Our Hours</h1>
            <li>Sunday - Wednesday: Closed</li>
            <li>Thursday - Saturday: 5:00 - 9:00 PM</li>
        </div>
      </div>
      <div className="footer-icons">
        <a href="https://www.facebook.com/search/top/?q=the%20caribbean%20on%20lake%20george">
          <img src={facebookIcon} />
        </a>
        <a href="https://www.instagram.com">
          <img src={instagramIcon} />
        </a>
        <a href="mailto: thecaribbean2125@gmail.com">
          <img src={emailIcon} />
        </a>
        <a href="tel:2199403232">
          <img src={phoneIcon} />
        </a>
      </div>
      <h3>Copyright © 2022 - The Caribbean</h3>
    </div>
  );
}

function GoogleMaps() {
  return(
      <div className="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.7669760884737!2d-87.25701614814238!3d41.53098797914934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8811eb0a658ed307%3A0x226fc933a0acabfe!2sThe%20Caribbean%20on%20Lake%20George!5e0!3m2!1sen!2sus!4v1667916994141!5m2!1sen!2sus"  style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}


function App() {

  
  return (
    <div className="App">
      <MenuBar />
      <Header  />
      <About />
      <Info />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
