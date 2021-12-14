import "./index.less";

export default function App() {
  return (
    <div className="App">
      <div id="outline-box-shadow">shadow实现多边框,不占空间,可多写</div>
      <div id="outline-outline-radius">
        <div>outline实现多边框虚线,不占空间,可改变线条类型,可控制位置</div>
        <div>border-radius影响 border、shadow、outline</div>
      </div>
      <div id="linear-string">渐变条纹</div>
      <div id="linear-net">网格条纹</div>
      <div id="conic-gradient">角向渐变</div>
      <div id="conic-gradient-chess">角向渐变实现棋盘</div>
    </div>
  );
}
