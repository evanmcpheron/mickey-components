import { css } from "styled-components";
import type {
  TextareaContainerProperties,
  TextareaProps,
} from "./textarea.types";
import { filterProps } from "@/helpers/types/style.types";
import { styles } from "@/helpers";

export const InputWrapper = filterProps<TextareaContainerProperties>("div")`
  position: relative;
  display: flex;
  align-items: center;
  border: ${styles.surface.border.default.solidLightThin};
  border-radius: ${styles.radius.md};
  background: ${styles.color.primary.contrast}; 
  overflow: hidden;
  width: calc(100% - 2px);

  &[data-focus="true"] {
    border-color: ${styles.color.primary.main};
    background: ${styles.color.primary.contrast};
    border-width: 2px;
    width: calc(100% - 4px);
    box-shadow: 0 0 4px ${styles.color.primary.light}, 0 0 8px ${
  styles.color.primary.light
};
  }

  textarea {
    background-color: ${styles.color.primary.contrast};
    color: ${styles.text.primary};
  }


  &[data-error="true"] {
    border-color: red;
    background: ${styles.color.primary.contrast};
    box-shadow: 0 0 4px red, 0 0 8px red;

    & input {
      color: var(--color-red-dark) !important;


      &::selection,
      & *::selection {
        background: var(--color-red-dark) !important;
        color: ${styles.color.primary.contrast} !important;
      } 
    }
  } 

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${styles.color.disabled.background} !important;
      border-color: ${styles.color.disabled.border} !important;
      color: ${styles.color.disabled.text} !important;
      cursor: not-allowed !important;
      pointer-events: none !important;
      touch-action: none !important;
      -webkit-text-fill-color: ${styles.color.disabled.text} !important;

      &::selection,
      & *::selection {
        background-color: ${styles.color.disabled.background} !important;
        color: ${styles.color.disabled.text} !important;
      }

      &::placeholder,
      & *::placeholder {
        color: ${styles.color.disabled.text} !important;
      }

      &:-webkit-autofill,
      & *:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px ${styles.color.primary.contrast} inset !important;
        -webkit-text-fill-color: ${styles.color.disabled.text} !important;
      }
      & * {
        background-color: ${styles.color.disabled.background} !important;
        border-color: ${styles.color.disabled.border} !important;
        color: ${styles.color.disabled.text} !important;
        fill: ${styles.color.disabled.text} !important;
        cursor: not-allowed !important;
        pointer-events: none !important;
        touch-action: none !important;
        -webkit-text-fill-color: ${styles.color.disabled.text} !important;

        &::selection,
        & *::selection {
          background-color: ${styles.color.disabled.background} !important;
          color: ${styles.color.disabled.text} !important;
        }

        &::placeholder,
        & *::placeholder {
          color: ${styles.color.disabled.text} !important;
        }

        &:-webkit-autofill,
        & *:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 30px ${styles.color.primary.contrast} inset !important;
          -webkit-text-fill-color: ${styles.color.disabled.text} !important;
        }
      }
    `}
 
`;

export const InputComponent = filterProps<TextareaProps>("textarea")`
  padding: 8px;
  border: none;
  outline: none;
  font-size: 14px;
  color: ${styles.text.primary};
  flex-grow: 1;
  resize: none;


  ${({ height }) =>
    height
      ? css`
          height: calc(${height} - 2px);

          &[data-focus="true"] {
            border-color: ${styles.color.primary.main};
            background: ${styles.color.primary.contrast};
            border-width: 2px;
            width: calc(100% - 4px);
            height: calc(${height} - 2px);
            box-shadow: 0 0 4px ${styles.color.primary.light},
              0 0 8px ${styles.color.primary.light};
          }
        `
      : css`
          height: calc(100px - 2px);

          &[data-focus="true"] {
            border-color: ${styles.color.primary.main};
            background: ${styles.color.primary.contrast};
            border-width: 2px;
            width: calc(100% - 4px);
            height: calc(100% - 2px);
            box-shadow: 0 0 4px ${styles.color.primary.light},
              0 0 8px ${styles.color.primary.light};
          }
        `}

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    box-shadow: 0 0 0 30px ${styles.color.primary.contrast} inset;
    -webkit-text-fill-color: ${styles.text.primary};
  }
     
  -webkit-box-shadow: none; 
  box-shadow: none; 

  &::placeholder {
    color: ${styles.text.placeholder}  !important;
  }
  
  :-webkit-autofill::placeholder,
  :-webkit-autofill:hover::placeholder,
  :-webkit-autofill:focus::placeholder,
  :-webkit-autofill:active::placeholder {
   color: ${styles.text.placeholder}  !important;
  }
     

  &.error { 
    color: var(--color-red-dark) !important;

    &::selection {
      background: var(--color-red-dark) !important;
      color: ${styles.color.primary.contrast} !important;
    } 
  }
 
`;

export const IconWrapper = filterProps("div")`
  position: absolute;
  top: 5px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 20px;
  margin-right: 6px;
  cursor: pointer;
  & * {
    cursor: pointer;
  }

  &:last-child) {
    margin-right: 12px;
  }
`;
