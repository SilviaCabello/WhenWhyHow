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
      <Dropdown isOpen={dropdown} toggle={openCloseDropdown} size="lg">
        <DropdownToggle className="dropdown-MainBank" caret>
          Main Bank
        </DropdownToggle>

        <DropdownMenu className="Records" right>
          <DropdownItem header>These are your last Records:</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Record Example Number 1</DropdownItem>
          <DropdownItem>Record Example Number 2</DropdownItem>
          <DropdownItem>Record Example Number 3</DropdownItem>
          <DropdownItem>Record Example Number 4</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default MainBank;