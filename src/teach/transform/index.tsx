import "./index.less";

export default () => {
  return (
    <div className="App">
      复杂图形优先考虑clip-path，文字换行问题使用border-image+svg
      <div id="Rhomboid">
        平行四边形 直接skew会导致字体也变斜 使用伪元素，注意其层级高
      </div>
      <div id="clip-path-rhombus">菱形</div>
      <div id="clip-path-eight-edge">8边形</div>
      <div id="threeD-trapezoid">3d实现梯形,修改通过transform-origin</div>
      <div id="conic-gradient">饼图 角向量</div>
    </div>
  );
};
