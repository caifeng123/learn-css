import "./index.less";

export default () => {
  return (
    <div className="App">
      <div>
        <h4>css实现计数</h4>
        counter-reset counter-increment content 三者配合
        <br />
        <input type="checkbox" id="topic1" />
        <label htmlFor="topic1" className="cs-topic">
          科技
        </label>
        <input type="checkbox" id="topic2" />
        <label htmlFor="topic2" className="cs-topic">
          体育
        </label>
        <input type="checkbox" id="topic3" />
        <label htmlFor="topic3" className="cs-topic">
          军事
        </label>
        <input type="checkbox" id="topic4" />
        <label htmlFor="topic4" className="cs-topic">
          娱乐
        </label>
        <input type="checkbox" id="topic5" />
        <label htmlFor="topic5" className="cs-topic">
          动漫
        </label>
        <input type="checkbox" id="topic6" />
        <label htmlFor="topic6" className="cs-topic">
          音乐
        </label>
        <input type="checkbox" id="topic7" />
        <label htmlFor="topic7" className="cs-topic">
          电影
        </label>
        <input type="checkbox" id="topic8" />
        <label htmlFor="topic8" className="cs-topic">
          生活
        </label>
        <p>
          您已选择<span className="cs-topic-counter"></span>个话题。
        </p>
      </div>
    </div>
  );
};
