import React, { useEffect, useState, useRef, createRef } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import {
  Timestamp,
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  where,
  doc,
} from "firebase/firestore";
import { storage, db } from "../firebase";
import "../styles/Order.css";
import order1 from "../images/order1.png";
import "../types/index.d.ts";
import { Link, useNavigate } from "react-router-dom";
import CheckOut from "./CheckOut";

function Order() {
  const [euList, setEuList] = useState<listType[]>([]);
  const [addressInfo, setAddressInfo] = useState<AddressInfoT>({
    receiver: "",
    country: "Germany",
  });
  const [selectedProduct, setSelectedProduct] = useState<string>("Gwaja Box");
  const [price, setPrice] = useState<number>(29.5);
  const navigate = useNavigate();
  type listType = {
    flag: string;
    name: string;
  };

  type AddressInfoT = { receiver: string; country: string };

  const productList = [
    { product: "Gwaja Box", price: 29.5 },
    { product: "Gwaja Box with K-merch", price: 33.5 },
  ];

  async function getEUList() {
    const response = await fetch(
      "https://restcountries.com/v2/regionalbloc/eu"
    );
    var data = await response.json();
    setEuList(data);
  }
  useEffect(() => {
    getEUList();
  }, []);

  const placeOrder = (e: any) => {
    e.preventDefault();
    navigate("/checkOut", {
      state: { ...addressInfo, price, selectedProduct },
    });
  };
  return (
    <div className="order page">
      <div className="order-product">
        <img src={order1} />
        <div className="order-product-right">
          <select
            onChange={(e) => {
              setSelectedProduct(e.target.value);
              setPrice(
                productList.find((el) => el.product === e.target.value)!.price
              );
            }}
          >
            <option>Gwaja Box</option>
            <option>Gwaja Box with K-merch</option>
          </select>
          <ul>
            <li>15+ Korean Snacks</li>
            <li>Free tracked shipping</li>
            <li>Size of the box: 35*25*10(cm)</li>
            {selectedProduct === "Gwaja Box with K-merch" && (
              <li>
                10+ K-pop & Korean Merch <br />
                (ex. PostCard, Sticker, Face Mask)
              </li>
            )}
          </ul>
          <span>€{price}</span>
        </div>
      </div>
      <div className="order-input">
        <form
          id="form"
          onSubmit={placeOrder}
          onChange={(e: any) => {
            // const [name, value] = e.target;
            let name = e.target.id;
            let value = e.target.value;
            setAddressInfo({ ...addressInfo, [name]: value });
            console.log(name, value);
          }}
          autoComplete="on"
        >
          <h2>Order</h2>
          <input id="sender" placeholder="Full Name" required />
          <input type="email" id="email" placeholder="E-mail" required />
          <h2>Address</h2>
          <div className="order-input-row">
            <input id="receiver" placeholder="Full Name (Receiver)" required />

            <select id="country">
              <option>Germany</option>
              {euList.map((el) => (
                <option>{el.name}</option>
              ))}
            </select>
          </div>
          <div className="order-input-row">
            <input id="street" placeholder="Street" required />
            <input id="aptNum" placeholder="Apt no." required />
          </div>
          <div className="order-input-row">
            <input id="city" placeholder="City" required />
            <input id="county" placeholder="County*" />
            <input id="postalCode" placeholder="Postal Code" required />
          </div>

          {/* <Link
            to="/checkOut"
            state={{ ...addressInfo, price, selectedProduct }}
          > */}
          <button id="subminBtn">Submit</button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}

export default Order;
