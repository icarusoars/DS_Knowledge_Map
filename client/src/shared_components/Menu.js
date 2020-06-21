import React from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

import '../css/menu.scss'

class Menubar extends React.Component {

  state = {
    selectedTab: "knowledge_map",
  };

  handleClick = (e) => {
    this.setState({
      selectedTab: e.key,
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.selectedTab]}
        mode="horizontal"
      >
        <Menu.Item key="knowledge_map" >
          <Link to="/">
            Knowledge Map
          </Link>
        </Menu.Item>
        <Menu.Item key="motivation" >
          <Link to="/motivation">
            Motivation
          </Link>
        </Menu.Item>
        <Menu.Item key="about" >
          <Link to="/about">
            About
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Menubar;
