import React from "react";

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
          <li>Application</li>
          <li>Resources to learn from</li>
        </ul>
      </div>
    );
  }
}

export default KnowledgeMapInfo;
