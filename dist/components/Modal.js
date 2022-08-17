"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./StyleModal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Modal = _ref => {
  let {
    isShowing,
    hide,
    text
  } = _ref;
  return isShowing ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "modalOverlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modalOverlay__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modalOverlay__wrapper__header"
  }, /*#__PURE__*/React.createElement("h4", null, text), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "modalOverlay__wrapper__header__closeButton",
    onClick: hide
  }, /*#__PURE__*/React.createElement("span", null, "\xD7")))))), document.getElementById('modal-root')) : null;
};

var _default = Modal;
exports.default = _default;