import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

const styles = {
  scroll: {
    position: 'absolute',
    bottom: '10px',
    right: '15px'
  }
}

class Main extends Component {
  render() {
    return (
      <Row id="main" className="panel main-component">
        <Col
          className="panel-wrapper"
          xs={12}
          md={8}
          mdOffset={2}>
          <div className="element"></div>
          <h4
            className="scroll"
            style={styles.scroll}>
            SCROLL FOR MORE...
          </h4>
        </Col>
      </Row>
    )
  }
}

export default Main;
