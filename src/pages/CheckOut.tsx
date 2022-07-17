import React, { useState, useEffect, createRef } from "react";

function CheckOut({
  selectedProduct,
  price,
}: {
  selectedProduct: string;
  price: number;
}) {
  console.log("yss!!  " + selectedProduct + price);
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);

  useEffect(() => {
    addPaypalScript();
  }, []);
  const paypal = createRef<HTMLDivElement>();

  const addPaypalScript = () => {
    if (window.paypal || scriptLoaded) {
      // setScriptLoaded(true);
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
    };
    document.body.appendChild(script);
  };

  useEffect(() => {
    window.paypal
      ?.Buttons({
        createOrder: (data: any, actions: any, err: any) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "EUR",
                  value: price,
                },
                shipping: {
                  address: {
                    address_line_1: "Bussardweg",
                    address_line_2: "11",
                    admin_area_2: "Leinfelden",
                    admin_area_1: "BW",
                    postal_code: "70771",
                    country_code: "DE",
                  },
                },
              },
            ],
          });
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();

          console.log(order);
          console.log(data);
        },
        onError: (err: any) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [scriptLoaded]);

  return (
    <div>
      <div ref={paypal} className="paypal"></div>
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
