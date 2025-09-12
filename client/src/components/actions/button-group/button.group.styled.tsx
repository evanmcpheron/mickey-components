import { styles } from "@/helpers";
import { filterProps } from "@/helpers/types/style.types";

export const Container = filterProps("div")`
  position: relative;
  display: flex; 
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  gap: 0px;
  width: fit-content; 

  & .button-group-item {
    border-right-width: 0px !important; 
    border-radius: 0px; 
    border-color: var(${styles.color.neutral[500]}) !important;
  }

  
  & .button-group-item:last-child {
    border-right-width: 1px !important; 
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  
  & .button-group-item:first-child {
    border-left-width: 1px !important;
    border-right-width: 0px !important;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
`;
