import React, { useState, useEffect, createRef } from "react";
import { useLocation } from "react-router-dom";
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
function CheckOut() {
  //   {
  //   selectedProduct,
  //   price,
  //   sender,
  //   addressInfo,
  // }: {
  //   selectedProduct: string;
  //   price: number;
  //   sender: string;
  //   addressInfo: {
  //     receiver: string;
  //     country: string;
  //   };
  // }
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);
  const [paid, setPaid] = useState<boolean>(false);
  const [orderID, setOrderID] = useState<string>("");

  const location = useLocation();
  const data = location.state as TOrderInfo;
  console.log(data);
  console.log(data.price);
  type TOrderInfo = {
    price: number;
    selectedProduct: string;

    sender: string;
    email: string;
    receiver: string;
    country: string;
    street: string;
    aptNum: number;
    postalCode: number;
    city: string;
    county: string;
  };
  useEffect(() => {
    addPaypalScript();
  }, []);
  const paypal = createRef<HTMLDivElement>();

  const addPaypalScript = () => {
    if (window.paypal || scriptLoaded) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    const clientID =
      "ARK_MD0CQum3XwUdhoOaAgAVUbV9r7Q928WHMaEQ6GM8R5yQqAskyLqfDVYKntfXN4kxW3z7anc8KhJL";
    const sandBoxID =
      "AVZHH3-rASeJ1CS6C08MkrX11WmvSVK8wHNDx_w0wqzqzstBKZ44NcyCyIA_ZoRCK8YjWxps9Js9JN2A";
    script.src = `https://www.paypal.com/sdk/js?client-id=${sandBoxID}&currency=EUR`;
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      setScriptLoaded(true);
      console.log("addpaypal");
    };
    document.body.appendChild(script);
    console.log("addscript");
  };

  useEffect(() => {
    // const addPaypalBtn = () => {
    if (scriptLoaded) return;

    console.log(data.price);
    console.log("riwor");
    if (!data.price) return;
    window.paypal
      ?.Buttons({
        createOrder: (data: any, actions: any, err: any) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: data.selectedProduct,
                amount: {
                  currency_code: "EUR",
                  value: data.selectedProduct == "Gwaja Box" ? 29.5 : 33.5,
                },
                // shipping: {
                //   address: {
                //     address_line_1: data.street,
                //     address_line_2: data.aptNum,
                //     admin_area_2: "Leinfelden",
                //     admin_area_1: "BW",
                //     postal_code: "70771",
                //     country_code: "DE",
                //   },
                // },
              },
            ],
          });
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();

          console.log(order);
          console.log(data);
          setPaid(true);
          addOrderToFirebase();
        },
        onError: (err: any) => {
          console.log(err);
        },
      })
      .render(paypal.current);
    // };
  }, [scriptLoaded]);

  const addOrderToFirebase = () => {
    // 결제 성공 시
    const fileListRef = collection(db, "order");
    addDoc(fileListRef, {
      //paypal 결제 후 결제내용도 포함하기
      // nameOntheBox: null,
      price: data.selectedProduct == "Gwaja Box" ? 29.5 : 33.5,
      product: data.selectedProduct,
      tracking: null,
      createDate: new Date(),
      sender: data.sender,
      receiver: data.receiver,
      country: data.country,
      additional: null,
      street: data.street,
      aptNum: data.aptNum,
      postalCode: data.postalCode,
      city: data.city,
      county: data.county,
    })
      .then((docRef) => {
        console.log("document ID: " + docRef.id); //요걸로 이메일 보내기, my order에서 조회 가능
        // alert("order successful");
        setOrderID(docRef.id);
      })
      .catch((err) => {
        alert("Error : " + err);
      });
  };

  return (
    <div className="page checkOut">
      <span>{data.receiver}</span>
      <span>{data.price}</span>
      {!paid ? (
        <div ref={paypal} className="paypal"></div>
      ) : (
        <div>
          Order Successful!
          <span>Order ID : {orderID}</span>
        </div>
      )}
    </div>
  );
}
export default CheckOut;

// import React, { useEffect, createRef, useState } from "react";
// import { useParams } from "react-router-dom";

// function CheckOut() {
//   const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);
//   const paypal = createRef<HTMLDivElement>();

//   useEffect(() => {
//     addPaypalScript();
//   }, []);

//   const addPaypalScript = () => {
//     if (window.paypal || scriptLoaded) {
//       // setScriptLoaded(true);
//       return;
//     }
//     const script = document.createElement("script");
//     const clientID =
//       "ARK_MD0CQum3XwUdhoOaAgAVUbV9r7Q928WHMaEQ6GM8R5yQqAskyLqfDVYKntfXN4kxW3z7anc8KhJL";
//     const sandBoxID =
//       "AVZHH3-rASeJ1CS6C08MkrX11WmvSVK8wHNDx_w0wqzqzstBKZ44NcyCyIA_ZoRCK8YjWxps9Js9JN2A";
//     script.src = `https://www.paypal.com/sdk/js?client-id=${sandBoxID}&currency=EUR`;
//     script.type = "text/javascript";
//     script.async = true;
//     script.onload = () => {
//       setScriptLoaded(true);
//     };
//     document.body.appendChild(script);
//   };

//   useEffect(() => {
//     window.paypal
//       ?.Buttons({
//         createOrder: (data: any, actions: any, err: any) => {
//           return actions.order.create({
//             intent: "CAPTURE",
//             purchase_units: [
//               {
//                 description: "Cool looking table",
//                 amount: {
//                   currency_code: "EUR",
//                   value: productList.find(
//                     (el) => el.product === selectedProduct
//                   )?.price,
//                 },
//                 shipping: {
//                   address: {
//                     address_line_1: "Bussardweg",
//                     address_line_2: "11",
//                     admin_area_2: "Leinfelden",
//                     admin_area_1: "BW",
//                     postal_code: "70771",
//                     country_code: "DE",
//                   },
//                 },
//               },
//             ],
//           });
//         },
//         onApprove: async (data: any, actions: any) => {
//           const order = await actions.order.capture();

//           console.log(order);
//           console.log(data);
//         },
//         onError: (err: any) => {
//           console.log(err);
//         },
//       })
//       .render(paypal.current);
//   }, [scriptLoaded]);
//   return <div ref={paypal} className="paypal"></div>;
// }

// export default CheckOut;
