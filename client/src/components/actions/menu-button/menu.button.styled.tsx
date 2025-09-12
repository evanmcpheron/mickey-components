// menu.button.styled.tsx
import { filterProps } from "@/helpers/types/style.types";
import { css, styled } from "styled-components";
import type {
  ContainerProps,
  MenuButtonDropdownProps,
} from "./menu.button.component.types";
import { styles } from "@/helpers";

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid ${styles.color.primary.main};
  border-radius: 6px;
  background: ${styles.color.primary.contrast};
  outline: none;
  font-size: 14px;
  color: ${styles.color.primary.main};
  flex-grow: 1;
  position: relative;

  transition: border-color 0.3s, background-color 0.3s;

  & * {
    fill: ${styles.color.primary.main};
    color: ${styles.color.primary.main};
  }

  &.mickey-hover {
    background-color: ${styles.color.primary.main};
    color: ${styles.color.primary.contrast};

    & * {
      fill: ${styles.color.primary.contrast};
      color: ${styles.color.primary.contrast};
    }
  }

  &.mickey-menu-open {
    background-color: ${styles.color.primary.main};
    color: ${styles.color.primary.contrast};

    & * {
      fill: ${styles.color.primary.contrast};
      color: ${styles.color.primary.contrast};
    }
  }

  &.mickey-menu-closed {
    background-color: ${styles.color.primary.contrast};
    color: ${styles.color.primary.main};

    & * {
      fill: ${styles.color.primary.main};
      color: ${styles.color.primary.main};
    }
  }

  &.mickey-click * {
    pointer-events: initial;
    touch-action: initial;
    cursor: pointer;
  }

  & .mickey_hidden_input {
    position: fixed;
    left: -1000px;
    top: -1000px;
    opacity: 0;
    z-index: -1;
  }

  &[data-error="true"] {
    border-color: var(--error-border-color);
    background: ${styles.color.primary.contrast};
    box-shadow: 0 0 4px red, 0 0 8px red;

    & .mickey-drop-arrow {
      fill: var(--color-red-dark) !important;
      & svg {
        fill: var(--color-red-dark) !important;
      }
    }
  }
  ${({ width }) => (width ? `width: ${width};` : ``)}

  &[disabled] {
    background-color: var(${styles.color.neutral[500]});
    border-color: var(${styles.color.neutral[500]});
    color: var(${styles.color.neutral[300]});
    pointer-events: none;
    touch-action: none;
    cursor: default;

    & * {
      color: var(${styles.color.neutral[300]});
      fill: var(${styles.color.neutral[300]});
    }

    &:hover {
      pointer-events: none;
      touch-action: none;
      background-color: var(${styles.color.neutral[500]});
      border-color: var(${styles.color.neutral[500]});
      color: var(${styles.color.neutral[300]});
      cursor: default;

      & * {
        color: var(${styles.color.neutral[300]});
        fill: var(${styles.color.neutral[300]});
      }
    }
  }
`;

export const MenuButtonContainer = filterProps<MenuButtonDropdownProps>("div")`
  position: relative; 
  pointer-events: initial;
  touch-action: initial;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center; 
  padding: 0px;
	width: 26px;
  height: 30px;

  top: -1px; 
`;

export const MenuButtonValue = styled("div")`
  position: relative;
  pointer-events: initial;
  touch-action: initial;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  cursor: pointer !important;

  & .menu-button-icon-default {
    position: relative;
    top: -3px;
    letter-spacing: 0.1rem;
    font: var(--font-bold);
    font-size: 12px;
  }
`;

export const MenuButtonDropdown = filterProps<MenuButtonDropdownProps>("div")`
	position: absolute;
	background: ${styles.color.primary.contrast};
	border: 1px solid red;
	border-radius: 10px;
	z-index: 9999;
	max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : "none")};
	pointer-events: auto;
	padding-top: 6px;
	padding-bottom: 6px;
 
  .menu-button-item {
    border-radius: 10px;
    margin-left: 6px;
    margin-right: 6px;
  }
    
	${({ dropup }) =>
    dropup
      ? css`
          bottom: 100%;
          top: auto;
          margin-bottom: 4px;
        `
      : css`
          top: 100%;
          bottom: auto;
          margin-top: 4px;
        `}

	${({ position }) =>
    position === "right"
      ? css`
          right: 0;
          left: auto;
        `
      : css`
          left: 0;
          right: auto;
        `}
`;

export const MenuButtonOption = styled("div")`
  padding: 4px 8px;
  cursor: pointer;
  font: var(--font-medium);
  font-size: 14px;
  color: ${styles.color.primary.main};

  &:hover {
    background-color: ${styles.color.primary.main};
    color: ${styles.color.primary.contrast};
  }

  &.option-selected {
    background-color: ${styles.color.primary.main};
    color: ${styles.color.primary.contrast};
  }
`;

export const MenuButtonLabel = styled("div")`
  flex: 1;
  font: var(--font-medium);
  font-size: 14px;

  & .menu-button-icon-default {
    font: var(--font-medium);
    font-size: 14px;
  }

  &[data-placeholder="true"]:not([data-selected="true"]) {
    color: var(${styles.color.neutral[200]});
  }
`;

export const MenuButtonArrow = styled("div")`
  flex: 0;
  display: flex;

  & * {
    pointer-events: initial;
    touch-action: initial;
    cursor: pointer;
  }
`;
