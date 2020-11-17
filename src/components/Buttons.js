import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

const Button = styled.button`
  background-color: ${defaultTheme.primaryColor};
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 8px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Cabin", sans-serif;
`;

const PrimaryButton = styled(Button)`
  border: none;
  color: white;
`;

export const SeccondaryButton = styled(Button)`
  border: 3px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};
  background: none;
`;

export const TertiaryButton = styled(Button)`
  border: none;
  background: none;
  color: ${defaultTheme.primaryColor};
`;

export default PrimaryButton;
