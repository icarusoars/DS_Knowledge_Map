import React from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

import '../css/Menu.css'

class Menubar extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="knowledge_map">
          <Link to="/">
            Knowledge Map
          </Link>
        </Menu.Item>
        <Menu.Item key="motivation">
          <Link to="/motivation">
            Motivation
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">
            About
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Menubar;
