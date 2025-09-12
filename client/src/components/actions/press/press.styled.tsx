import { filterProps } from "@/helpers/types/style.types";
import type { OnPressProps } from "./press.types";
import { css } from "styled-components";

export const Container = filterProps<OnPressProps>("div")` 
  display: block;  
  pointer-events: initial !important;
  touch-action: initial !important;
  cursor: pointer !important;
  width: -webkit-fill-available;

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none !important;
      touch-action: none !important;
      cursor: pointer !important;
    `}
  
  & * {
    pointer-events: none !important;
    touch-action: none !important;
    cursor: pointer !important;
  }
`;
