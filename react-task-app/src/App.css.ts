import { style } from "@vanilla-extract/css";
import { vars } from "./vars.css";

export const appContainer = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  height: 'max-content',
  width: '100vw',
})

export const board = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
})

export const buttons = style({
  marginTop: 'auto',
  paddingLeft: vars.spacing.big2
})

export { vars };

export const deleteBoardButton = style({
  border: 'none',
  borderRadius: 5,
  width: 'max-content',
  marginTop: 'auto',
  marginLeft: 'auto',
  marginBottom: 'auto',
  fontSize: vars.fontSizing.T4,
  padding: vars.spacing.big2,
  backgroundColor: vars.color.mainFaded,
  cursor: 'pointer',
  opacity: 0.6,
  minWidth: 150,
  ":hover": {
    opacity: 0.8
  }
})

export const loggerButton = style({
  border: 'none',
  borderRadius: 5,
  width: 'max-content',
  marginTop: 'auto',
  marginLeft: '15px',
  marginRight: '30px',
  marginBottom: '30px',
  fontSize: vars.fontSizing.T4,
  padding: vars.spacing.big2,
  backgroundColor: vars.color.mainFaded,
  cursor: 'pointer',
  opacity: 0.6,
  minWidth: 150,
  ":hover": {
    opacity: 0.8
  }
})