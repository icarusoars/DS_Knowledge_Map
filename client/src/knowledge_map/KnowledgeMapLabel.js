import React from "react";
import PropTypes from 'prop-types';

import "../css/KnowledgeMap.scss";


class KnowledgeMapLabel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      label: "",
    };
  }

  render() {
    return (
      <div id = 'KnowledgeMapLabel'>
      </div>
    );
  }
}


KnowledgeMapInfo.propTypes = {
  currentCircleInfoPath: PropTypes.string,
};

export default KnowledgeMapInfo;
