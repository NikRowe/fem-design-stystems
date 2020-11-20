import styled from "styled-components";
import { defaultTheme, typeScale, headerFont } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header3};
    font-family: ${headerFont};
    padding: 16px 24px;
  `,
  warning: () => `
    color: ${defaultTheme.status.warningColor};

    &:hover, &:focus {
      background-color: ${defaultTheme.status.warningColorHover};
      outline: ${defaultTheme.status.warningColorHover};
    }

    &:active { 
      background-color: ${defaultTheme.status.warningColorActive};
      border-color: ${defaultTheme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: () => `
   background-color: ${defaultTheme.status.warningColor}; 
   color: white
  `,
  seccondaryButtonWarning: () => `
    backround: none;
    border: 2px solid ${defaultTheme.status.warningColor};
  `,

  tertiaryButtonWarning: () => `
    background: none;
  `,
  success: () => `
    color: ${defaultTheme.status.successColor};

    &:hover, &:focus {
      background-color: ${defaultTheme.status.successColorHover};
      outline: ${defaultTheme.status.successColorHover};
    }

    &:active { 
      background-color: ${defaultTheme.status.successColorActive};
      border-color: ${defaultTheme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: () => `
   background-color: ${defaultTheme.status.successColor}; 
   color: white
  `,
  seccondaryButtonSuccess: () => `
    backround: none;
    border: 2px solid ${defaultTheme.status.successColor};
  `,

  tertiaryButtonSuccess: () => `
    background: none;
  `,
  error: () => `
    color: ${defaultTheme.status.errorColor};

    &:hover, &:focus {
      background-color: ${defaultTheme.status.errorColorHover};
      outline: ${defaultTheme.status.errorColorHover};
    }

    &:active { 
      background-color: ${defaultTheme.status.errorColorActive};
      border-color: ${defaultTheme.status.errorColorActive};
    }
  `,
  primaryButtonError: () => `
   background-color: ${defaultTheme.status.errorColor}; 
   color: white
  `,
  seccondaryButtonError: () => `
    backround: none;
    border: 2px solid ${defaultTheme.status.errorColor};
  `,

  tertiaryButtonError: () => `
    background: none;
  `,
};

const Button = styled.button`
  padding: 8px 12px;
  color: white;
  font-size: ${typeScale.paragraph};
  border-radius: 8px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;
  &:hover {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorOnPrimary};
  }
  &:focus {
    outline: 3px solid ${defaultTheme.primaryColorHover};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${defaultTheme.primaryColorActive};
    border-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.textColorOnPrimary};
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SeccondaryButton = styled(Button)`
  border: 3px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};
  background: none;
  &:disabled {
    background: none;
    border-color: ${defaultTheme.disabled};
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  border: none;
  background: none;
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;
