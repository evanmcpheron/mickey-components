import styled from "styled-components";
import type { RowProperties } from "./row.component";
import { styles } from "@/helpers";

export const StyledRow = styled.div<RowProperties>`
  touch-action: manipulation;
  z-index: 1;
  position: relative;
  display: flex;
  flex-wrap: initial;
  width: 100%;
  gap: ${styles.spacing.sm};

  ${(props: RowProperties) =>
    props.rowDirection
      ? `flex-direction: ${props.rowDirection};`
      : `flex-direction: row;`}
  ${(props: RowProperties) =>
    props.justifyContent ? `justify-content: ${props.justifyContent};` : ``}
    ${(props: RowProperties) =>
    props.alignItems ? `align-items: ${props.alignItems};` : ``}
    ${(props: RowProperties) => (props.gap ? `gap: ${props.gap};` : ``)}
    ${(props: RowProperties) =>
    props.rowWrap ? `flex-wrap: ${props.rowWrap};` : ``}
    ${(props: RowProperties) => (props.stretchRow ? `width: 100%;` : ``)}
    ${(props: RowProperties) =>
    props.minWidth ? `min-width: ${props.minWidth};` : ``}
    ${(props: RowProperties) =>
    props.minHeight ? `min-width: ${props.minHeight};` : ``}
    ${(props: RowProperties) =>
    props.width ? `flex: 0 0 ${props.width};` : ``}
    ${(props: RowProperties) =>
    props.height ? `height: ${props.height};` : ``}
    ${(props: RowProperties) => (props.gap ? `gap: ${props.gap};` : ``)};
`;
