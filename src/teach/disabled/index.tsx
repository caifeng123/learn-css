import "./index.less";

export default () => {
  return (
    <div className="App">
      <div style={{ fontSize: 20 }}>
        对于:disabled 伪类选择器，只有input textarea select标签可以生效匹配
        <br />
        当前设置伪类设置了背景蓝色文字灰色，我们发现虽然设置了a标签但没有匹配生效!
      </div>
      <br />
      <a>无href 无disabled</a>
      <br />
      <a href>有href 无disabled</a>
      <br />
      <a href disabled>
        有href 有disabled
      </a>
      <br />
      <input disabled value="有href 有disabled" />
    </div>
  );
};
