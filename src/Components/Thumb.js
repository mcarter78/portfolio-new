import React, { Component } from 'react';

const styles = {
  image: {
    //maxWidth: '160px'
  }
}

class Thumb extends Component {
  render() {
    return (
      <img
        style={styles.image}
        src={this.props.source}
        alt={this.props.altText}
        onClick={this.props.click}
        className={this.props.classy}
        data-tip={this.props.tooltip}
      />
    )
  }
}

export default Thumb;
