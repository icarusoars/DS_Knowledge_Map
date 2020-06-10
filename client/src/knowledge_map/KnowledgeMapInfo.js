import React from "react";
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

import "../css/KnowledgeMap.css";

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
    const circleMd = await getCircleInfo(this.props.currentCircleInfoPath);
    this.setState(() => ({
      markdown: circleMd
    }));
  }

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
        <h3>{this.props.currentCircleInfoPath}</h3>
        <Markdown source={this.state.markdown} />
      </div>
    );
  }
}


KnowledgeMapInfo.propTypes = {
  currentCircleInfoPath: PropTypes.string,
};

export default KnowledgeMapInfo;
