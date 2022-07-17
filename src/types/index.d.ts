export {};

declare global {
  interface Window {
    paypal: any;
  }
  interface paypal {
    Button: any;
  }
}
