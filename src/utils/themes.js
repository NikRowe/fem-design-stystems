import { seafoamGreen, neutral } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: seafoamGreen[500],
  primaryColorHover: seafoamGreen[400],
  primaryColorActive: seafoamGreen[300],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  primaryFont,
};
