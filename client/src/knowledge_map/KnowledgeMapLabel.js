import React from "react";
import PropTypes from 'prop-types';

import "../css/KnowledgeMap.scss";


class KnowledgeMapLabel extends React.Component {

  render() {
    return (
      <div id = 'KnowledgeMapLabel'>
        <div id = 'KnowledgeMapLabelInside'>
            {this.props.currentCircleLabel}
        </div>
      </div>
    );
  }
}


KnowledgeMapLabel.propTypes = {
  currentCircleLabel: PropTypes.string,
};

export default KnowledgeMapLabel;
