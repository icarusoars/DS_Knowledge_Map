import React from "react";
import PropTypes from 'prop-types';
import Markdown from 'react-markdown/with-html';

import "../css/KnowledgeMap.scss";
import "../css/markdown.scss";

import { getCircleInfo } from "../api_calls/api_kmap";



class KnowledgeMapInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: "",
    };
  }

  async componentDidMount() {
    await this.getMarkdown();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.currentCircleInfoPath !== this.props.currentCircleInfoPath) {
      await this.getMarkdown();
    }
  }

  getMarkdown = async () => {
    var circleMd = await getCircleInfo(this.props.currentCircleInfoPath);
    circleMd = circleMd.split("---")[2]
    // throwaway metadata information
    this.setState(() => ({
      markdown: circleMd
    }));
  }

  render() {
    return (
      <div id = 'KnowledgeMapInfoInside'>
        <Markdown source={this.state.markdown} 
        escapeHtml={false}/>
      </div>
    );
  }
}


KnowledgeMapInfo.propTypes = {
  currentCircleInfoPath: PropTypes.string,
};

export default KnowledgeMapInfo;
