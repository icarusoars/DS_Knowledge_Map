import React from "react";
import Markdown from 'react-markdown/with-html';

import "../css/motivation.scss";
import "../css/markdown.scss";

import { getMotivationInfo } from "../api_calls/api_kmap";

class Motivation extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      markdown: "",
    };
  }

  async componentDidMount() {
    await this.getMarkdown();
  }

  getMarkdown = async () => {
    const motivationMD = await getMotivationInfo();
    this.setState(() => ({
      markdown: motivationMD
    }));
  }

  render() {
    return (
      <div id = 'MotivationMarkdown'>
        <Markdown source={this.state.markdown} 
        escapeHtml={false}/>
      </div>
    );
  }
}

export default Motivation;
