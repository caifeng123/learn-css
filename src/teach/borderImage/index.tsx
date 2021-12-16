import "./index.less";

export default () => {
  return (
    <div className="App">
      <div id="border-radius">
        <div>造椭圆 控制50% / 50% 参数</div>
        <div>前:水平半径 后：垂直半径</div>
      </div>
      <div id="top-half-circle">
        上半圆：斜杠前后的数实际上代表4个方向，类似margin缩写
        <br />
        10% 50% / 50% === 10% 50% 10% 50% / 50% 50% 50% 50%
      </div>
      <div id="left-half-circle">左半圆</div>
      <div id="sugar1">
        糖果1
        <br />
        控制border-radius的几个边
      </div>
      <div id="sugar2">
        糖果2
        <br />
        控制border-radius的几个边
      </div>
    </div>
  );
};
