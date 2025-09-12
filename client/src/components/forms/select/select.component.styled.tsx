import { css, styled } from "styled-components";

import type {
  SelectProps,
  ContainerProps,
  SelectDropdownProps,
} from "./select.component.types";
import { filterProps } from "@/helpers/types/style.types";
import { styles } from "@/helpers";

export const Container = filterProps<ContainerProps>("div")`
  display: flex;
  align-items: center;
  gap: 6px; 
  border: 1px solid ${(props) =>
    props.disabled
      ? styles.color.disabled.border
      : styles.surface.border.custom.color.light};
  border-radius: ${styles.radius.md};
  background: ${(props) =>
    props.disabled
      ? styles.color.disabled.background
      : styles.color.primary.contrast}; 
  outline: none;
  font-size: 14px;
  width: calc(100% - 2px);
  height: 40px;
  overflow: hidden;
  color: ${styles.text.primary};
  flex-grow: 1;
  position:relative;

  ${(props) =>
    props.disabled &&
    css`
      & * {
        cursor: not-allowed !important;
        pointer-events: none !important;
        touch-action: none !important;
      }
    `}

  transition: border-color 0.3s, background-color 0.3s;

  & .mickey-drop-arrow {
      fill: ${(props) =>
        props.disabled
          ? styles.color.disabled.onBackground
          : styles.color.primary.main}; 
      & svg { 
        fill: var(--color-red-dark) ; 
      }
    }

  &[data-focus="true"] {
    border-color: ${styles.color.primary.main};
    background: ${styles.color.primary.contrast};
    border-width: 2px;
    width: calc(100% - 4px);
    height: calc(40px - 2px);
    box-shadow: 0 0 4px ${styles.color.primary.light}, 0 0 8px ${
  styles.color.primary.light
};

  &.mickey-click * {
    pointer-events: initial;
    touch-action: initial;
    cursor:pointer;
  }

  & .mickey_hidden_input {
    position: fixed;
    left: -1000px;
    top: -1000px;
    opacity: 0;
    z-index: -1;
  } 


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
  ${(props: ContainerProps) => (props.width ? `width: ${props.width};` : ``)}


   
`;

export const SelectContainer = filterProps<SelectProps>("div")`
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
  width: 100%;

  
    
`;

export const SelectValue = styled("div")<{ disabled?: boolean }>`
  padding: 8px;
  position: relative;
  pointer-events: ${(props) => (props.disabled ? "none" : "initial")};
  touch-action: ${(props) => (props.disabled ? "none" : "initial")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  width: 100%;
  color: ${(props) =>
    props.disabled ? styles.color.disabled.text : styles.text.primary};
  background-color: ${(props) =>
    props.disabled ? styles.color.disabled.background : "transparent"};

  &:focus {
    outline: none;
    border: ${(props) =>
      props.disabled ? "none" : `1px solid ${styles.color.disabled.border}`};
    box-shadow: ${(props) =>
      props.disabled
        ? "none"
        : `0 0 4px ${styles.color.primary.light} , 0 0 8px ${styles.color.primary.light} `};
  }
`;

export const SelectDropdown = styled.div<SelectDropdownProps>`
  position: absolute;
  left: 0;
  right: 0;
  border: ${styles.surface.border.default.solidLightThin};
  background: ${styles.color.primary.contrast};
  z-index: ${styles.zIndex.top};
  max-height: ${(props) => (props.maxHeight ? `${props.maxHeight}px` : "none")};
  border-radius: 10px;
  pointer-events: auto;
  padding-top: 6px;
  padding-bottom: 6px;

  ${({ dropup }) =>
    dropup
      ? css`
          margin-bottom: 4px;
          bottom: 100%;
          top: auto;
        `
      : css`
          margin-top: 4px;
          top: 100%;
          bottom: auto;
        `}
`;

export const SelectOption = styled("div")`
  padding: 4px 8px;
  cursor: pointer;
  font-size: 14px;
  color: ${styles.text.primary} !important;
  margin: 1px ${styles.spacing.xxs};
  border-radius: ${styles.radius.md};

  &.option-selected {
    background-color: ${styles.color.primary.main} !important;
    color: ${styles.color.primary.contrast} !important;
  }
  &:hover {
    background-color: ${styles.color.primary.main} !important;
    color: ${styles.color.primary.contrast} !important;
  }
  &.make-different {
    border-top: 1px dashed;
    border-bottom: 1px dashed;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const SelectLabel = styled("div")`
  flex: 1;
  font-size: 14px;

  &[data-placeholder="true"]:not([data-selected="true"]) {
    color: ${styles.text.placeholder};
  }
`;

export const SelectArrow = styled("div")`
  flex: 0;
  display: flex;

  & * {
    pointer-events: initial;
    touch-action: initial;
    cursor: pointer;
  }
`;
