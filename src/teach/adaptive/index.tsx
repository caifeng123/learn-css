import "./index.less";

export default () => {
  return (
    <div className="">
      <div className="adaptive-out">
        <p>sdasdhsakjdhskahdkashd</p>
        <div className="adaptive-wrapper">
          <img
            src="https://github.com/caifeng123/pictures/blob/master/bVQPkk.png?raw=true"
            alt=""
          />
          <p>height能够自适应高度，width往往会撑满全局</p>
        </div>
        <div className="adaptive-wrapper inline-block">
          <img
            src="https://github.com/caifeng123/pictures/blob/master/bVQPkk.png?raw=true"
            alt=""
          />
          <p>
            往往第一反应想到inline/inline-block,但不会跟着图片大小变化，会跟着最长的元素变化
          </p>
        </div>
        <p>sdasdhsakjdhskahdkashd</p>
        <div className="adaptive-wrapper min-content">
          <img
            src="https://github.com/caifeng123/pictures/blob/master/bVQPkk.png?raw=true"
            alt=""
          />
          <p>使用width: min-content 就能按照最大不可分的元素的显示</p>
        </div>
        <p>sdasdhsakjdhskahdkashd</p>
      </div>
    </div>
  );
};
