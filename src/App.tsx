import { useRef } from "react";
import "./App.css";

const App = () => {
  // const [styleKey, setStyleKey] = useState("");

  const boxRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const styleAttributes = Object.keys({ ...circleRef?.current?.style });
  console.log(styleAttributes);

  return (
    <div className={"container"}>
      <header className={"title"}>Browser Rendering</header>
      <div className={"box"} ref={boxRef}>
        <div className={"circle"} ref={circleRef} />
      </div>
      {/*<form className={"inputWrapper"}>*/}
      {/*  <label htmlFor={"styleKey"} className={"label"}>*/}
      {/*    Circle Style 직접 바꿔보기*/}
      {/*  </label>*/}
      {/*  <input id={"styleKey"} className={"input"} />*/}
      {/*  <button type={"submit"} className={"button"}>*/}
      {/*    적용*/}
      {/*  </button>*/}
      {/*</form>*/}
      <div className={"buttonWrapper"}>
        <button
          className={"buttonAlignmentItems"}
          onClick={() => {
            boxRef?.current?.style.setProperty("align-items", "flex-start");
            setTimeout(
              () => boxRef?.current?.style.setProperty("align-items", "center"),
              5000,
            );
          }}
        >
          align-items 을 변경하는 경우
        </button>
        <button
          className={"buttonOpacity"}
          onClick={() => {
            circleRef?.current?.style.setProperty("opacity", "0");
            setTimeout(
              () => circleRef?.current?.style.setProperty("opacity", "1"),
              5000,
            );
          }}
        >
          opacity 을 변경하는 경우
        </button>
        <button
          className={"buttonBackgroundColor"}
          onClick={() => {
            circleRef?.current?.style.setProperty("background-color", "purple");
            setTimeout(
              () =>
                circleRef?.current?.style.setProperty(
                  "background-color",
                  "white",
                ),
              5000,
            );
          }}
        >
          background-color 을 변경하는 경우
        </button>
      </div>
    </div>
  );
};

export default App;
