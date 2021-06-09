import React, { useState } from "react";
import "./Balances.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

function MainBank() {
  const [dropdown, setDropdown] = useState(false);
  const openCloseDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div>
      <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
        <DropdownToggle>Main Bank</DropdownToggle>

        <DropdownMenu>
          <DropdownItem>Records</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default MainBank;
