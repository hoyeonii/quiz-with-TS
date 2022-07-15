import React, { useEffect, useState } from "react";
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

function Order() {
  const [euList, setEuList] = useState<listType[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string>("Gwaja Box");
  type listType = {
    flag: string;
    name: string;
  };
  type priceType = {
    product: string;
    price: number;
  };
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
    console.log(e.target.country.value);
    // console.log(e.target[2].value);

    //결제 성공 시
    // const fileListRef = collection(db, "order");
    // addDoc(fileListRef, {
    //   //paypal 결제 후 결제내용도 포함하기
    //   nameOntheBox: null,
    //   price: 0,
    //   addOn: "",
    //   tracking: null,
    //   createDate: new Date(),

    //   fullName: null,
    //   country: "",
    //   additional: null,
    //   street: null,
    //   aptNum: null,
    //   postalCode: null,
    //   city: null,
    //   county: null,
    // })
    //   .then((docRef) => {
    //     console.log("document ID: " + docRef.id); //요걸로 이메일 보내기, my order에서 조회 가능
    //     alert("order successful");
    //   })
    //   .catch((err) => {
    //     alert("Error : " + err);
    //   });
  };
  return (
    <div className="order page">
      <div className="order-product">
        <img src={order1} />
        <select
          onChange={(e) => {
            setSelectedProduct(e.target.value);
          }}
        >
          <option>Gwaja Box</option>
          <option>Gwaja Box with K-merch</option>
        </select>
        {productList.map((el) =>
          el.product === selectedProduct ? <span>{el.price}</span> : <></>
        )}
      </div>
      <div className="order-input">
        <form id="form" onSubmit={placeOrder} autoComplete="on">
          <h2>Order</h2>
          <input id="name" placeholder="Full Name" />
          <input type="email" id="email" placeholder="E-mail" />

          <h2>Address</h2>
          <select id="country">
            <option>Germany</option>
            {euList.map((el) => (
              <option>{el.name}</option>
            ))}
          </select>
          <input id="street" placeholder="Street" />
          <input id="aptNum" placeholder="Apt no." />
          <input id="postalCode" placeholder="Postal Code" />
          <input id="city" placeholder="City" />
          <input id="county" placeholder="County" />

          <button id="submitNewQuizBtn">Submit</button>
        </form>
      </div>
      {/* <button onClick={()=>{}}>press</button> */}
    </div>
  );
}

export default Order;
