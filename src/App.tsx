import { useRef } from "react";
import "./App.css";

const App = () => {
  const btnAlignmentRef = useRef<HTMLButtonElement>(null);
  const btnBorderRightRef = useRef<HTMLButtonElement>(null);
  const btnBgRef = useRef<HTMLButtonElement>(null);
  const btnOpacityRef1 = useRef<HTMLButtonElement>(null);
  const spanOpacityRef1 = useRef<HTMLSpanElement>(null);
  const btnOpacityRef2 = useRef<HTMLButtonElement>(null);
  const spanOpacityRef2 = useRef<HTMLSpanElement>(null);

  return (
    <div className={"container"}>
      <header className={"title"}>Browser Rendering</header>
      <div className={"buttonWrapper"}>
        <button
          className={"buttonAlignmentItems"}
          ref={btnAlignmentRef}
          onClick={() => {
            btnAlignmentRef?.current?.style.setProperty(
              "align-items",
              "flex-start",
            );
            btnAlignmentRef?.current?.style.setProperty(
              "cursor",
              "not-allowed",
            );
            setTimeout(() => {
              btnAlignmentRef?.current?.style.setProperty(
                "align-items",
                "center",
              );
              btnAlignmentRef?.current?.style.setProperty("cursor", "pointer");
            }, 5000);
          }}
        >
          <span>align-items 을 변경하는 경우</span>
        </button>
        <button
          className={"buttonBorderRightItems"}
          ref={btnBorderRightRef}
          onClick={() => {
            btnBorderRightRef?.current?.style.setProperty(
              "border-right-color",
              "blue",
            );
            btnBorderRightRef?.current?.style.setProperty(
              "cursor",
              "not-allowed",
            );
            setTimeout(() => {
              btnBorderRightRef?.current?.style.setProperty(
                "border-right-color",
                "white",
              );
              btnBorderRightRef?.current?.style.setProperty(
                "cursor",
                "pointer",
              );
            }, 5000);
          }}
        >
          <span>border-right-color 을 변경하는 경우</span>
        </button>
        <button
          ref={btnBgRef}
          className={"buttonBackgroundColor"}
          onClick={() => {
            btnBgRef?.current?.style.setProperty("background", "blue");
            btnBgRef?.current?.style.setProperty("cursor", "not-allowed");
            setTimeout(() => {
              btnBgRef?.current?.style.setProperty("cursor", "pointer");
              btnBgRef?.current?.style.setProperty(
                "background",
                "linear-gradient(135deg, #badc58, #6ab04c)",
              );
            }, 5000);
          }}
        >
          <span> background-color 을 변경하는 경우</span>
        </button>
        <button
          className={"buttonOpacity1"}
          ref={btnOpacityRef1}
          onClick={() => {
            spanOpacityRef1?.current?.style.setProperty("opacity", "0");
            btnOpacityRef1?.current?.style.setProperty("cursor", "not-allowed");
            setTimeout(() => {
              spanOpacityRef1?.current?.style.setProperty("opacity", "0.99");
              btnOpacityRef1?.current?.style.setProperty("cursor", "pointer");
            }, 5000);
          }}
        >
          <span ref={spanOpacityRef1}>
            opacity 을 변경하는 경우
            <br />: 0.99 ➡️ 0 ➡️ 0.99
          </span>
        </button>
        <button
          className={"buttonOpacity2"}
          ref={btnOpacityRef2}
          onClick={() => {
            spanOpacityRef2?.current?.style.setProperty("opacity", "0");
            btnOpacityRef2.current?.style.setProperty("cursor", "not-allowed");
            setTimeout(() => {
              spanOpacityRef2?.current?.style.setProperty("opacity", "1");
              btnOpacityRef2?.current?.style.setProperty("cursor", "pointer");
            }, 5000);
          }}
        >
          <span ref={spanOpacityRef2}>
            opacity 을 변경하는 경우
            <br />: 1 ➡️ 0 ➡️ 1
          </span>
        </button>
      </div>
    </div>
  );
};

export default App;
