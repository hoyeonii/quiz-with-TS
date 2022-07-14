import React from "react";

function Shipping() {
  return (
    <div className="shipping page">
      <div className="header">
        <h3>Shipping</h3>
        <span></span>
      </div>
      <div className="content">
        <h4>Insurance</h4>
        <p>
          All boxes that ship with a trackable shipping option are automatically
          covered by insurance.
        </p>
        <h4>Cases covered by insurance</h4>
        <p>
          <ol>
            <li>
              In the case of theft, boxes that are stolen can be replaced in the
              event that evidence is provided from the shipping company showing
              that they acknowledge that the box has been misplaced or stolen.
            </li>
            <li>
              Damaged boxes due to natural disasters i.e. fires, floods,
              hurricanes, etc.
            </li>
            <li>
              Missing or damaged boxes due to mishandling by your local courier.
            </li>
          </ol>
        </p>
        <h4>Cases not covered by insurance</h4>
        <p>
          Boxes that are not received due to an incorrect shipping address, or
          that are intentionally declined by the subscriber are not eligible for
          replacement.
        </p>
      </div>
    </div>
  );
}

export default Shipping;
