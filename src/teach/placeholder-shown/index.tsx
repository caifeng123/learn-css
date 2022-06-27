import "./index.less";

export default () => {
  return (
    <div className="App">
      <div>
        <h1>匹配placeholder， 该伪类用来识别 placeholder 被触发时的情况</h1>
        <h2>当 placeholder 不显示时 不会触发！！！placeholder 不显示情况：</h2>
        <h2>- placeholder 设置为空</h2>
        <h2>- 不设置 placeholder</h2>
        <h2>- 设置了 placeholder 但值不空</h2>
        <br />
        <input type="text" className="myinput" placeholder="我是placeholder" />
        <small></small>
        <br />
        <input type="text" className="myinput" placeholder="" />
        <small></small>
        <br />
        <input type="text" className="myinput" placeholder="" />
        <small></small>
      </div>
    </div>
  );
};
