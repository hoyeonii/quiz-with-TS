import React from "react";
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

function Order() {
  const placeOrder = () => {
    const fileListRef = collection(db, "order");
    addDoc(fileListRef, {
      //paypal 결제 후 결제내용도 포함하기
      name: "name",
      nameOntheBox: null,
      price: 0,
      addOn: "",
      tracking: null,
      createDate: new Date(),

      country: "",
      fullName: null,
      additional: null,
      street: null,
      aptNum: null,
      postalCode: null,
      city: null,
      county: null,
    })
      .then((docRef) => {
        console.log("document ID: " + docRef.id); //요걸로 이메일 보내기, my order에서 조회 가능
        alert("order successful");
      })
      .catch((err) => {
        alert("Error : " + err);
      });
  };
  return (
    <div className="order page">
      Order
      <button onClick={placeOrder}>press me</button>
    </div>
  );
}

export default Order;
