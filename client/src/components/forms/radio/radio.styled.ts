import { css } from "styled-components";
import type { RadioProps, ContainerProps } from "./radio.types";
import { filterProps } from "@/helpers/types/style.types";
import { styles } from "@/helpers";
import { Label } from "@/components/font";

export const Container = filterProps<ContainerProps>("div")`
    display: inline-flex;
   flex-direction: column; 

  ${(props) =>
    props.direction &&
    props.direction === "row" &&
    css`
      flex-direction: row;
    `}

    gap: 6px;
    &.mickey-click * { 
      pointer-events: initial;
      touch-action: initial;
      cursor:pointer;
align-items: center;

    }

    & .mickey_hidden_radiobox {
        position: fixed;
        left: -1000px;
        top: -1000px;
        opacity: 0;
        z-index: -1;
    }
 
  ${(props) =>
    props.disabled &&
    css`
      & .mickey-radiobox {
        border-color: ${styles.color.disabled.border} !important;
        background-color: ${styles.color.disabled.background} !important;
        opacity: 0.8 !important;

        &::after {
          content: "";
          width: 10px;
          height: 10px;
        }
      }

      & .mickey-is-rdo-checked {
        &::after {
          background-color: ${styles.color.disabled.onBackground} !important;
        }
      }

      & .mickey-radiobox-label {
        color: ${styles.color.disabled.text} !important;
      }

      & * {
        cursor: not-allowed !important;
        pointer-events: none !important;
        touch-action: none !important;
      }
    `}
`;

export const RadioGroup = filterProps("div")`
  & .mickey-radiobox-label-left {
    margin-left:10px;
  }

  & .mickey-radiobox-label-right {
    margin-right:10px;
  }

  &[data-disabled="true"] {
    & .mickey-radiobox {
      border-color: ${styles.color.disabled.border}  !important;
      background-color: ${styles.color.disabled.background}  !important;
      opacity: 0.8 !important;
    }
    
    & .mickey-is-rdo-checked {
      &::after {
        background-color: ${styles.color.disabled.onBackground} !important;
      }
    }

    & .mickey-radiobox-label {
      color: ${styles.color.disabled.text} !important;
    }
  }
`;

export const RadioEffectsContainer = filterProps("div")` 
  display: flex;  
  &:hover .mickey-radiobox:not(.mickey-is-rdo-checked),
  &:active .mickey-radiobox:not(.mickey-is-rdo-checked) {
      border-color: ${styles.color.neutral[0]} ;
      background: ${styles.color.neutral[0]} ;
      box-shadow: 0 0 4px blue, 0 0 8px blue; 
  }



  &:hover .mickey-radiobox-label:not(.mickey-is-rdo-checked),
  &:active .mickey-radiobox-label:not(.mickey-is-rdo-checked) { 
      color: ${styles.color.primary.main};
  }  

  & .mickey-radiobox-label-left {
    margin-right: 10px;
  }

  & .mickey-radiobox-label-right {
    margin-left: 10px;
  }
`;

export const RadioContainer = filterProps<RadioProps>("div")`
  flex: 0 0 14px;
  position: relative;
  width: 14px;
  height: 14px;
  border: 2px solid ${styles.color.primary.main};
  border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  transition: border-color 0.3s, background-color 0.3s;

   &::after {
      content: '';
      height: 10px; 
      width: 10px;
      background-color: transparent;
      display: block;
      border-radius: 50%;
    }

  & .mickey-check-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: -3px;
  }

  &:focus {
    border-color: ${styles.color.primary.main};
  }

  
  &.mickey-is-rdo-checked {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    
   
    &::after {
      content: '';
      height: 10px; 
      width: 10px;
      background-color: ${styles.color.primary.main};
      display: block;
      border-radius: 50%;
    }
  }
 
`;

export const RadioLabel = filterProps<RadioProps>(Label)` 
`;
