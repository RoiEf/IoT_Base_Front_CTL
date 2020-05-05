import { h, Fragment } from "preact";

const loca = window.location.hostname;
// const port = 80;

export const ApiAddressVisual = () => {
  return <Fragment>IoT Address: {loca}</Fragment>;
};
