import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Minesweeper from "./containers/Minesweeper";

/**** PUBLIC API METHODS ****/

function mount(
  element = document.querySelector("#minesweeper-app"),
  props,
  externalState,
  callback = () => {}
) {
  render(
    <Minesweeper externalState={externalState} {...props} />,
    element,
    callback
  );
}

function unmount(
  element = document.querySelector("#minesweeper-app"),
  callback = () => {}
) {
  const wasMounted = unmountComponentAtNode(element);
  callback(wasMounted);
}

window.wixDOM = {
  ...window.wixDOM,
  minesweeper: { mount, unmount }
};

/**** END PUBLIC API METHODS ****/

window.wixDOM.minesweeper.theme = {
  gridBgColor: "#eb4d55",
  cellBgColor: "#FBDCDE",
  cellClickedBgColor: "#CCADAF",
  cellHoverBgColor: "#332C2D",
  btnBgColor: "#fff",
  btnHoverBgColor: "#FBDCDE",
  configBgColor: "#f6e1e1",
  screenBgColor: "#333"
};
const externalProps = {
  appVersion: 1,
  externalTheme: { ...window.wixDOM.minesweeper.theme }
};
const element = document.querySelector("#minesweeper-app");
window.wixDOM.minesweeper.mount(element, externalProps);
