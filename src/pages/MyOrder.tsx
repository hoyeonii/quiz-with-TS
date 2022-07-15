import React, { useState } from "react";
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
  getDoc,
} from "firebase/firestore";
import { storage, db } from "../firebase";

//SiZiiPCaH49OEpIUSc7y

function MyOrder() {
  const [id, setId] = useState<string>("");
  const [verified, setVerified] = useState<boolean>(false);
  const [name, setName] = useState<string>();
  const [tracking, setTracking] = useState<string>();
  const [orderInfo, setOrderInfo] = useState<infoI>();
  interface infoI {
    name: string;
    addOn: string;
    price: number;
    tracking: string;
    createDate: Date;
  }
  const checkId = async () => {
    var docRef = doc(db, "order", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      let data = docSnap.data();

      setVerified(true);
      setName(data.name);
      setTracking(data.tracking);
      // setOrderInfo(
      //   docSnap.data().map((d: any) => {
      //     return {
      //       name: d.name,
      //       addOn: d.addOn,
      //       price: d.price,
      //       tracking: d.tracking,
      //       createDate: d.createDate,
      //     };
      //   })
      // );
    } else {
      // doc.data() will be undefined in this case
      alert("Order does not exist");
    }
  };

  return (
    <div className="myorder page">
      {verified ? (
        <div>
          {name}
          {tracking ? (
            <span>Your box is on its way! Tracking:{tracking}</span>
          ) : (
            <span>Your box is being prepared!</span>
          )}
        </div>
      ) : (
        <>
          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            placeholder="Order #"
          />
          <button onClick={checkId}>{"=>"}</button>
        </>
      )}
    </div>
  );
}

export default MyOrder;
