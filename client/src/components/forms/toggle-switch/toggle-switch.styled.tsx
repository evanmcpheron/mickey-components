import { css } from "styled-components";
import type { ContainerProps, SliderProps } from "./toggle-switch.types";
import { filterProps } from "@/helpers/types/style.types";
import { styles } from "@/helpers";

export const Container = filterProps<ContainerProps>("div")`
    display: inline-flex;
    align-items: center;
    gap: 6px;

    &.mickey-click * {
        pointer-events: initial;
        touch-action: initial;
        cursor: pointer;
    }

    &:hover .mickey-toggle,
    &:active .mickey-toggle {
        border-color: ${styles.color.primary.main};
        background: ${styles.color.primary.main};
        box-shadow: 0 0 4px ${styles.color.primary.main}, 0 0 8px ${
  styles.color.primary.main
}; 
    }

    &:hover .mickey-toggle-label,
    &:active .mickey-toggle-label { 
        color: ${styles.color.primary.main};
    }

    ${(props) =>
      props.disabled &&
      css`
        border-color: ${styles.color.disabled.border} !important;
        color: ${styles.color.disabled.text} !important;
        cursor: not-allowed !important;
        pointer-events: none !important;
        touch-action: none !important;

        & * {
          border-color: ${styles.color.disabled.border} !important;
          color: ${styles.color.disabled.text} !important;
          fill: ${styles.color.disabled.background} !important;
          cursor: not-allowed !important;
          pointer-events: none !important;
          touch-action: none !important;
        }
      `}
`;

export const SwitchLabel = filterProps<ContainerProps>("label")`
    position: relative;
    display: inline-block; 
    height: 100%;
    cursor: pointer;
`;

export const Slider = filterProps<SliderProps>("span")`
    position: relative;
    display: inline-block;
    width: 40px; 
    height: 20px; 
    background-color: ${styles.color.neutral[0]};
    border:1px solid ${styles.color.neutral[400]};
    border-radius: 20px;
    cursor: pointer;
    transition: 0.4s;


    &::before {
        position: absolute;
        content: '';
        height: 16px; 
        width: 16px; 
        left: 2px;
        bottom: 2px;
        background-color: ${styles.color.primary.main};
        border-radius: 50%;
        transition: 0.4s;
    }

     &[data-disabled="true"] {
      background-color: ${styles.color.disabled.background};
     }

    &[data-disabled="true"]::before {
      position: absolute;
      content: '';
      height: 16px; 
      width: 16px; 
      left: 2px;
      bottom: 2px;
      background-color: ${styles.color.disabled.onBackground};
      border-radius: 50%;
      transition: 0.4s;
  }
    ${(props) =>
      props.toggled &&
      css`
        background-color: ${styles.color.primary.main};
        border-color: ${styles.color.primary.main};
        &::before {
          background-color: ${styles.color.neutral[0]};
          transform: translateX(20px);
        }
      `}
`;
