/**
 * @file 示例入口
 * @author caifeng01
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "./introduction";
import "antd/dist/antd.css";
import "./index.less";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Introduction />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
