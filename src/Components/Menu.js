import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Resume from '../images/MattResume09232016.pdf';

const styles = {
  title: {
    display: 'inline',
    fontSize: '3em'
  },
  column: {
    padding: '0'
  },
  icon: {
    margin: '0 3px',
    padding: '0 2px'
  }
}

class Menu extends Component {
  letterHover(e) {
    const colors = [
      'color: #0fd',
      'color: #0cf',
      'color: #07f',
      'color: #02f',
      'color: #30f',
      'color: #80f',
      'color: #d0f',
      'color: #f0c',
      'color: #f07',
      'color: #f02',
      'color: #f30',
      'color: #f80',
      'color: #fd0',
      'color: #cf0',
      'color: #7f0'
    ];
    const roll = Math.floor(Math.random() * (15 - 1) + 1);
    e.target.style.cssText += colors[roll];
  }
  render() {
    return (
      <Row className="menu-component">
        <Col md={8} mdOffset={2} style={styles.column}>
          <div className="menu-left">
            <h2 id="title" style={styles.title}>
              <span
                className="title-letter"
                onMouseOver={this.letterHover}>
                M
              </span>
              <span
                className="title-letter"
                onMouseOver={this.letterHover}>
                A
              </span>
              <span
                className="title-letter"
                onMouseOver={this.letterHover}>
                T
              </span>
              <span
                className="title-letter"
                onMouseOver={this.letterHover}>
                T
              </span>
              &nbsp;
              <span
                className="title-letter"
                onMouseOver={this.letterHover}>
                C
              </span>
              <span
                className="title-letter"
                onMouseOver={this.letterHover}>
                A
              </span>
              <span
                className="title-letter"
                onMouseOver={this.letterHover}>
                R
              </span>
              <span
                className="title-letter"
                onMouseOver={this.letterHover}>
                T
              </span>
              <span
                className="title-letter"
                onMouseOver={this.letterHover}>
                E
              </span>
              <span
                className="title-letter"
                onMouseOver={this.letterHover}>
                R
              </span>
              <span
                className="title-letter">
                >
              </span>
            </h2>
          </div>
          <div className="menu-right">
            <a href="https://github.com/mcarter78" target="blank">
              <i
                style={styles.icon}
                className="fa fa-github fa-2x"
                aria-hidden="true"
                onMouseOver={this.letterHover}></i>
            </a>
            <a href="https://linkedin.com/in/mcarter78" target="blank">
              <i
                style={styles.icon}
                className="fa fa-linkedin fa-2x"
                aria-hidden="true"
                onMouseOver={this.letterHover}></i>
            </a>
            <a href="https://twitter.com/_mcarter" target="blank">
              <i
                style={styles.icon}
                className="fa fa-twitter fa-2x"
                aria-hidden="true"
                onMouseOver={this.letterHover}></i>
            </a>
            <a href={Resume} target="blank">
              <span
                onMouseOver={this.letterHover}>
                RÉSUMÉ
              </span>
            </a>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Menu;
