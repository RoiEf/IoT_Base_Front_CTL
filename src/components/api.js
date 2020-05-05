import { h, Fragment } from 'preact';

const loca = window.location.hostname;

export const ApiDetails = () => {

    return({address: loca /*, userName: user, pass: password, isAutenticated: autenticated*/});
};

export const ApiAddressVisual = () => {
return(<Fragment>IoT Address: {loca}</Fragment>);
};