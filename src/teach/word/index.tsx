import "./index.less";
const code = `const a = () => {
  const temp = 'cc';
  return temp + 'nice';
}`;

export default () => {
  return (
    <div className="App">
      <div id="sample">
        正常情况 + 底线
        <br />
        Simple, scalable state management. Simple, scalable state management.
        Documentation{" "}
        <span className="dashed">for older unsupported ppap,gqpy</span>, but be
        sure to read about current documentation.
      </div>
      <div id="hyphens">
        hyphens连字符
        <br />
        Simple, scalable state management. Simple, scalable state management.
        Documentation for older unsupported V4/V5 can be found here, but be sure
        to read about current documentation.
      </div>
      <div id="zebra">
        条纹
        <br />
        Simple, scalable state management. Simple, scalable state management.
        Documentation for older unsupported V4/V5 can be found here, but be sure
        to read about current documentation.
      </div>
      <div id="code-zebra">
        代码条纹
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};
