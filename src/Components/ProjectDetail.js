import React, { Component } from 'react';
import { Chip, ChipContact } from 'react-mdl';
import { colorPicker } from '../utils/colors';
import { chips } from '../data/constants';

const styles = {
  closeIcon: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    color: '#f0c',
    backgroundColor: '#fff',
    borderRadius: '50%'
  },
  detailTitle: {
    textTransform: 'uppercase',
    fontSize: '2em',
    color: '#fff'
  },
  detailText: {
    fontSize: '1em',
    fontFamily: 'Helvetica'
  },
  goIcon: {
    color: '#0f3',
    marginLeft: '5px'
  },
  ghIcon: {
    marginLeft: '5px',
    color: '#fff'
  }
}

class ProjectDetail extends Component {
  loadChips(projectChips) {
    let _projectChips = [];
    projectChips.forEach((pChip) => {
      chips.forEach((c) => {
        if (pChip === c.name) {
          _projectChips.push(c);
        }
      });
    });
    return _projectChips.map((chip) =>
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
      <div
        className={this.props.classy}>
        <i
          style={styles.closeIcon}
          className="fa fa-times-circle fa-2x"
          aria-hidden="true"
          onClick={this.props.click}></i>
        <div>
          <a href={this.props.url} style={styles.detailTitle} target="blank">
            {this.props.name}
            <i
              style={styles.goIcon}
              className="fa fa-arrow-circle-right"
              aria-hidden="true"></i>
          </a>
          {this.props.ghUrl !== null ? (
          <a href={this.props.ghUrl} target="blank">
            <i
              style={styles.ghIcon}
              className="fa fa-github fa-2x"
              aria-hidden="true"></i>
          </a>
          ) : ( null )}
        </div><br/>
        <div style={styles.detailText}>
          {this.props.detail}
        </div><br/><br/>
          {this.loadChips(this.props.chips)}
      </div>
    )
  }
}

export default ProjectDetail;
