import React from "react";
import { Row, Col } from "antd";
import KnowledgeMapD3 from "./KnowledgeMapD3"
import KnowledgeMapInfo from "./KnowledgeMapInfo"

import "../css/KnowledgeMap.css";

class KnowledgeMap extends React.Component {

  render() {
    return (
      <div style = {{ height: "100%" }}>
        <Row style = {{ height: "100%" }}>

          <Col span={16} style={{ height: '100%'}}>
            <KnowledgeMapD3 />
          </Col>
          <Col span={8} style={{ 
                                 height: '100%' }}
                                 id = 'KnowledgeMapInfo' >
            <KnowledgeMapInfo />
          </Col>
          
        </Row>
      </div>
    );
  }
}

export default KnowledgeMap;
