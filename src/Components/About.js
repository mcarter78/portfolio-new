import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Chip, ChipContact } from 'react-mdl';
import { colorPicker } from '../utils/colors';
import { chips } from '../data/constants';
import Avatar from '../images/matt.jpg';

const styles = {
  subtitle: {
    textAlign: 'left'
  },
  avatar: {
    float: 'right',
    borderRadius: '50%',
    maxWidth: '160px',
    marginRight: '20px'
  },
  aboutText: {
    float: 'left',
    fontSize: '1em',
    fontFamily: 'Helvetica'
  }
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chips: chips
    };
  }
  loadChips() {
    return this.state.chips.map((chip) =>
      <div key={chip.id} className="chipWrapper">
        <Chip
          style={{
            backgroundColor: colorPicker(),
            color: '#fff',
            fontWeight: 'bold',
            marginRight: '2px'
          }}>
          <ChipContact
            style={{
              background: 'url(' + chip.image + ') 0 0 / cover',
            }}
          />
          {chip.name}
        </Chip>
      </div>
    );
  }
  render() {
    return (
      <Row id="about" className="panel about-component">
        <Col
          className="panel-wrapper about-wrapper"
          md={8}
          mdOffset={2}>
          <h3
            style={styles.subtitle}>
            ABOUT ME:
          </h3>
          <p style={styles.aboutText}>I was just a kid when I made my first website.  A teenager with a hand-me-down computer and too much time on his hands.  I learned a little HTML and made what everyone made their first time:  A page with a sweet tiled background image, and a bunch of links to hella cool stuff.  And of course a visitor counter in the footer.  I think it may have even gotten up to double digits.
            It’s been awhile since then, and the work I’m doing these days is quite a bit more advanced,  but the passion to create interesting, complex user interfaces remains, as does the wonder at the prospect of people all over the world experiencing them.</p>
          <img
            alt="Matt"
            style={styles.avatar}
            src={Avatar}
          />
          <h3
            style={styles.subtitle}>
            MY SKILLS:
          </h3>
          {this.loadChips()}
        </Col>
      </Row>
    )
  }
}

export default About;
