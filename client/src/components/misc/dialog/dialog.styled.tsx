import { filterProps } from "@/helpers/types/style.types";
import type {
  DialogBodyProps,
  DialogContainerProps,
  DialogHeaderProps,
  DialogProps,
} from "./dialog.types";
import { styles } from "@/helpers";

export const Container = filterProps<DialogProps>("div")` 
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1001;
`;

export const Background = filterProps("div")` 
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.1);
`;

export const DialogContainer = filterProps<DialogContainerProps>("div")` 
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
    background: ${styles.color.neutral[100]};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: ${(props) => props.radius || "10px"};
    display: flex;
    flex-direction: column;

    @media (max-width: 900px) {
        width: ${(props) => props.mdWidth || props.width};
    }
`;

export const DialogHeader = filterProps<DialogHeaderProps>("div")` 
  padding: ${(props) => (props.disablePadding ? "0px !important" : "1rem")}; 
  font-size: 1.25rem;
  font-weight: bold;
  border-bottom: 1px solid ${styles.color.primary.main};
  html.phone & {
    border-bottom: 1px solid ${styles.color.neutral[600]};
  }
`;

export const DialogBody = filterProps<DialogBodyProps>("div")` 
    padding: ${(props) => (props.disablePadding ? "0px !important" : "1rem")}; 
    padding: 1rem; 
    overflow:auto;
    overflow-x:hidden;
    flex: 1;
    
    html.phone & {
      overflow: auto;
      -webkit-overflow-scrolling: touch; 
      scrollbar-width: none; 
      overflow-x: hidden;
      overscroll-behavior-x: none;
      touch-action: pan-y;

      &::-webkit-scrollbar {
        display: none; 
      }
    }
  ${(props: DialogBodyProps) =>
    props.scrollable
      ? `overflow:hidden !important;overflow-y:hidden !important;overflow-x:hidden !important;`
      : ``}
`;

export const DialogFooter = filterProps("div")` 
  padding: 1rem;
  border-top: 1px solid ${styles.color.primary.main};
  display: flex;
  justify-content: flex-end;
  
  html.phone & {
    border-bottom: 1px solid var(--color-gray-light6);
    padding-bottom: 40px;

    @supports (padding-bottom: constant(safe-area-inset-bottom)) {
      & {
        padding-bottom: calc(constant(safe-area-inset-bottom) + 40px) !important;
      }
    }
  
    @supports (padding-bottom: env(safe-area-inset-bottom)) {
      & {
        padding-bottom: calc(env(safe-area-inset-bottom) + 40px) !important;
      }
    }
  }  
`;
