import React from "react";
import "./d3_circlemap/circlemap.css";
import { createCircleMapUtil } from "./d3_circlemap/circlemap_util"

class KnowledgeMapD3 extends React.Component {
  constructor(props) {
    super(props);

    this.createCircleMap = this.createCircleMap.bind(this);

    this.svgRef = React.createRef();
  }

  componentDidMount() {
    this.createCircleMap();
  }
  componentDidUpdate() {
    this.createCircleMap();
  }
  
  // function to draw the circle packing diagram
  createCircleMap = () => createCircleMapUtil(this.svgRef.current)

  render() {
    return (
      <svg width="100%" height="100%"
            style={{ 
                    display: "block",
                    margin: "auto" }}
           ref = {this.svgRef}>
      </svg>
    );
  }
}

export default KnowledgeMapD3;
