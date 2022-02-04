import React from "react";
import "./styles.scss";

import { Menu, Dropdown, Button } from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
          Русский
      </a>
    </Menu.Item>
    <Menu.Item>
      <div
      >
          English
      </div>
    </Menu.Item>
    <Menu.Item>
      <div
      >
          O'zbekcha
      </div>
    </Menu.Item>
  </Menu>
);

export default function ChangeLAng() {
  return (
    <div>
      <Dropdown overlay={menu} placement="bottomLeft" arrow>
        <Button>EN</Button>
      </Dropdown>
    </div>
  );
}
