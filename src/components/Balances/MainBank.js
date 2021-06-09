import "./Balances.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

function MainBank() {
  return (
    <div>
      <Dropdown>
        <DropdownToggle>Main Bank</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Records</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default MainBank;
