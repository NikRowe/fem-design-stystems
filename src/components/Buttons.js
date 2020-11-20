import styled from "styled-components";
import { typeScale, headerFont } from "../utils";
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
  warning: ({ props }) => `
    color: ${props.theme.status.warningColor};

    &:hover, &:focus {
      background-color: ${props.theme.status.warningColorHover};
      outline: ${props.theme.status.warningColorHover};
    }

    &:active { 
      background-color: ${props.theme.status.warningColorActive};
      border-color: ${props.theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: ({ props }) => `
   background-color: ${props.theme.status.warningColor}; 
   color: white
  `,
  seccondaryButtonWarning: ({ props }) => `
    backround: none;
    border: 2px solid ${props.theme.status.warningColor};
  `,

  tertiaryButtonWarning: ({ props }) => `
    background: none;
  `,
  success: ({ props }) => `
    color: ${props.theme.status.successColor};

    &:hover, &:focus {
      background-color: ${props.theme.status.successColorHover};
      outline: ${props.theme.status.successColorHover};
    }

    &:active { 
      background-color: ${props.theme.status.successColorActive};
      border-color: ${props.theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: ({ props }) => `
   background-color: ${props.theme.status.successColor}; 
   color: white
  `,
  seccondaryButtonSuccess: ({ props }) => `
    backround: none;
    border: 2px solid ${props.theme.status.successColor};
  `,

  tertiaryButtonSuccess: ({ props }) => `
    background: none;
  `,
  error: ({ props }) => `
    color: ${props.theme.status.errorColor};

    &:hover, &:focus {
      background-color: ${props.theme.status.errorColorHover};
      outline: ${props.theme.status.errorColorHover};
    }

    &:active { 
      background-color: ${props.theme.status.errorColorActive};
      border-color: ${props.theme.status.errorColorActive};
    }
  `,
  primaryButtonError: ({ props }) => `
   background-color: ${props.theme.status.errorColor}; 
   color: white
  `,
  seccondaryButtonError: ({ props }) => `
    backround: none;
    border: 2px solid ${props.theme.status.errorColor};
  `,

  tertiaryButtonError: ({ props }) => `
    background: none;
  `,
};

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 8px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;
  &:hover {
    background-color: ${(props) => props.theme.primaryColorHover};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryColorHover};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${(props) => props.theme.primaryColorActive};
    border-color: ${(props) => props.theme.primaryColorActive};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  color: ${(props) => props.theme.textColorInverted};
  background-color: ${(props) => props.theme.primaryColor};
  border: none;

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SeccondaryButton = styled(Button)`
  border: 3px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  background: none;
  &:disabled {
    background: none;
    border-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  border: none;
  background: none;
  color: ${(props) => props.theme.primaryColor};

  &:disabled {
    background: none;
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
