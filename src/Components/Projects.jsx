import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css';

const projects = [
  {
    title: 'Hacienda Montalván',
    description: 
    [
    <FaHtml5 color="#E34F26" />, 
    <FaCss3Alt color="#1572B6" />, 
    <FaJs color="#F7DF1E" />
    ],
    imgUrl: 'https://i.ibb.co/Z23D6PC/landing-hacienda-min.png',
    gitUrl: 'https://github.com/LuisECV0/landing-hacienda-montalban',  
  },
  {
    title: 'Project - Netflix',
    description: 
    [
      <FaCss3Alt color="#1572B6" />, 
      <FaReact color="#1572B6" />, 
      <FaJs color="#F7DF1E" />
    ],
    imgUrl: 'https://i.ibb.co/2hQS8H5/Clone-Netflix-min.png',
    gitUrl: 'https://github.com/LuisECV0/ntfx-inspired-project',
  },
  {
    title: 'Project - Google',
    description:
    [
      <FaReact color="#1572B6" />, 
      <FaCss3Alt color="#1572B6" />, 
      <FaJs color="#F7DF1E" />
    ],
    imgUrl: 'https://i.ibb.co/QdWLjCg/clone-google-min.png',
    gitUrl: 'https://github.com/LuisECV0/gsearch-inspired-project',
  }, 
  {
    title: 'Project - Ecommerce',
    description:     
    [
      <FaHtml5 color="#E34F26" />, 
      <FaCss3Alt color="#1572B6" />, 
      <FaJs color="#F7DF1E" />
    ],
    imgUrl: 'https://i.ibb.co/bFHD5VL/Ecommerce-min.png',
    gitUrl: 'https://github.com/LuisECV0/projectEcommerce',
  },
  {
    title: 'Project - Calculator',
    description: 
    [
      <FaHtml5 color="#E34F26" />, 
      <FaCss3Alt color="#1572B6" />, 
      <FaJs color="#F7DF1E" />
    ],
    imgUrl: 'https://i.ibb.co/pRCXygX/cal-sass-min.png',
    gitUrl: 'https://github.com/LuisECV0/calculadoraSAS',
  },

  {
    title: 'Landing Page RE:ZERO',
    description: 
    [
      <FaHtml5 color="#E34F26" />, 
      <FaCss3Alt color="#1572B6" />, 
      <FaJs color="#F7DF1E" />
    ],
    imgUrl: 'https://i.ibb.co/GPxCHRX/p2-min.png',
    gitUrl: 'https://github.com/LuisECV0/landing-page',
  },
  {
    title: 'Project - Login',
    description: 
    [
      <FaHtml5 color="#E34F26" />, 
      <FaCss3Alt color="#1572B6" />, 
      <FaJs color="#F7DF1E" />,
      <SiMysql color="#1572B6" />
      
    ],
    imgUrl: 'https://i.ibb.co/KxP5FXQ/p4-min.png',
    gitUrl: 'https://github.com/LuisECV0/login-php',
  },   
  {
    title: 'Rock, Paper, Scissors',
    description: 
    [
      <FaHtml5 color="#E34F26" />, 
      <FaCss3Alt color="#1572B6" />, 
      <FaJs color="#F7DF1E" />
    ],
    imgUrl: 'https://i.ibb.co/hWVrMr1/p1-min.png',
    gitUrl: 'https://github.com/LuisECV0/Piedra-papel-tijera',
  }, 

];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <Container>
        <Row>
          <Col>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              Algunos de mis proyectos más recientes
            </p>
          </Col>
        </Row>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="project-col">
              <Card className="project-card">
                <div className="project-image-wrapper">
                  <Card.Img variant="top" src={project.imgUrl} alt={project.title} />
                  <div className="icon-overlay">
                    <a href={project.gitUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="project-icon github-icon" />
                    </a>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  {/* Renderiza los iconos con key única */}
                  <Card.Text>
                    {project.description.map((icon, iconIndex) => (
                      <span key={iconIndex}>{icon}</span> // Agregando key al icono
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};


export default Projects;
