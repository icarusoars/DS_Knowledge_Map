import React from "react";
import { Row, Col } from "antd";
import KnowledgeMapD3 from "./KnowledgeMapD3";
import KnowledgeMapInfo from "./KnowledgeMapInfo";

import "../css/KnowledgeMap.css";

class KnowledgeMap extends React.Component {
  constructor(props) {
    super(props);

    // record the current circle selected
    // this will determine what information will be displayed on the right side
    // this variable is recorded in this parent component to facilitate communication 
    // between KnowledgeMapD3 and KnowledgeMapInfo, two sibling components
    // this article details how communication between siblings should be done:
    // https://app.pluralsight.com/guides/react-communicating-between-components
    this.state = {
      currentCircleInfoPath: "data_science/data_science.md",
    };
  }

  // event handler for circle clicks in D3 diagram
  // this is passed as a prop to KnowledgeMapD3
  handleCircleClick = (circleInfoPath) => {
    this.setState(() => ({
      currentCircleInfoPath: circleInfoPath
    }));
  }

  render() {
    return (
      <div id="KnowledgeMap">
        <Row style={{ height: "100%" }}>
          <Col span={16} style={{ height: "100%" }} id="KnowledgeMapD3">
            <KnowledgeMapD3 onCircleClick = {this.handleCircleClick}/>
          </Col>
          <Col
            span={8}
            style={{
              height: "100%",
            }}
            id="KnowledgeMapInfo"
          >
            <KnowledgeMapInfo currentCircleInfoPath = {this.state.currentCircleInfoPath} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default KnowledgeMap;
