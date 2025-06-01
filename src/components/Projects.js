import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/projets/Handihope/07.png";
import projImg2 from "../assets/projets/planification_pfe/01.jpg";
import projImg3 from "../assets/projets/lms/01.PNG";
import projImg4 from "../assets/projets/Handihope/000.png";
import projImg5 from "../assets/projets/puissance4/jeuPuissance.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { QueenModel } from './models/QueenModel';
import { ChessPiecesModel } from './models/ChessPiecesModel';

// Additional images for each project
import handihopeImg1 from "../assets/projets/Handihope/01.png";
import handihopeImg2 from "../assets/projets/Handihope/02.png";
import handihopeImg3 from "../assets/projets/Handihope/03.png";
import handihopeImg4 from "../assets/projets/Handihope/04.png";
import pfeImg1 from "../assets/projets/planification_pfe/03.jpg";
import pfeImg2 from "../assets/projets/planification_pfe/04.jpg";
import pfeImg3 from "../assets/projets/planification_pfe/06.jpg";
import pfeImg4 from "../assets/projets/planification_pfe/07.jpg";
import lmsImg1 from "../assets/projets/lms/02.PNG";
import lmsImg2 from "../assets/projets/lms/03.PNG";
import handihopeMobileImg1 from "../assets/projets/Handihope/001.png";
import handihopeMobileImg2 from "../assets/projets/Handihope/002.png";
import handihopeMobileImg3 from "../assets/projets/Handihope/003.png";
import handihopeMobileImg4 from "../assets/projets/Handihope/004.png";
import handihopeMobileImg5 from "../assets/projets/Handihope/005.png";
import handihopeMobileImg6 from "../assets/projets/Handihope/010.png";
import handihopeMobileImg7 from "../assets/projets/Handihope/011.png";
import handihopeMobileImg8 from "../assets/projets/Handihope/012.jpg";
import handihopeMobileImg9 from "../assets/projets/Handihope/013.jpg";
import handihopeMobileImg10 from "../assets/projets/Handihope/014.jpg";
import handihopeMobileImg11 from "../assets/projets/Handihope/015.jpg";
import handihopeMobileImg12 from "../assets/projets/Handihope/016.jpg";
import puissance4Img1 from "../assets/projets/puissance4/02.png";
import puissance4Img2 from "../assets/projets/puissance4/05.PNG";
import puissance4Img3 from "../assets/projets/puissance4/06.PNG";
import php1 from "../assets/projets/php/01.png";
import php2 from "../assets/projets/php/02.png";
import php3 from "../assets/projets/php/03.png";
import php4 from "../assets/projets/php/04.png";
import php5 from "../assets/projets/php/05.png";
import spring1 from "../assets/projets/springboot/01.PNG";
import spring2 from "../assets/projets/springboot/02.PNG";
import spring3 from "../assets/projets/springboot/03.PNG";
import spring4 from "../assets/projets/springboot/04.PNG";
import apps from "../assets/projets/app.png";

export const Projects = () => {
  const Webprojects = [
    {
      title: "Handihope",
      description: "Assistance app for people with disabilities",
      imgUrl: projImg1,
      images: [ projImg1,handihopeImg1, handihopeImg2, handihopeImg3,handihopeImg4]
    },
    {
      title: "Planification PFE",
      description: "Graduation project planning application",
      imgUrl: projImg2,
      images: [projImg2,pfeImg1, pfeImg2, pfeImg3,pfeImg4]
    },
    {
      title: "Online learning application",
      description: "",
      imgUrl: projImg3,
      images: [lmsImg1, lmsImg2,projImg3]
    },
    {
      title: "Employee Management System",
      description: "",
      imgUrl: php1,
      images: [php1, php2,php3,php4,php5]
    },
    {
      title: "Hotel Management System",
      description: "",
      imgUrl: spring1,
      images: [spring1, spring2,spring3,spring4]
    },
    {
      title: "Other Web Projects",
      description: "",
      imgUrl: apps,
    },
  ];

  const Mobileprojects = [
    {
      title: "HandiHope Mobile",
      description: "Mobile app to assist people with disabilities",
      imgUrl: projImg4,
      images: [handihopeMobileImg1, handihopeMobileImg2, handihopeMobileImg3,handihopeMobileImg4,handihopeMobileImg5,
        handihopeMobileImg8,handihopeMobileImg9,handihopeMobileImg10,handihopeMobileImg11
      ]
    },
  ];

  const Desktopprojects = [
    {
      title: "Puissance4",
      description: "Connect Four desktop game",
      imgUrl: projImg5,
      images: [projImg5,puissance4Img1, puissance4Img2,puissance4Img3]
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="skill-header">
                    <h2>Projects</h2>
                    <div className="knight-wrapper">
                      <div className="knight-container">
                        <QueenModel />
                      </div>
                    </div>
                  </div>
                  <p>
                    Like the Queen on the chessboard, my projects combine versatility, strength, and vision. Each one is a powerful move solving real problems through thoughtful design and development. Explore how I lead ideas across the board to success.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mobile Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Desktop Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {Webprojects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {Mobileprojects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {Desktopprojects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>

        <Row style={{ marginTop: '-30px', marginBottom: '-200px' }} className="justify-content-center">
          <Col md={6} style={{ padding: 0 }}>
            <ChessPiecesModel />
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  );
};