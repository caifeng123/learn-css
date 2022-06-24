import { useEffect } from "react";
import "./index.less";

export default () => {
  useEffect(() => {
    document.querySelector("#checkbox1").checked = true;
    document.querySelector("#no-checked").checked = true;
  }, []);
  return (
    <div className="App">
      <h1>
        红框代表匹配上[checked]属性选择器 宽高200px代表匹配上:checked伪类选择器
      </h1>
      <div checked>
        div 默认带有checked状态, 原生html此处会显示红框，但react会过滤属性
      </div>
      <div id="no-checked">div 默认不带checked状态，使用js添加</div>
      <br />
      <input type="checkbox" id="checkbox1" />
      表单项checkbox1使用js选中
      <input type="checkbox" checked />
      表单项checkbox2默认被选中
      <br />
      <section>
        由demo可发现
        <br />
        [checked]选择器可选择所有项,但只能预设为选中项
        <br />
        :checked 选择器只可应用于表单项,可使用js修改匹配
      </section>
    </div>
  );
};
