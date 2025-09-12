import styled, { css } from "styled-components";
import type { CheckboxContainerProps, CheckboxProps } from "./checkbox.types";
import { filterProps } from "@/helpers/types/style.types";
import { styles } from "@/helpers";
import { Label } from "@/components/font";

export const Container = filterProps<CheckboxContainerProps>("div")`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    &.mickey-click * {${({ disabled }) =>
      disabled
        ? css`
            cursor: not-allowed !important;
            pointer-events: none !important;
            touch-action: none !important;
          `
        : css`
            pointer-events: initial;
            touch-action: initial;
            cursor: pointer;
          `}
       
    }

    & .mickey_hidden_checkbox {
        position: fixed;
        left: -1000px;
        top: -1000px;
        opacity: 0;
        z-index: -1;
    }

    &:hover .mickey-checkbox,
    &:active .mickey-checkbox {
        border-color: ${styles.surface.border.custom.color.light};
        background: ${styles.color.primary.contrast};
        ${({ disabled }) =>
          !disabled
            ? css`
                box-shadow: 0 0 4px ${styles.color.primary.light},
                  0 0 8px ${styles.color.primary.light};
              `
            : css`
                cursor: not-allowed !important;
                pointer-events: none !important;
                touch-action: none !important;
              `}; 
    }

    &:hover .mickey-checkbox-label,
    &:active .mickey-checkbox-label { 
        color: ${({ disabled }) => !disabled && styles.color.primary.main};
    } 


  ${(props) =>
    props.disabled &&
    css`
      color: ${styles.color.disabled.text} !important;
      cursor: not-allowed !important;
      pointer-events: none !important;
      touch-action: none !important;

      & .mickey-checkbox {
        background-color: ${styles.color.disabled.background} !important;
        border-color: ${styles.color.disabled.border} !important;
        color: ${styles.color.disabled.text} !important;
        fill: ${styles.color.disabled.text} !important;
        cursor: not-allowed !important;
        pointer-events: none !important;
        touch-action: none !important;
      }

      & .mickey-check-icon {
        &.mickey-is-checked {
          background-color: ${styles.color.disabled.onBackground} !important;
        }
      }
    `}
`;

export const CheckboxContainer = filterProps<CheckboxProps>("div")`
  position: relative;
  width: 14px;
  height: 14px;
  flex: 0 0 14px;
  border: ${styles.surface.border.default.solidLightThin};
  background: ${styles.color.primary.contrast};
  border-radius: ${styles.radius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s, background-color 0.3s;

  & .mickey-check-icon {
    width: 10px;
    height: 10px;
    border-radius: ${styles.radius.sm};

        &.mickey-is-checked {
    background-color: ${styles.color.primary.main};
  }
  }

  &:checked {
    background-color: ${styles.color.primary.main};
    border-color: ${styles.color.primary.main};
  }

  &:focus {
    border-color: ${styles.color.primary.main};
  }

  &:disabled {
    background-color: var(--color-gray-light6);
    border-color: var(--color-gray-light4);
  }

  &.mickey-is-checked {
    border-color: ${styles.color.primary.main}; 
    & .mickey-check-icon {
      color: ${styles.color.primary.main};
      fill: ${styles.color.primary.main};
      & svg {
        color: ${styles.color.primary.main};
        fill: ${styles.color.primary.main};
      }
    }
  }
 
`;

export const Checked = styled.div``;

export const CheckboxLabel = filterProps<CheckboxProps>(Label)`
    font-size: 14px;
    letter-spacing: 0.00825rem;
    color: ${styles.text.primary};

    &.mickey-is-checked {
      color: ${styles.text.primary}; 
    }
`;
