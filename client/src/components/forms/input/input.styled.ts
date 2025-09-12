import styled, { css } from "styled-components";
import type { MickeyObject } from "@/helpers/types/base.types";
import { filterProps } from "@/helpers/types/style.types";
import type { InputContainerProperties } from "./input.types";
import { styles } from "@/helpers";

export const InputWrapper = filterProps<InputContainerProperties>("div")`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: ${styles.radius.md};
  border: ${styles.surface.border.default.solidLightThin};
  width: calc(100% - 2px);
  overflow: hidden;
  background: ${styles.color.primary.contrast};
  height: 40px;

  &[data-focus="true"] {
    border-color: ${styles.color.primary.main};
    background: ${styles.color.primary.contrast};
    box-shadow: 0 0 4px ${styles.color.primary.light},
      0 0 8px ${styles.color.primary.light};
  }

  input {
    background: ${styles.color.primary.contrast};
  }

  &[data-focus="true"]:not(.mickey-date-input) {
    border-color: ${styles.color.primary.main};
    border-width: 2px;
    width: calc(100% - 4px);
    height: calc(40px - 2px);
  }

  &[data-error="true"]:not(.mickey-date-input) {
    border-color: var(--error-light);
    background: ${styles.color.primary.contrast};

    & input {
      color: var(--color-red-dark) !important;

      &::selection,
      & *::selection {
        background: var(--color-red-dark) !important;
        color: ${styles.text.primary} !important;
      }
    }
  }

  ${(props: MickeyObject) =>
    props.disabled &&
    css`
      background-color: ${styles.color.disabled.background} !important;
      border-color: ${styles.color.disabled.border} !important;
      color: ${styles.color.disabled.text} !important;
      cursor: not-allowed !important;
      pointer-events: none !important;
      touch-action: none !important;

      &::selection,
      & *::selection {
        background-color: ${styles.color.disabled.background} !important;
        color: ${styles.color.disabled.text} !important;
      }

      &::placeholder,
      & *::placeholder {
        color: ${styles.color.disabled.text} !important;
        font-size: 14px;
      }

      &:-webkit-autofill,
      & *:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px ${styles.color.neutral[0]} inset !important;
        -webkit-text-fill-color: ${styles.color.neutral[600]} !important;
      }

      & * {
        background-color: ${styles.color.disabled.background} !important;
        border-color: ${styles.color.disabled.border} !important;
        color: ${styles.color.disabled.text} !important;
        fill: ${styles.color.disabled.text} !important;
        cursor: not-allowed !important;
        pointer-events: none !important;
        touch-action: none !important;

        &::selection,
        & *::selection {
          background-color: ${styles.color.disabled.background} !important;
          color: ${styles.color.disabled.text} !important;
        }

        &::placeholder,
        & *::placeholder {
          color: ${styles.color.disabled.text} !important;
          font-size: 14px;
        }

        &:-webkit-autofill,
        & *:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 30px ${styles.color.neutral[0]} inset !important;
          -webkit-text-fill-color: ${styles.color.neutral[600]} !important;
        }
      }
    `}
`;

export const InputComponent = styled("input")`
  width: 100%;
  text-align: inherit;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button,
  &::-webkit-calendar-picker-indicator,
  &::-webkit-clear-button {
    -webkit-appearance: none;
    display: none;
  }

  -moz-appearance: textfield; /* Firefox */
  appearance: textfield;

  &[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
  }

  &[type="time"]::-webkit-calendar-picker-indicator {
    display: none;
  }

  &[type="datetime-local"]::-webkit-calendar-picker-indicator {
    display: none;
  }

  &[type="month"]::-webkit-calendar-picker-indicator {
    display: none.;
  }

  &[type="week"]::-webkit-calendar-picker-indicator {
    display: none;
  }

  &[type="search"]::-webkit-search-cancel-button,
  &[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }

  padding: 8px;
  border: none;
  outline: none;
  font-size: 14px;
  color: ${styles.text.primary} !important;
  flex-grow: 1;

  &::placeholder {
    color: ${styles.text.placeholder};
    font-size: 14px;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    box-shadow: 0 0 0 30px ${styles.color.neutral[0]} inset !important;
    -webkit-text-fill-color: ${styles.color.neutral[1000]} !important;
  }

  -webkit-box-shadow: none;
  box-shadow: none;

  &.error {
    color: var(--color-red-dark) !important;

    &::selection {
      background: var(--color-red-dark) !important;
      color: ${styles.text.primary} !important;
    }
  }
`;

export const IconWrapper = filterProps("div")`
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

export const SearchIconWrapper = filterProps("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 20px;
  margin-right: 6px;
  margin-left: 6px;
  cursor: pointer;

  & * {
    cursor: pointer;
  }

  &:last-child) {
    margin-right: 12px;
  }
`;
