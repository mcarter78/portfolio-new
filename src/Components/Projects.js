import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import { chips, projects } from '../data/constants';
import ProjectDetail from './ProjectDetail';
import Thumb from './Thumb';


const styles = {
  subtitle: {
    textAlign: 'left'
  },
  inner: {
    textAlign: 'center'
  },
  scroll: {
    position: 'absolute',
    bottom: '10px',
    right: '15px'
  }
}

const isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chips: chips,
      projects: projects
    };
  }
  loadProjects() {
    return this.state.projects.map((project) =>
        <div key={project.id} className="thumbWrapper">
          <Thumb
            source={project.image}
            altText={project.alt}
            click={(event) => this.chooseProject(event)}
            classy={project.class}
            tooltip={project.name}
          />
          <ReactTooltip
            globalEventOff={isMobile.any() ? 'click' : undefined}
            type="info" />
          <ProjectDetail
            classy={project.detailClass}
            click={() => this.restoreProjects()}
            detail={project.detail}
            name={project.name}
            chips={project.chips}
            url={project.url}
            ghUrl={project.ghUrl}/>
        </div>
      );
  }
  chooseProject(e) {
    const projectsTitle = document.querySelector('h3.projects-title');
    const scroll = document.querySelectorAll('h4.scroll');
    scroll[1].classList.add('hidden');
    projectsTitle.classList.add('hidden');
    const chosenProject = e.target.getAttribute('alt');
    let newProjects = []
    this.state.projects.forEach((project) => {
      if (project.alt !== chosenProject) {
        project.class = 'invisible';
      } else {
        project.class = 'animate';
        project.detailClass = 'visible detail';
      }
      newProjects.push(project)
    });
    this.setState({ projects: newProjects });
  }
  restoreProjects() {
    const projectsTitle = document.querySelector('h3.projects-title');
    const scroll = document.querySelectorAll('h4.scroll');
    scroll[1].classList.remove('hidden');
    projectsTitle.classList.remove('hidden');
    let newProjects = [];
    this.state.projects.forEach((project) => {
      project.class = 'visible'
      project.detailClass = 'hidden';
      newProjects.push(project);
    })
    this.setState({ projects: newProjects });
  }
  render() {
    return (
      <Row id="projects" className="panel projects-component">
        <Col
          className="panel-wrapper"
          md={8}
          mdOffset={2}>
          <h3
            className="projects-title"
            style={styles.subtitle}>
              PROJECTS: <span className="small-text">(CLICK ONE TO LEARN MORE)</span>
          </h3>
          <div style={styles.inner}>
            {this.loadProjects()}
          </div>
          <h4
            className="scroll"
            style={styles.scroll}>
            (OR KEEP SCROLLING...)
          </h4>
        </Col>
      </Row>
    )
  }
}

export default Projects;
