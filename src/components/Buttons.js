import styled from "styled-components";

const primarySeafoam = "#59F0C7";

const Button = styled.button`
  background-color: ${primarySeafoam};
  padding: 12px 24px;
  font-size: 1rem;
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
  border: 3px solid ${primarySeafoam};
  color: ${primarySeafoam};
  background: none;
`;

export const TertiaryButton = styled(Button)`
  border: none;
  background: none;
  color: ${primarySeafoam};
`;

export default PrimaryButton;
