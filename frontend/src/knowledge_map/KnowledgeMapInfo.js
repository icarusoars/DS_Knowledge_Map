import React from "react";
import PropTypes from 'prop-types';

import "../css/KnowledgeMap.css";

class KnowledgeMapInfo extends React.Component {
  render() {
    return (
      <div id = 'KnowledgeMapInfoInside'>
        <h1>This is where information will be</h1>
        <p>each node in the circle map will have its description here</p>
        <ul>
          <li>Overview</li>
          <li>Why is it important</li>
          <li>Essential Concepts / Questions to be Answered</li>
          <li>Strengths and Weaknesses</li>
          <li>Analogies</li>
          <li>Application / Example Usecases</li>
          <li>Resources to learn from</li>
        </ul>
        <p>The following information will be displayed:</p>
        <h3>{this.props.currentCircleId}</h3>
      </div>
    );
  }
}


KnowledgeMapInfo.propTypes = {
  currentCircleId: PropTypes.string,
};

export default KnowledgeMapInfo;
