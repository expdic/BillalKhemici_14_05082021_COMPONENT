import React from "react";
import "./modal.css";

var Modal = function Modal(props) {
  var titleM = props.title; 
  var textM = props.text; 
  var showModal = props.showModal; 

  return React.createElement(
    "div",
    { className: "modalbackground" },
    React.createElement(
      "div",
      {
        className: "modal",
        id: "modal",
      },
      React.createElement(
        "div",
        {
          className: "modalheader",
        },
        React.createElement(
          "span",
          {
            className: "modaltitle",
          },
          titleM
        ),
        React.createElement(
          "span",
          { className: "close", onClick: function onClick() {
              return showModal(false);
            } },
          "X"
        )
      ),
      textM && React.createElement(
        "div",
        {
          className: "modalbody",
        },
        React.createElement("hr", { className: "separation" }),
        React.createElement(
          "div",
          {
            className: "modaltext",
          },
          textM
        )
      )
    )
  );
};

export default Modal;