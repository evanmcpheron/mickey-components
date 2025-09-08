import styled from "styled-components";
import type { CellProperties } from "./cell.component";

export const StyledCell = styled.div<CellProperties>`
  touch-action: manipulation;
  position: relative;
  height: inherit;

  ${(props: CellProperties) =>
    props.display && props.display === "flex"
      ? `display:flex; flex: 1;`
      : `display:block;`}

  ${(props: CellProperties) =>
    props.alignItems
      ? `align-items: ${props.alignItems};`
      : `align-items: initial;`}   
      
        ${(props: CellProperties) =>
    props.cellDirection ? `flex-direction: ${props.cellDirection};` : ``}   
  
      ${(props: CellProperties) =>
    props.width ? `flex: 0 0 ${props.width};` : ``}    
  
      ${(props: CellProperties) =>
    props.height ? `height: ${props.height};` : ``}    
    
      ${(props: CellProperties) =>
    props.verticalAlign ? `vertical-align: ${props.verticalAlign};` : ``}    
  
      ${(props: CellProperties) =>
    props.justifyContent ? `justify-content: ${props.justifyContent};` : ``}    
          
      ${(props: CellProperties) =>
    props.cellWrap
      ? `flex-wrap: ${props.cellWrap}; white-space: nowrap;`
      : ``}          
          
        ${(props: CellProperties) => (props.gap ? `gap: ${props.gap};` : ``)}
`;
