import { useState } from "react";
import "./index.less";

export default () => {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <div className={"back " + (show ? "show" : "")}>
        毛玻璃毛玻璃毛玻璃毛玻璃毛玻
        <br />
        璃毛玻璃毛玻璃毛玻璃毛玻璃毛玻璃 毛玻璃毛玻璃毛玻璃毛玻璃毛玻
        <br />
        璃毛玻璃毛玻璃毛玻璃毛玻璃毛玻璃 毛玻璃毛玻璃毛玻璃毛玻璃毛玻
        <br />
        璃毛玻璃毛玻璃毛玻璃毛玻璃毛玻璃 毛玻璃毛玻璃毛玻璃毛玻璃毛玻
        <br />
        璃毛玻璃毛玻璃毛玻璃毛玻璃毛玻璃 毛玻璃毛玻璃毛玻璃毛玻璃毛玻
        <br />
        璃毛玻璃毛玻璃毛玻璃毛玻璃毛玻璃 毛玻璃毛玻璃毛玻璃毛玻璃毛玻
        <br />
        璃毛玻璃毛玻璃毛玻璃毛玻璃毛玻璃 毛玻璃毛玻璃毛玻璃毛玻璃毛玻
        <br />
        璃毛玻璃毛玻璃毛玻璃毛玻璃毛玻璃 毛玻璃毛玻璃毛玻璃毛玻璃毛玻
        <br />
        璃毛玻璃毛玻璃毛玻璃毛玻璃毛玻璃
      </div>
      <div
        className="popup"
        onClick={() => {
          setShow(!show);
        }}
        style={{ display: show ? "block" : "none" }}
      >
        弹出框
      </div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        开
      </button>
    </div>
  );
};
