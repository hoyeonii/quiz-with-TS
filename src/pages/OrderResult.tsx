import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function OrderResult() {
  const location = useLocation();
  const data = location.state as Tdata;
  type Tdata = { id: string };
  return (
    <div className="myorderP page">
      <div className="myorder myorder-input">
        <h3>Order Successful!</h3>
        <span>Order ID : {data.id}</span>
      </div>
    </div>
  );
}

export default OrderResult;
