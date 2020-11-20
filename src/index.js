import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {
  SeccondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => {
  return (
    <div>
      <PrimaryButton modifiers={["small", "primaryButtonError", "error"]}>
        {" "}
        Hello World{" "}
      </PrimaryButton>
      <SeccondaryButton modifiers={["large", "seccondaryButtonError", "error"]}>
        Sup World
      </SeccondaryButton>
      <TertiaryButton modifiers={["error", "tertiaryButtonError"]}>
        Goodbye World
      </TertiaryButton>
      <GlobalStyle />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
