import "./index.less";
const list = new Array(10).fill("");
export default () => {
  return (
    <div className="App">
      <h1>
        :nth-child 除了3n这种倍数odd、even匹配奇偶
        <br />
        <br />
        还能用来匹配范围!! 对于demo显示 1-3 4-7 8-9不同颜色
      </h1>
      <div className="nc-ol">
        {list.map((x, index) => (
          <div className="nc-li">{index + 1}</div>
        ))}
      </div>
    </div>
  );
};
