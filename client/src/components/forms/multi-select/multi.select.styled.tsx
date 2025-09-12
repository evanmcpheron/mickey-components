import { filterProps } from "@/helpers/types/style.types";
import type {
  MultiSelectProps,
  ContainerProps,
  MultiSelectOptionValue,
} from "./multi.select.types";
import { styles } from "@/helpers";
import { css } from "styled-components";

export const Container = filterProps<ContainerProps>("div")`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  border: ${styles.surface.border.default.solidLightThin};
  border-radius: ${styles.radius.md};
  background: ${styles.color.primary.contrast}; 
  outline: none;
  font-size: 14px;
  color: ${styles.text.primary};
  flex-grow: 1;
  position: relative;
  transition: border-color 0.3s, background-color 0.3s; 
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: flex-start;
  padding: 6px;
  padding-top: 10px;
  padding-bottom: 10px;
  overflow: auto;
  overflow-x: hidden;

   ${(props) =>
     props.disabled &&
     css`
       background-color: ${styles.color.disabled.background} !important;

       & * {
         cursor: not-allowed !important;
         pointer-events: none !important;
         touch-action: none !important;
       }
     `}

  &[data-error="true"] {
    border-color: red;
    background: ${styles.color.primary.contrast};
    box-shadow: 0 0 4px red, 0 0 8px red;

    & .mickey-drop-arrow {
      fill: var(--color-red-dark) !important; 
      & svg { 
        fill: var(--color-red-dark) !important; 
      }
    } 
  } 
  ${(props: ContainerProps) =>
    props.width
      ? `width: calc(${props.width} - 14px);`
      : `width: calc(200px - 14px);`}
  ${(props: ContainerProps) =>
    props.height
      ? `height: calc(${props.height} - 22px);`
      : `max-height: calc(200px - 22px);`}
`;

export const MultiSelectContainer = filterProps<MultiSelectProps>("div")`
  position: relative; 
  pointer-events: initial;
  touch-action: initial;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const MultiSelectItem = filterProps<
  MultiSelectOptionValue & { disabled?: boolean }
>("div")`
  border-radius: ${styles.radius.md};
  padding: ${styles.spacing.xs};
  margin: ${styles.spacing.tiny} 0;

  &.mickey-hover {
    background-color: ${styles.color.primary.main};
    color: ${styles.color.primary.contrast} !important;

    & * {
    background-color: ${({ disabled }) =>
      disabled
        ? styles.color.disabled.onBackground
        : styles.color.primary.main} !important;
    color: ${styles.color.primary.contrast};
    }
  }


  ${(props: MultiSelectOptionValue & { disabled?: boolean }) =>
    props.selected
      ? `
    & {
      background-color: ${
        props.disabled
          ? styles.color.disabled.onBackground
          : styles.color.primary.main
      } !important;
      color: ${styles.color.primary.contrast} !important;

      & * {
        background-color: ${styles.color.primary.main} !important;
        color: ${styles.color.primary.contrast} !important;
      }
    }
    &[data-error="true"] {
      background-color: red !important;
      color: ${styles.color.primary.contrast} !important;

      & * {
        background-color: red !important;
        color: ${styles.color.primary.contrast} !important;
      }
    }  `
      : `& {
      color: ${styles.color.disabled.text} !important;
    }
    `}
`;
