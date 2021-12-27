import "./index.less";

export default () => {
  return (
    <div className="App">
      <ul className="scroll-ul">
        {arr.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
};

var arr = [
  "sda",
  "23123",
  "aa",
  "zzx",
  "asdda",
  "sfasf",
  "gdfs",
  "sda",
  "23123",
  "aa",
  "zzx",
  "asdda",
  "sfasf",
  "gdfs",
  "sda",
  "23123",
  "aa",
  "zzx",
  "asdda",
  "sfasf",
  "gdfs"
];
