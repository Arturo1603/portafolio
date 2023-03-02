import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import jsLogo from "../assets/img/jsLogo.png";
import reactjsLogo from "../assets/img/reactLogo.png";
import pythonLogo from "../assets/img/pythonLogo.png";
import javaLogo  from "../assets/img/javaLogo.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const habilidades = [
    {
      name: "javaScript",
      image: jsLogo
    },
    {
      name: "ReactJs",
      image: reactjsLogo
    },
    {
      name: "Python",
      image: pythonLogo
    },
    {
      name: "Flask",
      image: jsLogo
    },
    {
      name: "Django",
      image: jsLogo
    },
    {
      name: "Html5",
      image: jsLogo
    },
    {
      name: "CSS3",
      image: jsLogo
    },
    {
      name: "Bootstrap",
      image: jsLogo
    },
    {
      name: "MaterialUI",
      image: jsLogo
    },
    {
      name: "Postgresql",
      image: jsLogo
    },
    {
      name: "NodeJS",
      image: jsLogo
    },
    {
      name: "Express",
      image: jsLogo
    },
    {
      name: "MongoDB",
      image: jsLogo
    },
    {
      name: "Java",
      image: javaLogo
    },
    {
      name: "Spring",
      image: jsLogo
    },
    {
      name: "Mysql",
      image: jsLogo
    }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p></p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {habilidades.length > 0 &&
                  habilidades.map((habilidad, index) => (
                    <div className="item">
                        <img src={habilidad.image} alt="Image" />
                      <h5>{habilidad.name}</h5>
                    </div>
                  ))
                }
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
