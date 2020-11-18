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
      <PrimaryButton modifiers="small"> Hello World </PrimaryButton>
      <SeccondaryButton modifiers={["large"]}>Sup World</SeccondaryButton>
      <TertiaryButton>Goodbye World</TertiaryButton>
      <GlobalStyle />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
