import React from "react";
import PropTypes from 'prop-types';


import "./d3_circlemap/circlemap.css";

import { createCircleMapUtil } from "./d3_circlemap/circlemap_util";

import { getCircleMap } from "../api_calls/api_kmap";

class KnowledgeMapD3 extends React.Component {
  constructor(props) {
    super(props);

    this.svgRef = React.createRef();

  }

  componentDidMount() {
    // draw the circle packing diagram onto svg after svg has mounted
    this.createCircleMap();
  }

  // function to draw the circle packing diagram
  // pass in json file for D3 to draw circles
  // pass in svg reference so D3 javascript code knows which SVG to draw onto
  // pass in circleClick event handler to handle circle clicks
  createCircleMap = async () => {
    const circleMapJSON = await getCircleMap();
    createCircleMapUtil(circleMapJSON, this.svgRef.current, this.props.onCircleClick);
  }

  // referenced this article to integrate d3 with react:
  // https://medium.com/@Elijah_Meeks/interactive-applications-with-react-d3-f76f7b3ebc71
  render() {
    return <svg width="100%" height="100%" ref={this.svgRef}></svg>;
  }
}

// ensure onCircleClick event handler prop is passed
KnowledgeMapD3.propTypes = {
  onCircleClick: PropTypes.func.isRequired,
};

export default KnowledgeMapD3;
