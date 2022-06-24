import "./index.less";

export default () => {
  return (
    <div className="App">
      <h1>点击输入框后，显示图片，通过:focus控制 相邻节点使用 "+" 兄弟符</h1>
      <div>
        <input type="text" placeholder="点我" />
        <img
          src="https://t7.baidu.com/it/u=4162611394,4275913936&fm=193"
          alt=""
          className="big"
        />
      </div>
    </div>
  );
};
