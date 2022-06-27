import "./index.less";

export default () => {
  return (
    <div className="App">
      <div>
        <div>
          使用target进行匹配锚点定位，沙盒体验不是很好，可放在html中运行
        </div>
        正文、正文、正文、正文、正文、正文、正文、正文、正文、正文、正文、正文、正文、正文、正文
        <div hidden id="article"></div>
        <a href="#article" data-open="true">
          阅读更多
        </a>
        <p className="ac-more" data-open="false">
          更多内容、更多内容、更多内容、更多内容、更多内容、更多内容
        </p>
        <a href="" data-open="false">
          收起
        </a>
      </div>
    </div>
  );
};
