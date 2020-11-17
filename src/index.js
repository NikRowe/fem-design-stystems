import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {
  SeccondaryButton,
  TertiaryButton,
} from "./components/Buttons";

const App = () => {
  return (
    <div>
      <PrimaryButton> Hello World </PrimaryButton>
      <SeccondaryButton>Sup World</SeccondaryButton>
      <TertiaryButton>Goodbye World</TertiaryButton>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
