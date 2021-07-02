import { useState } from "react";
import "./Collapsible.css";
import SelectBank from "./SelectBank";

function Collapsible({ bank, setBank, collapsible, handleCollapsible }) {
  return (
    <div className="collapsible-container" onClick={handleCollapsible}>
      <div className="collapsible-card">
        <h5>{bank}</h5>
        <ul className={collapsible ? "collapsible-on" : "collapsible-off"}>
          <li onClick={setBank("Bank 1")}>Bank 1</li>
          <li onClick={setBank("Bank 2")}>Bank 2</li>
          <li onClick={setBank("Bank 3")}>Bank 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Collapsible;
