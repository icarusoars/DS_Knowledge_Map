import React from "react";
import { Row, Col } from "antd";

import "../css/about.scss";
// import "../css/markdown.scss";

class About extends React.Component {
  render() {
    return (
      <div id="AboutPage">
        <h1>Author</h1>
        <div id="Author">
          <Row style={{ height: "100%" }}>
            <Col span={8} style={{ height: "100%" }} id="AuthorPic">
              <img src={require("./author.jpeg")} width="100%" />
            </Col>
            <Col
              span={16}
              style={{
                height: "100%",
              }}
              id="AboutAuthor"
            >
              Hi, I'm Skyler Shi. I study Computer Engineering & Statistics at
              the University of Illinois. Rising Junior year, I found out I was
              passionate about data. I started to do data projects and take data
              courses. Over the years, I realized Data Science is a huge field
              and there are so many skills I could put into my toolkit. I became
              more mindful of my learning decisions on what to learn and how to
              learn. I especially took to heart an article about Elon Musk
              categorizing knowledge in his brain to learn faster and better.
              This knowledge categorization practice became a powerful learning
              tool for me. With this website, I wanted to share this philosophy
              through an easy-to-use tool with all aspiring Data Scientists.
            </Col>
          </Row>
        </div>
        <br />
        <h1>Contribute to this Knowledge Map!</h1>
        <p>I am still very new to the
        field of Data Science, so I needed a lot of help constructing this
        knowledge map. I enlisted the help of peers, professionals and
        professors. If you would like to contribute to expanding the knowledge
        map we currently have, you can do so in one of two ways:
        </p>
        <ul>
          <li>
            Make a pull request to a markdown files on github:
            <br />
            <a href="https://github.com/icarusoars/DS_Knowledge_Map/tree/master/kmap_static/data_science">
              https://github.com/icarusoars/DS_Knowledge_Map/tree/master/kmap_static/data_science
            </a>
          </li>
          <li>
            Get in touch with me on twitter or linkedin:
            <br />
            <ul>
              <li>
                <a href="https://twitter.com/icarusoars">
                  https://twitter.com/icarusoars
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/skyler-shi-877b9951/">
                https://www.linkedin.com/in/skyler-shi-877b9951/
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <h1>Contributors</h1>
        <p>I want to thank all these people for contributing to the initial construction
          of this Data Science Knowledge Map. These are people who have helped me 
          grow as a professional and student.
        </p>
        
      </div>
    );
  }
}

export default About;
